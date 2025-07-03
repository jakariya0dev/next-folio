import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import { GoogleAnalytics } from './components/GoogleAnalytics';

const GA_MEASUREMENT_ID = "G-Z9PJSGRH2D"; // 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jakariya | Full-Stack Developer",
  description:
    "A skilled web developer with expertise in MERN stack Next.js, Nest.js, Vue.js, Laravel, and Flutter.",
  keywords:
    "Jakariya, Jakariya H., Zakaria Hossain Al-Hadi, Cunning Mentor, MERN Stack Developer, JavaScript Developer, React Developer, Next.js Developer, Vue.js Developer, Laravel Developer, Flutter Developer, Node.js Developer, Web Development, Web Developer, YouTube Programming, Freelancing, Full Stack Developer, Web developer in Rangpur, web developer in Dhaka",
  authors: [{ name: "Jakariya" }],
  openGraph: {
    title: "Jakariya | Full-Stack Developer",
    description:
      "A skilled web developer with expertise in MERN stack Next.js, Nest.js, Vue.js, Laravel, and Flutter.",
    url: "https://jakariya.dev",
    siteName: "Jakariya.dev",
    images: [
      {
        url: "https://jakariya.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jakariya | Full-Stack Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jakariya | Full-Stack Developer",
    description:
      "A skilled web developer with expertise in MERN stack Next.js, Nest.js, Vue.js, Laravel, and Flutter.",
    images: ["https://jakariya.dev/og-image.jpg"],
  },
  metadataBase: new URL("https://jakariya.dev"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* GA Script */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
