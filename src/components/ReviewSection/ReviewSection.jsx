import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReviewData } from "../../assets/API/ReviewData";
import ReviewCard from "./ReviewCard";

const ReviewSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
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
    <>
      <div className="max-w-[100%]">
        <div className="w-[85%] lg:w-[90%] mx-auto my-[98px]">
            <div className="my-5">
            <div className="flex items-center">
            <div className="px-4 py-2 border-[1px] bg-[#CCE2FF] rounded-md text-[#1176F0]">
              <p className="font-[Poppins] text-base text-center  uppercase">
                Testimonial
              </p>
            </div>
          </div>
          <div>
            <p className="font-[Poppins] font-bold text-[24px] md:text-[34px]">
              WHAT OUR{" "}
              <span className="text-[#1176F0] ">CUSTOMER SAYS</span>
            </p>
          </div>

            </div>
          
          <div className=" w-full">
            <Slider {...settings}>
              {ReviewData.map((item) => (
                <ReviewCard
                  content={item.content}
                  imgurl={item.imgurl}
                  name={item.name}
                  desig={item.desig}
                ></ReviewCard>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewSection;
