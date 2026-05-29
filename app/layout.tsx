import "./globals.css";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <head>
        <title>Kaos Garden</title>

        <meta
          name="description"
          content="Official website of Kaos Garden — Canadian independent metal band."
        />

        <meta
          name="keywords"
          content="Kaos Garden, metal band, canadian metal, heavy music"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body>

        {/* GOOGLE ANALYTICS */}
        <Script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-MHZ3ENFCJZ"
  strategy="lazyOnload"
/>

<Script id="google-analytics" strategy="lazyOnload">
          {`s
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MHZ3ENFCJZ');
          `}
        </Script>

        {children}

      </body>

    </html>
  );
}