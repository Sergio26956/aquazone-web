import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0066cc" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
