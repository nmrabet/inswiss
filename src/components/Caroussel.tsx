"use client";

import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Img from "@/assets/img/luxury-dubai.webp";

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="rounded-lg bg-white">
          <Image src={Img} alt="" className="rounded-lg" />
          <div className="flex items-center justify-between py-5">
            <div className="text-[14px] space-y-2 border-l-4">
              <p className="pl-4">Adresse</p>
              <h5 className="pl-4 text-[20px] whitespace-nowrap">
                Aroa Shopping Complex
              </h5>
            </div>
            <a href="#" className="text-[14px] pr-8">
              Read More
            </a>
          </div>
        </div>

        <div className="rounded-lg bg-white">
          <Image src={Img} alt="" className="rounded-lg" />
          <div className="flex items-center justify-between py-5">
            <div className="text-[14px] space-y-2 border-l-4">
              <p className="pl-4">Adresse</p>
              <h5 className="pl-4 text-[20px] whitespace-nowrap">
                Aroa Shopping Complex
              </h5>
            </div>
            <a href="#" className="text-[14px] pr-8">
              Read More
            </a>
          </div>
        </div>

        <div className="rounded-lg bg-white">
          <Image src={Img} alt="" className="rounded-lg" />
          <div className="flex items-center justify-between py-5">
            <div className="text-[14px] space-y-2 border-l-4">
              <p className="pl-4">Adresse</p>
              <h5 className="pl-4 text-[20px] whitespace-nowrap">
                Aroa Shopping Complex
              </h5>
            </div>
            <a href="#" className="text-[14px] pr-8">
              Read More
            </a>
          </div>
        </div>

        <div className="rounded-lg bg-white">
          <Image src={Img} alt="" className="rounded-lg" />
          <div className="flex items-center justify-between py-5">
            <div className="text-[14px] space-y-2 border-l-4">
              <p className="pl-4">Adresse</p>
              <h5 className="pl-4 text-[20px] whitespace-nowrap">
                Aroa Shopping Complex
              </h5>
            </div>
            <a href="#" className="text-[14px] pr-8">
              Read More
            </a>
          </div>
        </div>

        <div className="rounded-lg bg-white">
          <Image src={Img} alt="" className="rounded-lg" />
          <div className="flex items-center justify-between py-5">
            <div className="text-[14px] space-y-2 border-l-4">
              <p className="pl-4">Adresse</p>
              <h5 className="pl-4 text-[20px] whitespace-nowrap">
                Aroa Shopping Complex
              </h5>
            </div>
            <a href="#" className="text-[14px] pr-8">
              Read More
            </a>
          </div>
        </div>

        <div className="rounded-lg bg-white">
          <Image src={Img} alt="" className="rounded-lg" />
          <div className="flex items-center justify-between py-5">
            <div className="text-[14px] space-y-2 border-l-4">
              <p className="pl-4">Adresse</p>
              <h5 className="pl-4 text-[20px] whitespace-nowrap">
                Aroa Shopping Complex
              </h5>
            </div>
            <a href="#" className="text-[14px] pr-8">
              Read More
            </a>
          </div>
        </div>

        <div className="rounded-lg bg-white">
          <Image src={Img} alt="" className="rounded-lg" />
          <div className="flex items-center justify-between py-5">
            <div className="text-[14px] space-y-2 border-l-4">
              <p className="pl-4">Adresse</p>
              <h5 className="pl-4 text-[20px] whitespace-nowrap">
                Aroa Shopping Complex
              </h5>
            </div>
            <a href="#" className="text-[14px] pr-8">
              Read More
            </a>
          </div>
        </div>

        <div className="rounded-lg bg-white">
          <Image src={Img} alt="" className="rounded-lg" />
          <div className="flex items-center justify-between py-5">
            <div className="text-[14px] space-y-2 border-l-4">
              <p className="pl-4">Adresse</p>
              <h5 className="pl-4 text-[20px] whitespace-nowrap">
                Aroa Shopping Complex
              </h5>
            </div>
            <a href="#" className="text-[14px] pr-8">
              Read More
            </a>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;
