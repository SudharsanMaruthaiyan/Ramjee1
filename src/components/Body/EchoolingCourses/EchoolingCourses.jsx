import { EchoolingCourseCardApi } from "../../../assets/API/EchoolingCourseCard";
import EchoolingCoursesCard from "../EchoolingCoursesCard/EchoolingCoursesCard";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EchoolingCourses = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
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
        <div className=" ">
            <div className="">
              <div className="relative">
                  <div className=" text-center bg-[#F2F4F9] pt-20 pb-60 rounded-xl">
                      <h5 className=" text-center font-bold text-[#014bae] py-2 uppercase font-[poppins]">Echooling available courses</h5>
                      <h1 className=" font-bold text-[35px] md:text-[40px] md:leading-tight leading-normal text-wrap px-12  font-[poppins] uppercase">Online Coaching Lessons For <br className=" md:block hidden"/>
                      Remote Learning</h1>
                  </div>
                      
                  <div className=" w-full absolute top-[320px] md:top-[270px] mx-auto">
                    <Slider {...settings}>
                        {EchoolingCourseCardApi.map((e,index) => (
                            <EchoolingCoursesCard icon={e.icon} title={e.title} desc={e.desc} learnmore={e.learnmore} />
                        ))}
                    </Slider>
                  </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default EchoolingCourses