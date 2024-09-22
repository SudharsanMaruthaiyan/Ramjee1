import { ArrowRight } from "lucide-react";
import { pop1, pop2, pop4 } from "../../../assets/image";

const Popular = () => {
  return (
    <>
      <div className="max-w-[100%]">
        <div className="grid grid-cols-1 w-[90%] mx-auto py-[0px] gap-10">
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div>
                <p className="font-[Poppins] text-[#0f1216] text-[24px] lg:text-[44px] font-bold">
                  Popular Topic, Which are Most <br />
                  Favourite To Students
                </p>
              </div>
              <div className="flex justify-end items-end">
                <button className="flex gap-3 px-5 py-2 bg-[#3270FC] text-white rounded-lg">
                  Book a visit <ArrowRight></ArrowRight>
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="pl-5 pr-7 py-10 flex flex-col gap-5 border-2 rounded-lg hover:shadow-[0px_30px_50px_0px_#000f381a] hover:border-t-blue-700 hover:border-t-4 transition items-center">
              <div>
                <img src={pop1} alt="" />
              </div>
              <div>
                <p className="font-[Poppins] text-[18px] font-medium text-center">Art & Design</p>
                <p className="font-[Poppins] text-base text-center">15 Courses</p>
              </div>
            </div>
            <div  className="pl-5 pr-7 py-10 flex flex-col gap-5 border-2 rounded-lg hover:shadow-[0px_30px_50px_0px_#000f381a] hover:border-t-blue-700 hover:border-t-4 transition items-center">
              <div>
                <img src={pop2} alt="" />
              </div>
              <div>
                <p className="font-[Poppins] text-[18px] font-medium text-center">Art & Design</p>
                <p className="font-[Poppins] text-base text-center">15 Courses</p>
              </div>
            </div>
            <div  className="pl-5 pr-7 py-10 flex flex-col gap-5 border-2 rounded-lg hover:shadow-[0px_30px_50px_0px_#000f381a] hover:border-t-blue-700 hover:border-t-4 transition items-center">
              <div>
                <img src={pop4} alt="" />
              </div>
              <div>
                <p className="font-[Poppins] text-[18px] font-medium text-center">Art & Design</p>
                <p className="font-[Poppins] text-base text-center">15 Courses</p>
              </div>
            </div>
            <div  className="pl-5 pr-7 py-10 flex flex-col gap-5 border-2 rounded-lg hover:shadow-[0px_30px_50px_0px_#000f381a] hover:border-t-blue-700 hover:border-t-4 transition items-center">
              <div>
                <img src={pop4} alt="" />
              </div>
              <div>
                <p className="font-[Poppins] text-[18px] font-medium text-center">Art & Design</p>
                <p className="font-[Poppins] text-base text-center">15 Courses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popular;
