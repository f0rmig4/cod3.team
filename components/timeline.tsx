import Image from 'next/image'

export default function Timeline() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Processo</h1>
            <p className="text-xl text-gray-400">Com base em Sprints, escolhemos o melhor em gerenciamento e desenvolvimento de projetos comprovados metodologias; enxuto e ágil, o que permite que nosso processo de desenvolvimento de produto seja flexível e orientada para resultados. Normalmente duas semanas de duração e com os principais resultados definidos no início, você pode pensar em um sprint como uma unidade de trabalho focada. Isso constrói nosso projetos passo a passo, com sprints focados em nossos ssuários, a configuração técnica, wireframes e protótipos, concepção criativa, design e desenvolvimento. Nós construímos produtos em vários níveis de estabilidade, segurança e escalabilidade com base em seus vida útil e uso esperado. Em geral, eles cairão em uma das seguintes categorias.</p>
          </div>

          {/* Items */}
          <div className="grid gap-20"></div>
            <div className="timeline">
              <div className="item blb0">
                <span>Protótipo</span>
                - Prova de conceito visual e técnica<br />
                - Útil para testes com usuários para informar decisões<br />
                - Útil para demonstrar o conceito de garantia de financiamento<br />
                - O processo se concentra no desenvolvimento rápido<br />
                - Pouco ou nenhum desenvolvimento de back-end envolvido<br />
                - Não adequado para lançamento no mercado<br />
                - Desenvolvimento rápido e custo mais baixo, normalmente 1-3 sprints
              </div>
              <div className="item brb0">
                <span>Lançamento do produto</span>
                - Adequado para estabelecer um produto no mercado e reunir conhecimentos e análises<br />
                - Os processos se concentram no desenvolvimento de recursos<br />
                - Investimento razoável em testes<br />
                - O resultado é adequado para lançamento no mercado<br />
                - Normalmente 5-8 sprints
              </div>
              <div className="item blb0">
                <span>Produto completo</span>
                - Grande investimento em testes de ponta a ponta e testes de integração para evitar a implantação de funcionalidade interrompida e identificar problemas à medida que surgem<br />
                - A ênfase no teste acomoda grandes volumes de usuários<br />
                - Defende estabilidade, segurança e escalabilidade<br />
                - Maior tempo de desenvolvimento 10 Sprints +
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
