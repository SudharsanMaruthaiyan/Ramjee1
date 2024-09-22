import { aboutimg1, aboutimg2, aboutimg3, aboutimg4 } from "../../../assets/image";

const About = () => {
  return (
    <>
      <div className="max-w-[100%] bg-[#014BAE]">
        <div className="w-[90%] mx-auto grid grid-cols-1 py-11 gap-11">
          <div className="flex justify-center flex-col items-center gap-4">
            <div>
              <p className="font-[Poppins] bg-[#0162E4] px-3 py-1 text-white text-[18px] rounded-full font-medium">How We Start Journey</p>
            </div>
            <div>
              <p className="font-[Poppins] text-white text-[24px] lg:text-[40px] font-semibold text-center">Start your Learning Journey Today!</p>
            </div>
            <div>
              <p className="text-center text-[#80B6FE] text-base font-[Poppins]">
                Groove’s intuitive shared inbox makesteam members together{" "}
                <br />
                organize, prioritize and.In this episode
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center justify-center gap-3 ">
                <div className="">
                    <img src={aboutimg1} alt="" className="hover:translate-y-2 transition" />
                </div>
                <div>
                    <p className="font-[Poppins] text-white text-[18px] font-semibold">Learn with Experts</p>
                </div>
                <div>
                    <p className="text-center text-white text-base font-[Poppins]">Curate anding area share Pluralsight content to reach you</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-3">
                <div>
                    <img src={aboutimg2} alt="" className="hover:translate-y-2 transition" />
                </div>
                <div>
                    <p className="font-[Poppins] text-white text-[18px] font-semibold">Learn with Experts</p>
                </div>
                <div>
                    <p className="text-center text-white text-base font-[Poppins]">Curate anding area share Pluralsight content to reach you</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-3">
                <div>
                    <img src={aboutimg3} alt="" className="hover:translate-y-2 transition" />
                </div>
                <div>
                    <p className="font-[Poppins] text-white text-[18px] font-semibold">Learn with Experts</p>
                </div>
                <div>
                    <p className="text-center text-white text-base font-[Poppins]">Curate anding area share Pluralsight content to reach you</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-3">
                <div>
                    <img src={aboutimg4} alt="" className="hover:translate-y-2 transition"/>
                </div>
                <div>
                    <p className="font-[Poppins] text-white text-[18px] font-semibold">Learn with Experts</p>
                </div>
                <div>
                    <p className="text-center text-white text-base font-[Poppins]">Curate anding area share Pluralsight content to reach you</p>
                </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default About;
