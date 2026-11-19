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
    test.use({ colorScheme: scheme });

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
