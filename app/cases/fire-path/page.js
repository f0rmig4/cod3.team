export default function FirePath() {
  return (
    <article className="relative pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <h1 className="h1 mb-4">
            Fire Path – The Power of Technology for Planet Conservation
          </h1>

          <div className="text-lg text-gray-400">
            <h2 className="h3 text-gray-200 mb-4">Context</h2>
            <p className="mb-8">
              Wildfires represent a growing threat to the environment,
              destroying biodiversity, compromising soil fertility, and
              affecting water sources. To address this challenge, Fire Path was
              created as an innovative technological solution, strengthening
              prevention, combat, and fire management actions.
            </p>

            <h2 className="h3 text-gray-200 mb-4">Objective</h2>
            <p className="mb-8">
              Develop an integrated platform that assists firefighters,
              institutions, and communities in fighting wildfires, promoting
              efficient resource management, knowledge sharing, and biodiversity
              conservation.
            </p>

            <h2 className="h3 text-gray-200 mb-4">
              Cod3.team's Responsibility
            </h2>
            <p className="mb-8">Our team is responsible for:</p>
            <ul className="list-disc pl-6 mb-8">
              <li className="mb-2">
                Platform backend maintenance and evolution
              </li>
              <li className="mb-2">Geoprocessing platform management</li>
              <li className="mb-2">
                Development and maintenance of robots for automatic
                environmental data collection
              </li>
              <li className="mb-2">
                Integration with satellite APIs and environmental monitoring
                services
              </li>
              <li>System performance and scalability optimization</li>
            </ul>

            <h2 className="h3 text-gray-200 mb-4">Technology Stack</h2>
            <ul className="list-disc pl-6 mb-8">
              <li className="mb-2">Backend: Node.js with Express</li>
              <li className="mb-2">
                Database: MongoDB for general data, PostGIS for geospatial data
              </li>
              <li className="mb-2">Geoprocessing: QGIS Server, GeoServer</li>
              <li className="mb-2">
                Data Collection: Python with specific libraries for
                environmental data processing
              </li>
              <li>Infrastructure: AWS (EC2, S3, Lambda)</li>
            </ul>

            <h2 className="h3 text-gray-200 mb-4">Project Links</h2>
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
                <span className="text-gray-400">Mobile App: </span>
                <a
                  href="https://play.google.com/store/apps/details?id=app.caminhodofogo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-400 transition duration-150 ease-in-out"
                >
                  Download on Google Play
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
