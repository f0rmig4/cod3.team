import Link from "next/link";

export default function Cases() {
  return (
    <section id="cases">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Success Cases</h2>
            <p className="text-xl text-gray-400">
              Discover some of the projects we've developed
            </p>
          </div>

          {/* Cases grid */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st Case - Fire Path */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
            >
              <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition duration-300">
                <h4 className="h4 mb-2">Fire Path</h4>
                <p className="text-gray-400 mb-4">
                  Integrated platform for wildfire prevention and combat,
                  combining technology and environmental conservation.
                </p>
                <Link
                  href="/cases/fire-path"
                  className="btn-sm text-white bg-purple-600 hover:bg-purple-700"
                >
                  View Full Case
                </Link>
              </div>
            </div>

            {/* 2th Case - Noz Agency */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition duration-300">
                <h4 className="h4 mb-2">Noz Agency</h4>
                <p className="text-gray-400 mb-4">
                  Software maintenance and support for a digital marketing
                  agency with over 10 years of experience.
                </p>
                <Link
                  href="/cases/noz"
                  className="btn-sm text-white bg-purple-600 hover:bg-purple-700"
                >
                  View Full Case
                </Link>
              </div>
            </div>

            {/* 3nd Case - Toptool */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition duration-300">
                <h4 className="h4 mb-2">Toptool</h4>
                <p className="text-gray-400 mb-4">
                  Production management software for a die manufacturing
                  company, covering the entire process from order entry to
                  delivery.
                </p>
                <Link
                  href="/cases/toptool"
                  className="btn-sm text-white bg-purple-600 hover:bg-purple-700"
                >
                  View Full Case
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
