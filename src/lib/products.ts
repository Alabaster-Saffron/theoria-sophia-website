// Source-of-truth product catalog for Theoria Sophia checkout.
//
// Pricing lives here, NOT in the client. The /api/checkout route
// looks up products by id and builds Stripe line items from this
// data so a tampered request can't change the price.

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number; // USD dollars (whole number, multiplied by 100 for Stripe)
  currency: "usd";
  /** What the buyer needs to access the course content. */
  coursePasscode: string;
  /** Path on the site where the course content lives, gated by passcode. */
  coursePath: string;
  inStock: boolean;
};

export const products: Product[] = [
  {
    id: "healing-body-dysmorphia",
    name: "Healing Body Dysmorphia & Reclaiming our Feminine Blueprint",
    description:
      "Theoria Sophia School — Finding Sanctuary within the Feminine Form. A self-paced online course returning to the garden within.",
    price: 222,
    currency: "usd",
    coursePasscode: "Evesgardenparty",
    coursePath: "/feminine-healing-arts/healing-body-dysmorphia/course",
    inStock: true,
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
