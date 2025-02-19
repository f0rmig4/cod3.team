export const metadata = {
  title: "Transform Your Business with Artificial Intelligence Agents",
  description:
    "Leverage the benefits of AI to improve productivity, reduce costs, and enhance customer experience.",
};

import Blocks from "@/components/blocks";
import Zigzag from "@/components/zigzag";
import Newsletter from "@/components/newsletter";

export default function AIAutomation() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          {/* Hero content */}
          <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h1" data-aos="fade-up">
                Clone Your Best Salesperson with AI
              </h1>
              <h3 className="h3 mb-8 mt-6">
                Have trained AI Agents for your company, available on WhatsApp,
                tirelessly 24 hours a day.
              </h3>

              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div data-aos="fade-up" data-aos-delay="400">
                  <a
                    className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                    href="https://web.whatsapp.com/send/?phone=5551999489818"
                    target="_blanck"
                  >
                    Talk to an expert
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Blocks />
        <Zigzag />
        <div className="mt-20 mb-12 pl-6 pr-6">
          <h3 className="h3" data-aos="fade-up">
            Ready to start your journey with AI?
          </h3>
          <h4 className="h4" data-aos="fade-up">
            Get in touch now and find out how Artificial Intelligence can
            transform your business.
          </h4>
        </div>
        <Newsletter />
      </div>
    </section>
  );
}
