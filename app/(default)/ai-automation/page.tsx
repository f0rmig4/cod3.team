export const metadata = {
  title: "Transforme seu negócio com Agentes de Inteligência Artificial",
  description:
    "Aproveite os benefícios da IA para aumentar a produtividade, reduzir custos e melhorar a experiência do cliente.",
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
                Potencialize sua equipe de vendas com IA
              </h1>
              <h3 className="h3 mb-8 mt-6">
                Capacite sua empresa com Agentes de IA treinados, disponíveis no
                WhatsApp e prontos para atender 24/7.
              </h3>

              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div data-aos="fade-up" data-aos-delay="400">
                  <a
                    className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                    href="https://web.whatsapp.com/send/?phone=5551999489818"
                    target="_blanck"
                  >
                    Fale com um especialista
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
            Pronto para iniciar sua jornada com IA?
          </h3>
          <h4 className="h4" data-aos="fade-up">
            Entre em contato agora e descubra como a Inteligência Artificial
            pode transformar o seu negócio.
          </h4>
        </div>
        <Newsletter />
      </div>
    </section>
  );
}
