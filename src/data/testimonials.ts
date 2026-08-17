// [PLACEHOLDER] Optional section. Pull real quotes from LinkedIn recommendations if you have them,
// or delete this section entirely (see Testimonials.tsx — it self-hides if this array is empty).

export type Testimonial = {
  id: string
  name: string
  title: string
  quote: string
  photo?: string
}

export const testimonials: Testimonial[] = []
