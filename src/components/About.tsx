import React from "react";

function About() {
  return (
    <div className="mt-24 mb-32">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-center mb-3 mt-5 font-serif">
          PRODUCT CATEGORY
        </h1>
      </div>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2 hover-zoom cursor-pointer transition-all">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://demo.themefisher.com/aviato-bootstrap/images/shop/category/category-1.jpg"
              />
            </div>

            <div className="w-full p-1 md:p-2 hover-zoom cursor-pointer transition-all">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://demo.themefisher.com/aviato-bootstrap/images/shop/category/category-2.jpg"
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap hover-zoom cursor-pointer transition-all">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://demo.themefisher.com/aviato-bootstrap/images/shop/category/category-3.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
