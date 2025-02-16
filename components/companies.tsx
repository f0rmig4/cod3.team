import Image from "next/image";

import Company01 from "@/public/images/company-01.png";
import Company02 from "@/public/images/company-02.jpg";
import Company03 from "@/public/images/company-03.png";
import Company04 from "@/public/images/company-04.png";
import Company05 from "@/public/images/company-05.png";
import Company06 from "@/public/images/company-06.png";
import Company07 from "@/public/images/company-07.png";
import Company08 from "@/public/images/company-08.png";
import Company09 from "@/public/images/company-09.png";

export default function Companies() {
  return (
    <section id="companies">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Companies we co-create with</h1>
          </div>

          {/* Images grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center items-center max-w-4xl mx-auto">
            <div>
              <Image
                src={Company04}
                width={120}
                height={50}
                alt="Company 04"
                className="max-w-full filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-300"
              />
            </div>
            <div>
              <Image
                src={Company01}
                width={180}
                height={50}
                alt="Company 01"
                className="max-w-full filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-300"
              />
            </div>
            <div>
              <Image
                src={Company02}
                width={170}
                height={50}
                alt="Company 02"
                className="max-w-full filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-300"
              />
            </div>
            <div>
              <Image
                src={Company05}
                width={200}
                height={50}
                alt="Company 05"
                className="max-w-full filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-300"
              />
            </div>
            <div>
              <Image
                src={Company07}
                width={220}
                height={50}
                alt="Company 07"
                className="max-w-full filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-300"
              />
            </div>
            <div>
              <Image
                src={Company09}
                width={250}
                height={50}
                alt="Company 09"
                className="max-w-full filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
