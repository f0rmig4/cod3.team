export default function Stats() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 pb-48 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Números que nos definem</h2>
          </div>

          {/* Items */}
          <div
            className="grid grid-cols-2 gap-4 lg:grid-cols-4 md:gap-8"
            data-aos-id-stats
          >
            {/* Item 1 */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-stats]"
            >
              <div className="font-bold text-4xl lg:text-6xl text-purple-600 mb-2">
                8+
              </div>
              <div className="text-gray-400 text-center">Anos de Trabalho</div>
            </div>

            {/* Item 2 */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-stats]"
            >
              <div className="font-bold text-4xl lg:text-6xl text-purple-600 mb-2">
                32+
              </div>
              <div className="text-gray-400 text-center">
                Projetos Entregues
              </div>
            </div>

            {/* Item 3 */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-stats]"
            >
              <div className="font-bold text-4xl lg:text-6xl text-purple-600 mb-2">
                9k+
              </div>
              <div className="text-gray-400 text-center">Linhas de Código</div>
            </div>

            {/* Item 4 */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-anchor="[data-aos-id-stats]"
            >
              <div className="font-bold text-4xl lg:text-6xl text-purple-600 mb-2">
                4.2k+
              </div>
              <div className="text-gray-400 text-center">Xícaras de Café</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
