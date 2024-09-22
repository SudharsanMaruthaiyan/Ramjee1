import { ArrowRight, Clock, Medal, Save, ShieldCheck, Star, User } from "lucide-react";
import React from "react";

const CourseCard = (props) => {
  return (
    <>
      <div className="max-w-[100%] py-3 px-5 border flex flex-col gap-5 rounded-lg group transition-colors">
        <div className=" flex justify-center relative">
          <img src={props.imgurl} alt="" className=" h-[200px] object-cover group-hover:scale-110 transition-all" />
          <div className="flex gap-3 absolute top-0 right-0">
            <div className="p-2 rounded-full bg-[#FFE538]">
                <Medal></Medal>
            </div>
            <div className="p-2 rounded-full bg-[#FFE538]">
            <ShieldCheck />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div>
            <p className="font-[Poppins] font-bold text-[22px] lg:text-[25px] text-[#12100b]">
              {props.title}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-1 justify-evenly items-center">
              <div>
                <p className="font-[Poppins] text-[32px] lg:text-[40px] font-bold">
                  {props.price}
                </p>
              </div>
              <div className="h-[40px] w-[1px] bg-gray-500"></div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <Star stroke="#FFE538" size={18}></Star>
                  <Star stroke="#FFE538" size={18}></Star>
                  <Star stroke="#FFE538" size={18}></Star>
                  <Star stroke="#FFE538" size={18}></Star>
                  <Star stroke="#FFE538" size={18}></Star>
                </div>
                <div className="font-[Poppins] text-[18px]">
                  {props.review} Review
                </div>
              </div>
            </div>
            <div>
              <p className="line-clamp-2 font-[Poppins] text-[16px]">
                {props.description}
              </p>
            </div>
            <hr />
            <div className="relative overflow-hidden transition-all">
              <div className="flex flex-wrap  group-hover:-translate-y-20 transition">
                <div className="flex gap-3 px-3 py-2">
                  <Clock></Clock>
                  <p className="font-[Poppins] text-base">{props.time}</p>
                </div>
                <div className="flex gap-3 px-3 py-2">
                  <Save></Save>
                  <p className="font-[Poppins] text-base">
                    {props.curriculam} Curricullam
                  </p>
                </div>
                <div className="flex gap-3 px-3 py-2">
                  <User></User>
                  <p className="font-[Poppins] text-base">
                    {props.students} Students
                  </p>
                </div>
              </div>
              <div className="flex gap-1 justify-center items-center translate-y-11 group-hover:-translate-y-11">
                <button className="flex gap-2 font-[Poppins] hover:text-[#FFEB6B] font-bold">
                  Add To Cart <ArrowRight></ArrowRight>
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
