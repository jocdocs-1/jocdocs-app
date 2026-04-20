import { Roboto_Condensed, Allison } from "next/font/google";

export const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  style: ["normal", "italic"],
});

export const allison = Allison({
  subsets: ["latin"],
  weight: "400",
});