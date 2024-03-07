import React from 'react'

function About() {
  return (
    <div className="mt-24 mb-32">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-center mb-3 mt-5 font-serif ">
          PRODUCT CATEGORY
        </h1>
      </div>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24 ">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2 sm:h-[300px] image">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center  "
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
              />
            </div>

            <div className="w-full p-1 md:p-2 sm:h-[300px] image">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center "
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap image">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center "
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About