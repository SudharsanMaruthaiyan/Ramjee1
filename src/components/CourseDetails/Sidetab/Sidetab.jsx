import { ArrowRight, Award, Book, Clock, Facebook, GraduationCap, Instagram, Puzzle, Signal, Twitter } from "lucide-react"
import { payment, sidetab_img } from "../../../assets/image"

const Sidetab = () => {
  return (
    <>
    <div className="max-w-[100%] py-[40px]">
    <div className="w-full p-4 md:p-8 shadow-xl flex flex-col gap-5 rounded-lg justify-center">
            <div>
                <img src={sidetab_img} alt="" />
            </div>
            <div className="bg-[#014BAE] rounded-lg flex justify-center flex-col p-5 shadow-[0px_3px_15px_0px_#0d096342]">
                <div>
                    <p className="font-[Poppins] text-white font-medium text-[18px]">This Course Fee:</p>
                </div>
                <div>
                    <p className="font-[Poppins] text-white font-medium text-[24px]">$18.00 <strike className="text-[#9490fa] text-[20px]">$32.00</strike></p>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <div>
                    <p className="font-[Poppins] text-[#014BAE] font-medium text-base">Course includes:</p>
                </div>
                <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                    <div className="flex gap-3">
                    <div>
                    <Signal color="#7f7e97"></Signal>

                    </div>
                    <div>
                        <p className="text-[#1c1a4a] font-[Poppins] text-base">Level</p>
                    </div>

                    </div>
                    <div>
                        <p className="text-[#7f7e97] font-[Poppins] text-base"> Expert</p>
                    </div>
                    
                </div>
                <hr />
                <div className="flex justify-between">
                    <div className="flex gap-3">
                    <div>
                    <Clock color="#7f7e97"></Clock>

                    </div>
                    <div>
                        <p className="text-[#1c1a4a] font-[Poppins] text-base">Duration</p>
                    </div>

                    </div>
                    <div>
                        <p className="text-[#7f7e97] font-[Poppins] text-base">11h 20m</p>
                    </div>
                    
                </div>
                <hr />
                <div className="flex justify-between">
                    <div className="flex gap-3">
                    <div>
                    <Book color="#7f7e97"></Book>

                    </div>
                    <div>
                        <p className="text-[#1c1a4a] font-[Poppins] text-base">Lessons</p>
                    </div>

                    </div>
                    <div>
                        <p className="text-[#7f7e97] font-[Poppins] text-base">12</p>
                    </div>
                    
                </div>
                <hr />
                <div className="flex justify-between">
                    <div className="flex gap-3">
                    <div>
                    <Puzzle color="#7f7e97"></Puzzle>

                    </div>
                    <div>
                        <p className="text-[#1c1a4a] font-[Poppins] text-base">Quizzes</p>
                    </div>

                    </div>
                    <div>
                        <p className="text-[#7f7e97] font-[Poppins] text-base">145</p>
                    </div>
                    
                </div>
                <hr />
                <div className="flex justify-between">
                    <div className="flex gap-3">
                    <div>
                    <Award color="#7f7e97"></Award>

                    </div>
                    <div>
                        <p className="text-[#1c1a4a] font-[Poppins] text-base">Certification</p>
                    </div>

                    </div>
                    <div>
                        <p className="text-[#7f7e97] font-[Poppins] text-base">Yes</p>
                    </div>
                    
                </div>
                <hr />
                <div className="flex justify-between">
                    <div className="flex gap-3">
                    <div>
                    <GraduationCap color="#7f7e97"></GraduationCap>

                    </div>
                    <div>
                        <p className="text-[#1c1a4a] font-[Poppins] text-base">Graduation</p>
                    </div>

                    </div>
                    <div>
                        <p className="text-[#7f7e97] font-[Poppins] text-base">25K</p>
                    </div>
                    
                </div>
                <hr />

                </div>
            </div>
            <div className="flex flex-col gap-3">
                <div>
                    <p className="font-[Poppins] text-[#014BAE] font-medium text-base">Secure Payment:</p>
                </div>
                <div>
                    <img src={payment} alt="" />
                </div>
            </div>
            <hr />
            <div className="flex flex-col gap-3">
                <div>
                    <p className="font-[Poppins] text-[#014BAE] font-medium text-base">Share this Course:</p>
                </div>
                <div className="flex justify-start gap-2">
                <div className="text-[#7f7e97] rounded-full bg-transparent hover:bg-blue-900 hover:text-white transition p-3">
                    <Facebook ></Facebook>
                </div>
                <div className="text-[#7f7e97] rounded-full bg-transparent hover:bg-blue-900 hover:text-white transition p-3">
                    <Twitter ></Twitter>
                </div>
                <div className="text-[#7f7e97] rounded-full bg-transparent hover:bg-blue-900 hover:text-white transition p-3">
                    <Instagram ></Instagram>
                </div>
                
                
            </div>
            </div>
            <hr />
            <div className="flex justify-center">
                <div>
                    <button className="flex items-center hover:shadow-none transition hover:bg-[#fff] gap-4 border-2 border-black rounded-full py-[16px] px-[30px] bg-[#FFDE05]  hover:border font-[Poppins] font-semibold">
                        See All Instructors <ArrowRight></ArrowRight> 
                    </button>
                </div>
            </div>
        </div> 

    </div>
        
    </>
  )
}

export default Sidetab
