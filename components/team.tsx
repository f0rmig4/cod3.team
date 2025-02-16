import Image from "next/image";

export default function Team() {
  return (
    <section id="team">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Leadership</h2>
            <p className="text-xl text-gray-400">
              Meet the team behind Cod3.team
            </p>
          </div>

          {/* Team members */}
          <div className="max-w-sm sm:max-w-md lg:max-w-none mx-auto grid gap-12 grid-cols-1 lg:grid-cols-2 items-center">
            {/* CTO */}
            <div className="relative flex flex-col items-center">
              <div className="relative mb-8">
                <Image
                  className="rounded-full"
                  src="/images/cto.jpg" // Você precisará adicionar sua foto
                  width={200}
                  height={200}
                  alt="CTO"
                />
                <div className="absolute bottom-0 right-0 inline-block bg-purple-600 rounded-full p-2">
                  <svg
                    className="w-6 h-6 fill-current text-white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.84 9.49.5.09.68-.22.68-.485v-1.71c-2.782.603-3.37-1.34-3.37-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.07-.608.07-.608 1.004.07 1.532 1.03 1.532 1.03.892 1.53 2.34 1.088 2.91.833.09-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.09.39-1.984 1.03-2.683-.104-.253-.448-1.27.098-2.647 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.91-1.296 2.747-1.026 2.747-1.026.548 1.377.204 2.394.1 2.647.64.699 1.028 1.593 1.028 2.683 0 3.842-2.34 4.687-4.566 4.935.359.309.678.919.678 1.852v2.744c0 .268.18.58.688.485C19.138 20.164 22 16.42 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </div>
              </div>
              <h4 className="h4 mb-2">Seu Nome</h4>
              <div className="font-medium text-lg text-purple-600 mb-2">
                CTO & Founder
              </div>
              <p className="text-gray-400 text-center mb-3">
                Full Stack Developer with over X years of experience in software
                development and team leadership. Passionate about creating
                innovative solutions and mentoring developers.
              </p>
              <div className="text-sm text-gray-400">
                Tech Stack: Node.js, React, TypeScript, AWS, etc.
              </div>
            </div>

            {/* New Developer */}
            <div className="relative flex flex-col items-center">
              <div className="relative mb-8">
                <Image
                  className="rounded-full"
                  src="/images/dev.jpg" // Foto do novo dev
                  width={200}
                  height={200}
                  alt="Developer"
                />
                <div className="absolute bottom-0 right-0 inline-block bg-purple-600 rounded-full p-2">
                  <svg
                    className="w-6 h-6 fill-current text-white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.325 3.05L8.667 20.432l1.983.284 4.658-17.382-1.983-.284zM19.08 7l-3.536 3.536 3.536 3.536 1.414-1.414L18.12 10l2.374-2.374L19.08 7zm-14.16 0l-1.414 1.414L5.88 10l-2.374 2.374L4.92 13.78l3.536-3.536L4.92 7z" />
                  </svg>
                </div>
              </div>
              <h4 className="h4 mb-2">Nome do Dev</h4>
              <div className="font-medium text-lg text-purple-600 mb-2">
                Software Developer
              </div>
              <p className="text-gray-400 text-center mb-3">
                Experienced developer focused on building high-quality, scalable
                applications. Committed to writing clean code and following best
                practices.
              </p>
              <div className="text-sm text-gray-400">
                Tech Stack: [Principais tecnologias do dev]
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
