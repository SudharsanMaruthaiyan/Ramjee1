import { Calendar, Dot, GraduationCap, Star } from "lucide-react";
import { profile_img } from "../../../assets/image";

const Videosection = () => {
  return (
    <>
      <div className="py-[20px] lg:py-[40px] w-full grid grid-cols-1 gap-4">
        <div className="w-full">
          <iframe
            src="https://www.youtube.com/embed/gsG7uj9-4Jo?si=jZ_gLZm_4ZnJ5jVx"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="w-full lg:h-[550px] h-fit"
          ></iframe>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <div>
              <button className="font-[Poppins] font-medium text-[#014BAE] py-1 px-3 rounded-full bg-[#EFEFF2] hover:bg-[#5751E1] text-[14px] hover:text-white">Development</button>
            </div>
            <div className="flex items-center gap-1">
              <Star color="#F8BC24" fill="#F8BC24" size={16}></Star>
              <Star color="#F8BC24" fill="#F8BC24" size={16}></Star>
              <Star color="#F8BC24" fill="#F8BC24" size={16}></Star>
              <Star color="#F8BC24" fill="#F8BC24" size={16}></Star>
              <Star color="#F8BC24" fill="#F8BC24" size={16}></Star>
              <div>

              <p className="font-[Poppins] text-[#7f7e97] text-[14px]" >(4.5 reviews)</p>
              </div>
            </div>
          </div>
          <div>
            <p className="font-[Poppins] text-[24px] lg:text-[30px] text-[#014BAE] font-semibold">Resolving Conflicts Between Designers And Engineers</p>
          </div>
          <div className="flex gap-3 items-center flex-wrap">
            <div className="">
            <img src={profile_img} alt="Poppinsfile image" className="w-[50px] h-[50px] " />

            </div>
            <div>
                <p className="font-[Poppins] text-[#7f7e97] ">By <span className="text-black">David Millar</span></p>
            </div>
            <div>
                <Dot size={30}></Dot>
            </div>
            <div className="flex items-center gap-2">
                <div>
                    <Calendar color="#7f7e97"></Calendar>
                </div>
                <div>
                    <p className="font-[Poppins] text-[#7f7e97] font-medium">24/07/2024</p>
                </div>
            </div>
            <div>
                <Dot size={30}></Dot>
            </div>
            <div className="flex items-center gap-2">
                <div>
                <GraduationCap color="#7f7e97" />
                </div>
                <div>
                    <p className="font-[Poppins] text-[#7f7e97] font-medium">2,260 Students</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Videosection;
