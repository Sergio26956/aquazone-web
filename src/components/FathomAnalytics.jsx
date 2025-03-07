import Script from 'next/script';

export default function FathomAnalytics() {
  return (
    <Script
      src="https://cdn.usefathom.com/script.js"
      data-site="TU_SITE_ID"
      strategy="afterInteractive"
    />
  );
}
