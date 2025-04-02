import { Inter, Lusitana } from 'next/font/google';

export type FontConfig = {
  subsets: string[];
  weight?: string[];
  variable?: string;
  style?: string | { fontFamily: string; fontWeight?: number; fontStyle?: string };
  className?: string;
};

const interFont = Inter({ subsets: ['latin'] });
export const inter: FontConfig = {
  subsets: ['latin'],
  ...interFont,
  style: interFont.style,
};

const lusitanaFont = Lusitana({ weight: ['400', '700'], subsets: ['latin'] });
export const lusitana: FontConfig = {
  subsets: ['latin'],
  weight: ['400', '700'],
  ...lusitanaFont,
};
