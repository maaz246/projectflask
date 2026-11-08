import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./res-flasktechs.css";


const instrumentSans = localFont({
  src: [
    {
      path: "../../public/fonts/_Instrument Sans__Instrument Sans_--italic.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../public/fonts/_Instrument Sans__Instrument Sans_--italic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-instrument-sans",
  display: "swap",
});

const familjenGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/_Familjen Grotesk__Familjen Grotesk_--italic.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../public/fonts/_Familjen Grotesk__Familjen Grotesk_--italic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-familjen-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flasktechs | Web Design Studio",
  description: "We design and develop high-converting websites, digital storefronts, and custom web applications that scale your business.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${familjenGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
