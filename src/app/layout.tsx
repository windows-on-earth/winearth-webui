import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Windows on Earth Web UI",
  description: "View movies of the Earth from the lens of NASA astronauts on the ISS",
};

function Navigation() {
  return (
    <header className="bg-yellow-500 block text-white">
      <nav className="flex justify-between p-6 px-4">
        <div className="flex items-center justify-between w-full mx-16">
          <div className="xl:w-1/3 basis-1/6">
            <Link
              className="block text-2xl max-w-max text-slate-600 dark:text-slate-50 font-medium"
              href="/"
            >
              Windows On Earth
            </Link>
          </div>
          <div className="xl:block xl:w-1/3 justify-self-end">
            <div className="flex items-center justify-end gap-2">
              <Link
                className="text-slate-600 dark:text-slate-50 hover:text-yellow-200 font-bold"
                href="/"
              >
                Home
              </Link>
              <Link
                className="text-slate-600 dark:text-slate-50 hover:text-yellow-200 font-bold"
                href="/search"
              >
                Search
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      
      <html lang="en" className="dark">
        <body className={`${inter.className} dark:text-white`}>
          <Navigation/>
          {children}
        </body>
      </html>
    
  );
}
