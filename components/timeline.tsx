import Image from "next/image";

export default function Timeline() {
  return (
    <section id="process">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Processo</h1>
            <p className="text-xl text-gray-400">
              Nosso processo de desenvolvimento é baseado em Sprints de duas
              semanas, seguindo metodologias ágeis que garantem flexibilidade e
              resultados. Cada sprint é uma unidade de trabalho focada que
              constrói nossos projetos sistematicamente - desde a pesquisa do
              usuário e wireframes até o desenvolvimento e testes. Entregamos
              produtos em diferentes níveis com base nas suas necessidades e
              requisitos de mercado.
            </p>
          </div>

          {/* Items */}
          <div className="grid gap-20"></div>
          <div className="timeline">
            <div className="item blb0">
              <span>Protótipo</span>
              - Prova visual e técnica de conceito
              <br />
              - Útil para testes de usuário para informar decisões
              <br />
              - Útil para demonstrar conceito para financiamento
              <br />
              - O processo foca no desenvolvimento rápido
              <br />
              - Pouco ou nenhum desenvolvimento de back-end envolvido
              <br />
              - Não adequado para lançamento no mercado
              <br />- Desenvolvimento rápido e custo mais baixo, tipicamente 1-3
              sprints
            </div>
            <div className="item brb0">
              <span>Lançamento do Produto</span>
              - Adequado para estabelecer um produto no mercado e coletar
              insights e análises
              <br />
              - Processos focam no desenvolvimento de recursos
              <br />
              - Investimento razoável em testes
              <br />
              - O resultado é adequado para lançamento no mercado
              <br />- Tipicamente 5-8 sprints
            </div>
            <div className="item blb0">
              <span>Produto Completo</span>
              - Grande investimento em testes de ponta a ponta e testes de
              integração para evitar a implantação de funcionalidades quebradas
              e identificar problemas à medida que surgem
              <br />
              - Ênfase em testes acomoda grandes volumes de usuários
              <br />
              - Prioriza estabilidade, segurança e escalabilidade
              <br />- Tempo de desenvolvimento mais longo 10+ Sprints
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
