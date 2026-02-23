import {
  Varela_Round,
  Google_Sans,
  Outfit,
  Darker_Grotesque,
} from "next/font/google";

export const varela = Varela_Round({
  subsets: ["latin"],
  weight: ["400"],
});

export const google_sans = Google_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  fallback: ["sans-serif"],
});

export const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  fallback: ["sans-serif"],
});
export const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  fallback: ["sans-serif"],
});
