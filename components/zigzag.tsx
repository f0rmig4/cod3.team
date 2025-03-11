import Image from "next/image";

import FeatImage01 from "@/public/images/zig-zag-1.png";
import FeatImage02 from "@/public/images/zig-zag-2.png";
import FeatImage03 from "@/public/images/zig-zag-3.png";
import FeatImage04 from "@/public/images/zig-zag-4.png";

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Cabeçalho da seção */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">
              Diversos setores
              <br /> sendo transformados pela IA
            </h1>
          </div>

          {/* Itens */}
          <div className="grid gap-20">
            {/* 1º item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Imagem */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto svg-custom"
                  src={FeatImage01}
                  alt="Recursos 01"
                  height={200}
                />
              </div>
              {/* Conteúdo */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">Atendimento ao Cliente</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Agentes de IA podem lidar com até 70% das demandas e dúvidas
                    frequentes. Questões mais complexas podem ser
                    automaticamente encaminhadas para atendentes humanos assim
                    que a IA não souber a resposta.
                  </p>
                </div>
              </div>
            </div>

            {/* 2º item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Imagem */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage02}
                  alt="Recursos 02"
                  height={200}
                />
              </div>
              {/* Conteúdo */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-left"
              >
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3 className="h3 mb-3">Infoproduto e SaaS</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Agentes de IA podem ajudar a aumentar conversões, nutrindo e
                    direcionando leads em todas as etapas do funil, recuperando
                    carrinhos abandonados e até conduzindo onboarding e ativação
                    para seus clientes.
                  </p>
                </div>
              </div>
            </div>

            {/* 3º item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Imagem */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage03}
                  alt="Recursos 03"
                  height={200}
                />
              </div>
              {/* Conteúdo */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">Equipes de Vendas</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Agentes de IA podem qualificar leads automaticamente,
                    interagindo com potenciais clientes para entender suas
                    necessidades e interesses, encaminhando os leads mais
                    qualificados para a equipe de vendas.
                  </p>
                </div>
              </div>
            </div>

            {/* 4º item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Imagem */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage04}
                  alt="Recursos 04"
                  height={200}
                />
              </div>
              {/* Conteúdo */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-left"
              >
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3 className="h3 mb-3">Recursos Humanos</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Ferramentas de IA podem ajudar na triagem de currículos e no
                    processo de recrutamento, analisando perfis de candidatos e
                    sua compatibilidade com a vaga. Redução no tempo e custos de
                    contratação, além de maior assertividade nas admissões.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
