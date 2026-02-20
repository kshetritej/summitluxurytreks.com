import { Varela_Round, Google_Sans } from "next/font/google";

export const varela = Varela_Round({
  subsets: ["latin"],
  weight: ["400"],
});

export const google_sans = Google_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  fallback: ["sans-serif"],
});
