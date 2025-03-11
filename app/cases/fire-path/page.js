export default function FirePath() {
  return (
    <article className="relative pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <h1 className="h1 mb-4">
            Caminho do Fogo – O Poder da Tecnologia para a Conservação do
            Planeta
          </h1>

          <div className="text-lg text-gray-400">
            <h2 className="h3 text-gray-200 mb-4">Contexto</h2>
            <p className="mb-8">
              Os incêndios florestais representam uma ameaça crescente ao meio
              ambiente, destruindo a biodiversidade, comprometendo a fertilidade
              do solo e afetando as fontes de água. Para enfrentar esse desafio,
              o Caminho do Fogo foi criado como uma solução tecnológica
              inovadora, fortalecendo ações de prevenção, combate e gestão de
              incêndios.
            </p>

            <h2 className="h3 text-gray-200 mb-4">Objetivo</h2>
            <p className="mb-8">
              Desenvolver uma plataforma integrada que auxilie bombeiros,
              instituições e comunidades no combate a incêndios florestais,
              promovendo a gestão eficiente de recursos, o compartilhamento de
              conhecimento e a conservação da biodiversidade.
            </p>

            <h2 className="h3 text-gray-200 mb-4">
              Responsabilidade da Cod3.team
            </h2>
            <p className="mb-8">Nossa equipe é responsável por:</p>
            <ul className="list-disc pl-6 mb-8">
              <li className="mb-2">
                Manutenção e evolução do backend da plataforma
              </li>
              <li className="mb-2">Gestão da plataforma de geoprocessamento</li>
              <li className="mb-2">
                Desenvolvimento e manutenção de robôs para coleta automática de
                dados ambientais
              </li>
              <li className="mb-2">
                Integração com APIs de satélites e serviços de monitoramento
                ambiental
              </li>
              <li>Otimização do desempenho e escalabilidade do sistema</li>
            </ul>

            <h2 className="h3 text-gray-200 mb-4">Tecnologias Utilizadas</h2>
            <ul className="list-disc pl-6 mb-8">
              <li className="mb-2">Backend: Node.js com Express</li>
              <li className="mb-2">
                Banco de Dados: MongoDB para dados gerais, PostGIS para dados
                geoespaciais
              </li>
              <li className="mb-2">Geoprocessamento: QGIS Server, GeoServer</li>
              <li className="mb-2">
                Coleta de Dados: Python com bibliotecas específicas para
                processamento de dados ambientais
              </li>
              <li>Infraestrutura: AWS (EC2, S3, Lambda)</li>
            </ul>

            <h2 className="h3 text-gray-200 mb-4">Links do Projeto</h2>
            <ul className="list-disc pl-6 mb-8">
              <li className="mb-2">
                <span className="text-gray-400">Website: </span>
                <a
                  href="https://caminhodofogo.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-400 transition duration-150 ease-in-out"
                >
                  caminhodofogo.com.br
                </a>
              </li>
              <li className="mb-2">
                <span className="text-gray-400">Aplicativo Móvel: </span>
                <a
                  href="https://play.google.com/store/apps/details?id=app.caminhodofogo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-400 transition duration-150 ease-in-out"
                >
                  Baixar no Google Play
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
