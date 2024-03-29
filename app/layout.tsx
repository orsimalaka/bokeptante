import "./globals.css";

import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { SITENAME } from "@/lib/constants";
import { ThemeProvider } from "@/components/theme-provider";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: `${SITENAME} - Video Bokep Indo Viral Terbaru`,
    description: `${SITENAME} Video bokep indo jepang indonesia barat terbaru viral korea simontok china tante live sma paksa ngentot abg jilbab cewek bocil smp pijat pelajar.`,
    metadataBase: new URL("https://bokep-tante.pages.dev"),
    alternates: {
        canonical: `/`,
    },
    openGraph: {
        title: `${SITENAME} Video Bokep Indo Jepang Barat Viral Terbaru`,
        description: `${SITENAME} Video bokep indo jepang indonesia barat terbaru viral korea simontok china tante live sma paksa ngentot abg jilbab cewek bocil smp pijat pelajar.`,
        url: `/`,
        type: `website`,
    },
    verification: {
        google: 'p8EFtHt9tNbgpYwgFb_8AQJGlMi4zhMSZMECbqahzFQ',
        yandex: 'd4de4b15cc80dc14',
    },
};

export const runtime = "edge";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": `${SITENAME}`,
        "tagline": `${SITENAME} - Video Bokep Indo Jepang Barat Viral Terbaru`,
        "description": "Bokep Tante Video bokep indo jepang indonesia barat terbaru viral korea simontok china tante live sma paksa ngentot abg jilbab cewek bocil smp pijat pelajar.",
        "logo": "https://bokep-tante.pages.dev/favicon.ico",
        "url": "https://bokep-tante.pages.dev",
        "founder":{
            "@type":"Person",
            "name":"admin",
            "url":"https://bokep-tante.pages.dev"
            },
            "foundingDate":"2024-02-01"
        }
        const jsonLd1 = {
            "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `${SITENAME}`,
        "id": "https://bokep-tante.pages.dev/#WebPage",
        "url": "https://bokep-tante.pages.dev",
        "tagline": `${SITENAME} - Video Bokep Indo Jepang Barat Viral Terbaru`,
        "description": "Bokep Tante Video bokep indo jepang indonesia barat terbaru viral korea simontok china tante live sma paksa ngentot abg jilbab cewek bocil smp pijat pelajar.",
        "image": "https://bokep-tante.pages.dev/favicon.ico",
        "potentialAction":{
            "@type":"ReadAction",
            "target":"https://bokep-tante.pages.dev/"}
        }
        const jsonLd2 = {
            "@context": "https://schema.org",
        "@type": "Website",
        "name": `${SITENAME}`,
        "id": "https://bokep-tante.pages.dev/#Website",
        "url": "https://bokep-tante.pages.dev",
        "tagline": `${SITENAME} - Video Bokep Indo Jepang Barat Viral Terbaru`,
        "description": "Bokep Tante Video bokep indo jepang indonesia barat terbaru viral korea simontok china tante live sma paksa ngentot abg jilbab cewek bocil smp pijat pelajar.",
        "potentialAction":{
            "@type":"SearchAction",
            "target":{
                "@type":"EntryPoint",
                "urlTemplate":"https://bokep-tante.pages.dev/?q={search_term_string}"
            },
            "query-input":"required name=search_term_string"}
            }
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={font.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd1) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd2) }}
        />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
