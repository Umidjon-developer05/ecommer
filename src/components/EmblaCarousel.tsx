import Image from "next/image";
import React from "react";
function EmblaCarousel() {
  return (
    <div className="mt-24 w-full">
      <div id="carouselExample" className="carousel slide rounded-lg ">
        <div className="carousel-inner rounded-lg ">
          <div className="carousel-item active">
            <Image
              width={1000}
              height={1000}
              src="/image1.jpg"
              className="d-block w-100 h-[500px] rounded-lg "
              style={{ objectFit: "cover" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <Image
              width={1000}
              height={1000}
              src="/image2.jpg"
              className="d-block w-100 h-[500px] rounded-lg "
              style={{ objectFit: "cover" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <Image
              width={1000}
              height={1000}
              src="/image1.jpg"
              className="d-block w-100 h-[500px] rounded-lg "
              style={{ objectFit: "cover" }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="bg-slate-500 rounded-full w-10 h-10 flex justify-center items-center">
            <span
              className="carousel-control-prev-icon  "
              aria-hidden="true"
            ></span>
          </span>
          <span className="visually-hidden ">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="bg-slate-500 rounded-full w-10 h-10 flex justify-center items-center">
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default EmblaCarousel;
