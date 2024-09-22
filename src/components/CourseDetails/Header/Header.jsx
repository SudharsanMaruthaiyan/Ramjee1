import { ChevronRight } from "lucide-react";
import { headerimg_ribbon, headerimg_rocket, headerimg_star, headerimg_starurn } from "../../../assets/image";

const Header = () => {
  return (
    <>
      <div className="max-w-[100%] mx-auto bg-[url(https://ik.imagekit.io/HoneyJoe/Skiil%20grow/breadcrumb_bg.jpg?updatedAt=1725764316281)] my-12">
        <div className="w-[90%] mx-auto py-20 grid grid-cols-1 overflow-y-hidden">
          <div className="flex gap-2 relative flex-wrap justify-start">
            <div>
              <button className="flex gap-1 items-center font-[Poppins] text-[#014BAE] focus:text-[#5751e1] text-base">
                Home <ChevronRight color="#7f7e97"></ChevronRight>
              </button>
            </div>
            <div>
              <button className="flex gap-1 items-center font-[Poppins] text-[#1c1a4a] focus:text-[#5751e1]">
                Courses <ChevronRight color="#7f7e97"></ChevronRight>
              </button>
            </div>
            <div>
              <button className="flex gap-1 items-center font-[Poppins] text-[#5751e1] justify-start">
              Resolving Conflicts Between Designers And Engineers
              </button>
            </div>
            <div className="absolute">
                <img src={headerimg_starurn} alt="headerimg" className="animate-bounce ease-linear"/>
            </div>
            <div className="absolute left-[70%] hidden lg:block">
              <img src={headerimg_rocket} alt="header img" className=""/>
            </div>
            <div className="absolute left-[70%] -top-10 hidden lg:block">
              <img src={headerimg_ribbon} alt="" className="h-[100%]"/>
            </div>
            <div className=" absolute right-0 lg:right-28 -top-10">
              <img src={headerimg_star} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
