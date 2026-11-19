/**
 * Real, approved testimonials only. Starts EMPTY on purpose (CLAUDE.md honesty rules).
 * The social proof section renders nothing while this list has no approved entries.
 */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  /** Written permission on file. Entries without it are never rendered. */
  approved: true;
}

export const testimonials: Testimonial[] = [];
