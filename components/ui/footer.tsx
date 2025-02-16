import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="Cruip">
                  <svg
                    width="180"
                    height="45"
                    viewBox="0 0 582 167"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="255"
                      y="31"
                      width="286"
                      height="111"
                      fill="#6064FE"
                    />
                    <path
                      d="M30.5 96.5C30.5 102.767 31.7333 107.6 34.2 111C36.7333 114.333 40.6 116 45.8 116C48.0667 116 50.3 115.733 52.5 115.2C54.7 114.667 57.3333 113.733 60.4 112.4L63.3 119.8C60.0333 121.267 56.9333 122.333 54 123C51.0667 123.667 48.2333 124 45.5 124C37.6333 124 31.6667 121.533 27.6 116.6C23.5333 111.667 21.5 104.967 21.5 96.5V81.5C21.5 73.0333 23.5333 66.3333 27.6 61.4C31.6667 56.4667 37.6333 54 45.5 54C48.2333 54 51.0667 54.3333 54 55C57 55.6667 60.0333 56.7333 63.1 58.2L60.3 65.7C54.9 63.3 50.0667 62.1 45.8 62.1C40.6 62.1 36.7333 63.7667 34.2 67.1C31.7333 70.4333 30.5 75.2333 30.5 81.5V96.5ZM122.755 81.5V96.4C122.755 104.867 120.622 111.6 116.355 116.6C112.155 121.533 106.089 124 98.1555 124C90.2221 124 84.1221 121.533 79.8555 116.6C75.6555 111.6 73.5555 104.867 73.5555 96.4V81.5C73.5555 73.1 75.6555 66.4333 79.8555 61.5C84.1221 56.5 90.2221 54 98.1555 54C106.089 54 112.155 56.5 116.355 61.5C120.622 66.4333 122.755 73.1 122.755 81.5ZM113.755 81.5C113.755 75.3 112.422 70.5333 109.755 67.2C107.155 63.8 103.289 62.1 98.1555 62.1C93.0888 62.1 89.2221 63.8 86.5555 67.2C83.8888 70.5333 82.5555 75.3 82.5555 81.5V96.4C82.5555 102.667 83.8888 107.5 86.5555 110.9C89.2221 114.3 93.0888 116 98.1555 116C103.289 116 107.155 114.3 109.755 110.9C112.422 107.5 113.755 102.667 113.755 96.4V81.5ZM141.202 123V55H162.302C170.102 55 176.102 57.3667 180.302 62.1C184.502 66.7667 186.602 73.2333 186.602 81.5V96.4C186.602 104.733 184.502 111.267 180.302 116C176.102 120.667 170.102 123 162.302 123H141.202ZM162.102 63.2H149.902V114.9H162.102C172.435 114.9 177.602 108.733 177.602 96.4V81.5C177.602 69.3 172.435 63.2 162.102 63.2ZM237.473 105.3C237.473 110.767 235.773 115.267 232.373 118.8C228.973 122.267 223.507 124 215.973 124C212.973 124 209.84 123.667 206.573 123C203.373 122.267 200.04 121.133 196.573 119.6L199.173 112.4C202.507 113.733 205.473 114.7 208.073 115.3C210.74 115.9 213.307 116.2 215.773 116.2C219.907 116.2 223.107 115.333 225.373 113.6C227.707 111.867 228.873 109.033 228.873 105.1V103.5C228.873 100.167 227.907 97.5 225.973 95.5C224.04 93.5 221.073 92.5 217.073 92.5H207.073V84.9H217.073C220.873 84.9 223.673 83.9667 225.473 82.1C227.273 80.1667 228.173 77.5667 228.173 74.3V72.9C228.173 68.9667 227.107 66.1667 224.973 64.5C222.84 62.7667 219.873 61.9 216.073 61.9C213.74 61.9 211.34 62.2 208.873 62.8C206.407 63.3333 203.607 64.2667 200.473 65.6L197.673 58.3C201.007 56.7667 204.207 55.6667 207.273 55C210.407 54.3333 213.407 54 216.273 54C223.473 54 228.707 55.7333 231.973 59.2C235.24 62.6667 236.873 67.1667 236.873 72.7V74.1C236.873 77.4333 236.073 80.3667 234.473 82.9C232.873 85.3667 230.707 87.3 227.973 88.7C230.907 90.0333 233.207 92 234.873 94.6C236.607 97.1333 237.473 100.167 237.473 103.7V105.3Z"
                      fill="white"
                    />
                    <path
                      d="M285.2 123H276V113.9H285.2V123ZM282.261 63.2V55H330.561V63.2H310.761V123H302.061V63.2H282.261ZM380.44 114.9V123H342.44V55H379.44V63.2H351.14V84.5H376.44V92.7H351.14V114.9H380.44ZM431.565 123L426.465 107.2H400.665L395.565 123H387.065L409.665 55H417.865L440.565 123H431.565ZM406.965 87.6L403.165 99.3H423.865L420.065 87.6L413.565 66.6L406.965 87.6ZM463.48 55L484.18 105.4L504.98 55H514.88V123H506.38V93.9L507.48 67.7L487.98 115H479.78L460.68 67.5L461.78 93.9V123H453.28V55H463.48Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </div>
              <div className="text-gray-400">
                We are a multidisciplinary team of independent programmers,
                engineers, and designers, offering a qualified workforce. We
                value new challenges and understand the need to continuously
                improve our skills, transforming the technological landscape
                with simplicity and agility, reducing costs without compromising
                quality and delivering custom-made software.
              </div>
            </div>

            {/* 2nd block */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Services</h6>
                <ul>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Technical Consulting
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Squad Allocation
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Build
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Product Concept
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Discovery
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 3rd block */}
              {/* <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Resources</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Nostrud exercitation</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Visual mockups</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Nostrud exercitation</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Visual mockups</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Nostrud exercitation</Link>
                  </li>
                </ul>
              </div> */}

              {/* 4th block */}
              {/* <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Company</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Consectetur adipiscing</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Labore et dolore</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Consectetur adipiscing</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Labore et dolore</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Consectetur adipiscing</Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <Link
                  href="/"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="/"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Github"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="/"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="/"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="/"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Linkedin"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </Link>
              </li>
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">
              &copy; Cod3.team. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
