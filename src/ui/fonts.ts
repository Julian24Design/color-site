import localFont from "next/font/local";
// import { Inter, Lusitana } from 'next/font/google';

// export const inter = Inter({
//     subsets: ['latin']
// });

// export const lusitana = Lusitana({
//   weight: ['400', '700'],
//   subsets: ['latin'],
// });

const linkfree = localFont({
  variable: "--font-linkfree",
  display: "swap",
  src: [
    {
      path: "../fonts/Inkfree.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export { linkfree };
