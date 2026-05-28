import "./globals.css";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body>

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MHZ3ENFCJZ"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
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