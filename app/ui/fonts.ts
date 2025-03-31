import { Inter, Lusitana } from 'next/font/google';

// Define a type for the font configuration
export type FontConfig = {
  subsets: string[];
  weight?: string[]; // Optional, as not all fonts have weights
  variable?: string;
  style?: string | { fontFamily: string; fontWeight?: number; fontStyle?: string }; // Allow object for style
  className?: string; // Optional, as not all fonts have className
};
export const inter: FontConfig = {
  subsets: ['latin'],
  ...Inter({ subsets: ['latin'] }),
  style: Inter({ subsets: ['latin'] }).style, // Explicitly include style
};

export const lusitana: FontConfig = {
  subsets: ['latin'],
  weight: ['400', '700'],
  ...Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
  }),
};