import { Facebook, Instagram, Star, Twitter } from "lucide-react";
import { instructor_img } from "../../../assets/image";

const Instructor = () => {
  return (
    <>
      <div>
        <div className="p-5 md:py-10 md:px-10 shadow-[0px_0px_14px_0px_#00000014] grid grid-cols-1 lg:grid-cols-3  rounded-lg">
          <div className="col-span-1 flex justify-center py-5 lg:py-0 items-center">
            <img src={instructor_img} alt="" className="w-[250px] h-[250px]"/>
          </div>
          <div className="col-span-2 flex flex-col gap-5">
            <div>
              <p className="font-[Poppins] text-[#014BAE] font-semibold text-[20px] md:text-[26px] xl:text-[30px]">Mark Jukarberg</p>
            </div>
            <div>
              <p className="font-[Poppins] text-[#5751e1] text-base">UX Design Lead</p>
            </div>
            <div className="flex items-center gap-1">
              <Star color="#F8BC24" fill="#F8BC24" size={16}></Star>
              <Star color="#F8BC24" fill="#F8BC24" size={16}></Star>
              <Star color="#F8BC24" fill="#F8BC24" size={16}></Star>
              <Star color="#F8BC24" fill="#F8BC24" size={16}></Star>
              <Star color="#F8BC24" fill="#F8BC24" size={16}></Star>
              <div>
                <p className="font-[Poppins] text-[#7f7e97] text-[14px]">
                  (4.5 reviews)
                </p>
              </div>
            </div>
            <div>
                <p className="font-[Inter] text-base lg:text-[18px] text-[#6d6c80] leading-[1.75]"  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, tempore deserunt cupiditate, ipsa at ex illo exercitationem distinctio, debitis porro illum quidem perferendis asperiores ratione aliquam assumenda suscipit. Quos, iusto?</p>
            </div>
            <div className="flex justify-start gap-2">
                <div className="shadow-[4px_3px_0px_0px_#00000040] rounded-full bg-transparent hover:bg-blue-900 hover:text-white transition p-3">
                    <Facebook ></Facebook>
                </div>
                <div className="shadow-[4px_3px_0px_0px_#00000040] rounded-full bg-transparent hover:bg-blue-900 hover:text-white transition p-3">
                    <Twitter ></Twitter>
                </div>
                <div className="shadow-[4px_3px_0px_0px_#00000040] rounded-full bg-transparent hover:bg-blue-900 hover:text-white transition p-3">
                    <Instagram ></Instagram>
                </div>
                
                
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructor;
