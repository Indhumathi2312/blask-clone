import './globals.css';

export const metadata = {
  title: 'Growth-Driven Creative Partner for Tech Startups | Blask',
  description: 'We turn complex products into clear, high-converting websites and interfaces - combining UX, design systems, and no-code development to help teams launch faster and scale with confidence.',
  openGraph: {
    title: 'Growth-Driven Creative Partner for Tech Startups | Blask',
    description: 'We turn complex products into clear, high-converting websites and interfaces - combining UX, design systems, and no-code development to help teams launch faster and scale with confidence.',
    images: ['https://cdn.prod.website-files.com/6964e4809f9f167e5dc5f51d/69dbe70561eeab7a95634828_Screenshot%202026-04-12%20at%2020.03.20%201%20(1).png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Growth-Driven Creative Partner for Tech Startups | Blask',
    description: 'We turn complex products into clear, high-converting websites and interfaces - combining UX, design systems, and no-code development to help teams launch faster and scale with confidence.',
    images: ['https://cdn.prod.website-files.com/6964e4809f9f167e5dc5f51d/69dbe70561eeab7a95634828_Screenshot%202026-04-12%20at%2020.03.20%201%20(1).png'],
  },
  icons: {
    icon: '/images/69b87319359b9dcd0aa81077_favicon.png',
    apple: '/images/69b8731870166879c4e346ce_favicon2.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://cdn.prod.website-files.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#080808] text-white antialiased selection:bg-white selection:text-black min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
