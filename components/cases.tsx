import Link from "next/link";

export default function Cases() {
  return (
    <section id="cases">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Casos de Sucesso</h2>
            <p className="text-xl text-gray-400">
              Descubra alguns dos projetos que desenvolvemos
            </p>
          </div>

          {/* Cases grid */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st Case - Fire Path */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
            >
              <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition duration-300 h-[300px]">
                <h4 className="h4 mb-2">Caminho do Fogo</h4>
                <p className="text-gray-400 mb-4">
                  Plataforma integrada para prevenção e combate a incêndios
                  florestais, combinando tecnologia e conservação ambiental.
                </p>
                <Link
                  href="/cases/fire-path"
                  className="btn-sm text-white bg-purple-600 hover:bg-purple-700"
                >
                  Visitar
                </Link>
              </div>
            </div>

            {/* 2th Case - Noz Agency */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition duration-300 h-[300px]">
                <h4 className="h4 mb-2">Agência Noz</h4>
                <p className="text-gray-400 mb-4">
                  Manutenção e suporte de software para uma agência de marketing
                  digital com mais de 10 anos de experiência.
                </p>
                <Link
                  href="/cases/noz"
                  className="btn-sm text-white bg-purple-600 hover:bg-purple-700"
                >
                  Visitar
                </Link>
              </div>
            </div>

            {/* 3nd Case - Toptool */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition duration-300 h-[300px]">
                <h4 className="h4 mb-2">Toptool</h4>
                <p className="text-gray-400 mb-4">
                  Desenvolvemos a arquitetura e a interface de um software que
                  gerencia e controla todo o processo de produção de uma fábrica
                  de matrizes.
                </p>
                <Link
                  href="/cases/toptool"
                  className="btn-sm text-white bg-purple-600 hover:bg-purple-700"
                >
                  Visitar
                </Link>
              </div>
            </div>

            {/* 4rd Case - Coliseu Group */}
            {/* <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition duration-300">
                <h4 className="h4 mb-2">Coliseu Group</h4>
                <p className="text-gray-400 mb-4">
                  Integrated discount coupon management system for a hotel
                  chain, combining administrative tools and website development.
                </p>
                <Link
                  href="/cases/coliseu-group"
                  className="btn-sm text-white bg-purple-600 hover:bg-purple-700"
                >
                  View Full Case
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
