import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';
import Script from 'next/script';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-cairo',
});

export const metadata: Metadata = {
  title: 'كمبروسر الرياض المطور | شفط وتسليك مجاري بالرياض - طوارئ 24 ساعة',
  description: 'المؤسسة الرائدة بالرياض لشفط وتسليك المجاري بالضغط والكمبروسر الحديث. بدون تكسير، ضمان نظافة تامة، خدمة فورية 24 ساعة. تغطية جميع أحياء الرياض.',
  keywords: 'شفط بيارات الرياض, تسليك مجاري الرياض, كمبروسر مجاري, شفط صرف صحي الرياض, طوارئ صرف صحي, كمبروسر الرياض المطور',
  openGraph: {
    title: 'كمبروسر الرياض المطور - حلول الصرف الصحي المتطورة',
    description: 'خدمات شفط وتسليك المجاري بأحدث التقنيات في الرياض - طوارئ 24 ساعة',
    locale: 'ar_SA',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://kompressor-riyadh.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <head>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PlumbingService",
              "name": "كمبروسر الرياض المطور",
              "description": "خدمات شفط وتسليك المجاري بالرياض بأحدث تقنيات الضغط والكمبروسر",
              "areaServed": "Riyadh, Saudi Arabia",
              "telephone": "+966576807249",
              "openingHours": "Mo-Su 00:00-23:59",
              "priceRange": "₪‎₪‎",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Riyadh",
                "addressRegion": "Riyadh Province",
                "addressCountry": "SA"
              }
            })
          }}
        />
      </head>
      <body className="font-sans bg-white text-slate-800 antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
