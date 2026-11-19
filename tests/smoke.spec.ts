import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const pages = [
  '/',
  '/pt-br/',
  '/es/',
  '/pricing/',
  '/pt-br/features/in-out-editor/',
  '/legal/privacy/',
];

for (const scheme of ['light', 'dark'] as const) {
  test.describe(`${scheme} theme`, () => {
    // Dark is the default; light is an explicit visitor choice (stored).
    test.beforeEach(async ({ page }) => {
      if (scheme === 'light') {
        await page.addInitScript(() => localStorage.setItem('cr-theme', 'light'));
      }
    });

    for (const path of pages) {
      test(`${path} renders, has no horizontal scroll and no axe violations`, async ({ page }) => {
        await page.goto(path);
        await expect(page.locator('h1')).toBeVisible();
        await expect(page.locator('html')).toHaveAttribute('data-theme', scheme);
        const overflow = await page.evaluate(
          () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
        );
        expect(overflow).toBeLessThanOrEqual(0);
        const results = await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
          .analyze();
        expect(results.violations).toEqual([]);
      });
    }
  });
}

test('SEO basics: lang, canonical and hreflang', async ({ page }) => {
  await page.goto('/pt-br/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR');
  await expect(page.locator('link[rel=canonical]')).toHaveAttribute('href', /\/pt-br\/$/);
  for (const lang of ['en', 'pt-BR', 'es', 'x-default']) {
    await expect(page.locator(`link[rel=alternate][hreflang="${lang}"]`)).toHaveCount(1);
  }
});

test('placeholder pages are noindex', async ({ page }) => {
  await page.goto('/pricing/');
  await expect(page.locator('meta[name=robots]')).toHaveAttribute('content', /noindex/);
});

test('theme choice persists across navigation', async ({ page }) => {
  await page.goto('/');
  const before = await page.locator('html').getAttribute('data-theme');
  const target = before === 'dark' ? 'light' : 'dark';
  await page.locator(`footer [data-theme-set="${target}"]`).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', target);
  await page.goto('/pt-br/');
  await expect(page.locator('html')).toHaveAttribute('data-theme', target);
});

test('skip link moves focus to main', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.locator('a[href="#main"]')).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/#main$/);
});

test('unknown route returns the 404 page', async ({ page }) => {
  const res = await page.goto('/does-not-exist/');
  expect(res?.status()).toBe(404);
  await expect(page.locator('h1')).toBeVisible();
});

test('waitlist form validates before sending', async ({ page }) => {
  await page.goto('/pt-br/early-access/');
  await page.locator('#ea-email').fill('nope');
  await page.getByRole('button', { name: 'Entrar na lista' }).click();
  await expect(page.locator('#ea-email')).toHaveAttribute('aria-invalid', 'true');
  await expect(page.locator('#ea-email')).toBeFocused();
  await expect(page.locator('[data-err="consent"]')).toBeVisible();
});

test('#clipper preselects the clipper side', async ({ page }) => {
  await page.goto('/pt-br/early-access/#clipper');
  await expect(page.locator('input[name=profile][value=clipper]')).toBeChecked();
  await expect(page.locator('label[for="ea-platform"]')).toHaveText('Onde você posta?');
});

test('home doors lead to each side', async ({ page }) => {
  await page.goto('/pt-br/');
  await page.locator('#hero-cta a.door').first().click();
  await expect(page).toHaveURL(/\/pt-br\/streamers\/$/);
});

test('prize board splits the pool the visitor sets', async ({ page }) => {
  await page.goto('/pt-br/clippers/');
  const slider = page.locator('.board input[type=range]').first();
  await slider.scrollIntoViewIfNeeded();
  await slider.fill('20000');
  await expect(page.locator('.board .pool-value').first()).toHaveText(/20\.000/);
  await expect(page.locator('.board .amt').first()).toHaveText(/10\.000/);
});
