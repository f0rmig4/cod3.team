export const metadata = {
  title: "Cod3 Team",
  description:
    "We are a multidisciplinary team of independent programmers, engineers and designers, offering a qualified workforce.",
};

import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Features from "@/components/features";
import Companies from "@/components/companies";
import Timeline from "@/components/timeline";
// import Cases from "@/components/cases";
import Newsletter from "@/components/newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      {/* <Team /> */}
      <Companies />
      <Timeline />
      <Stats />
      {/* <Cases /> */}
      <Newsletter />
    </>
  );
}
