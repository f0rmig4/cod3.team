import "./css/style.css";

import { Inter, Architects_Daughter } from "next/font/google";

import Header from "@/components/ui/header";
// import Banner from "@/components/banner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const architects_daughter = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-architects-daughter",
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "Cod3.team",
  description:
    "Somos uma equipe multidisciplinar de programadores, engenheiros e designers independentes, oferecendo uma força de trabalho qualificada.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${architects_daughter.variable} font-mono antialiased bg-gray-900 text-gray-200 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
          {/* <Banner /> */}
        </div>
      </body>
    </html>
  );
}
