import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Waveyu - Webflow HTML website template",
  description:
    "Waveyu surf camp landing page recreated in Next.js, TypeScript, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      data-wf-domain="waveyu.webflow.io"
      data-wf-page="697a02e7f32a15a9f2b4ae30"
      data-wf-site="697a02e6f32a15a9f2b4adfc"
      data-wf-status="1"
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <link
          href="https://cdn.prod.website-files.com"
          rel="preconnect"
          crossOrigin="anonymous"
        />
        <link
          href="https://cdn.prod.website-files.com/697a02e6f32a15a9f2b4adfc/css/waveyu.webflow.shared.64b6c47da.min.css"
          rel="stylesheet"
          type="text/css"
          integrity="sha384-ZLbEfap3wp2s0iy3zLtWm8CIiZyzvxT4C1SuL4Z+h2fmNU9I9BJ6FuAPbQ/4RqQ+"
          crossOrigin="anonymous"
        />
        <link
          href="https://cdn.prod.website-files.com/697a02e6f32a15a9f2b4adfc/css/waveyu.webflow.697a02e7f32a15a9f2b4ae30-6e088d5f9.min.css"
          rel="stylesheet"
          type="text/css"
          integrity="sha384-iYJ87ECX+Ff6V3KNM9jNv1ATMoBCMVXYb31nZPAPBtUpU5rJCO/tqFnkKMx4WvYw"
          crossOrigin="anonymous"
        />
        <link
          href="https://cdn.prod.website-files.com/697a02e6f32a15a9f2b4adfc/69b2df4c885e2d8b5f55f2e4_Favicon.png"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link
          href="https://cdn.prod.website-files.com/697a02e6f32a15a9f2b4adfc/69b2df52584964f233f7b1ec_Webclip.png"
          rel="apple-touch-icon"
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              '!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);',
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
