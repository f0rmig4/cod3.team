export const metadata = {
  title: "Cod3 Team",
  description:
    "Somos uma equipe multidisciplinar de programadores, engenheiros e designers independentes, oferecendo uma força de trabalho qualificada.",
};

import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Features from "@/components/features";
import Companies from "@/components/companies";
import Timeline from "@/components/timeline";
import Testimonials from "@/components/testimonials";
import Cases from "@/components/cases";
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
      <Cases />
      <Testimonials />
      <Newsletter />
    </>
  );
}
