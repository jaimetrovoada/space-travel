import { Barlow_Condensed, Barlow, Bellefair } from "@next/font/google";

export const barlowCondensed = Barlow_Condensed({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
});

export const barlow = Barlow({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-barlow",
});

export const bellefair = Bellefair({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bellefair",
});
