import {Zap,ArrowUpRight, Star, User, CalendarRange,BookOpenText  } from "lucide-react";
import { sideblub, home_img, home_img2, home_img3 , suganth } from "../../../assets/API/Image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Counter from "../Counter/Counter";
import EchoolingCourses from "../EchoolingCourses/EchoolingCourses";
import UpcomingEvent from "../UpcomingEvent/UpcomingEvent";
// import Animatedcursor from "../../Animatedcursor/Animatedcursor";
import AnimatedCursor from "react-animated-cursor";

const Homepage = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:false,
      };
  return (
    <>
        <div className=" max-w-[100%] mx-auto"> 
            <div className=" w-[90%] lg:w-[90%] mx-auto my-10 lg:mt-28 lg:mb-32">
                {/* <Animatedcursor/> */}
                <AnimatedCursor  innerSize={10}
                    outerSize={10}
                    color='193, 11, 111'
                    outerAlpha={0.2}
                    innerScale={0.7}
                    outerScale={5}
                    clickables={[
                        'a',
                        'input[type="text"]',
                        'input[type="email"]',
                        'input[type="number"]',
                        'input[type="submit"]',
                        'input[type="image"]',
                        'label[for]',
                        'select',
                        'textarea',
                        'button',
                        '.link'
                ]}/>
                <div className=" grid grid-cols-1 md:grid-cols-4 w-full items-center my-40">
                    <div className=" col-span-4 xl:col-span-3  order-2 md:order-1 lg:pt-0">
                        <div className="flex items-center gap-2 border-2 w-fit p-1 rounded-full pr-5 group">
                            <Zap className=" w-8 h-8 bg-[#014cae3e] group-hover:bg-[#014BAE] group-hover:stroke-white p-2 rounded-full transition-colors"/>
                            <p className=" font-[poppins] text-sm">The Leader in Online Learning</p>
                        </div>

                        <div className=" py-6">
                            <p className=" text-[26px] font-[poppins] lg:text-[58px] font-bold md:leading-tight lg:leading-none md:text-[54px]">Get <span className=" text-[#014BAE]">2500+</span> Best Online</p>
                            <p className=" font-[poppins] lg:text-[58px] text-[26px] font-bold md:leading-tight lg:leading-normal md:text-[54px]">Courses From UpSkilll </p>
                            <p className=" font-[poppins] text-[#131836] py-5 text-wrap lg:pr-72">Start, switch, or advance your career with more than 5,000 courses, Professional Certificates, and degrees from world-class universities and companies.Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className=" flex items-center gap-5 flex-wrap ">
                            <div className=" flex-wrap flex  gap-2">
                                <button className=" flex items-center gap-2 py-4 bg-[#014BAE] px-8 text-white font-medium font-[poppins] rounded-md hover:bg-[#FFDF0C] border transition text-nowrap">Get Started <ArrowUpRight /> </button>
                                <button className=" flex items-center gap-2 py-4 bg-white hover:bg-[#014BAE] px-8 hover:text-white font-medium font-[poppins] rounded-md text-[#131836] border border-[#131836]  transition text-nowrap">View All Course <ArrowUpRight /> </button>

                            </div>
                            <div className=" flex items-center gap-5 md:space-x-[70px] space-x-[70px]">
                                <div className=" flex items-center relative">
                                    <div className=" bg-[#014BAE] w-fit rounded-full p-[1.2px]">
                                        <img src={suganth} className=" md:w-12 w-11 rounded-full p-1 hover:scale-105 transition bg-white" alt="student" />
                                    </div>
                                    <div className=" bg-[#014BAE] w-fit rounded-full p-[1.2px] absolute top-0 -right-10 md:-right-10">
                                        <img src={suganth} className=" md:w-12 w-11 rounded-full bg-white p-1  hover:scale-105 transition" alt="student" />
                                    </div>
                                    <div className=" bg-[#014BAE] w-fit rounded-full p-[1.2px] absolute top-0 md:-right-20 -right-20">
                                        <img src={suganth} className=" md:w-12 w-11 rounded-full hover:scale-105 transition bg-[#fff] p-1 " alt="student" />
                                    </div>
                                </div>
                                <div className="">
                                    <p className=" text-[24px] font-[poppins] text-[#221859] font-bold leading-6 flex items-center gap-2"> 
                                    <Star className=" w-4 fill-[#014BAE] stroke-none"/>
                                    <Star className=" w-4 fill-[#014BAE] stroke-none"/>
                                    <Star className=" w-4 fill-[#014BAE] stroke-none"/>
                                    <Star className=" w-4 fill-[#014BAE] stroke-none"/>
                                    <Star className=" w-4 fill-[#014BAE] stroke-none"/>
                                    </p>
                                    <p className=" text-[#232844] font-[poppins] font-bold  text-sm text-nowrap">35k+ happy students</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" md:order-2 order-1 shadow-xl border py-6 px-5 rounded-xl xl:block hidden">
                        <Slider {...settings}>
                            <div>
                                <div className=" p- relative overflow-hidden group transition">
                                <div className="">
                                    <img src={home_img} alt="Home_image" className=" rounded-t-xl"/>
                                </div>
                                <div className="p-4 bg-white">
                                    <div className=" flex items-center justify-between ">
                                        <div className=" flex items-center gap-1">
                                            <User className=" stroke-[#014bae] w-4 "/>
                                            <p className=" text-[#014bae] font-[poppins] font-bold text-sm ">Smit Samus</p>
                                        </div>
                                        <h2 className=" font-bold text-[#014bae] text-xl font-[poppins]">$22</h2>
                                    </div>
                                    <p className=" font-bold font-[poppins] text-black text-lg py-3">Innovative Leadership in <br /> Digital Age:Navigating <br /> Change & Driving Growth</p>
                                </div>
                                <div className=" flex items-center justify-between border-t-[1px] rounded-b-xl bg-white p-4">
                                    <div className=" flex items-center gap-1">
                                        <CalendarRange className=" w-5 stroke-stone-600"/>
                                        <p>15/07/2024</p>
                                    </div>
                                    <div className=" flex items-center gap-1">
                                        <User className=" w-5 stroke-stone-600"/>
                                        <p>1Students</p>
                                    </div>
                                </div>

                                <div className=" absolute w-full h-full top-0 rounded-xl bg-white hover:transition-all group-hover:right-[0px] transition-all duration-500 -right-[570px] px-5">
                                    <div>
                                        <div className=" flex items-center gap-1 pt-20 ">
                                                <User className=" stroke-[#014bae] w-4 "/>
                                            <p className=" text-[#014bae] font-[poppins] font-bold text-sm ">Smit Samus</p>
                                        </div>
                                        <p className=" font-bold font-[poppins] text-black text-lg py-6">Innovative Leadership in <br /> Digital Age:Navigating <br /> Change & Driving Growth</p>
                                    </div>

                                    <div className=" flex items-center justify-between border-t-[1px] border-b-[1px] bg-white py-3">
                                        <div className=" flex items-center gap-1">
                                            <CalendarRange className=" w-5 stroke-stone-600"/>
                                            <p>15/07/2024</p>
                                        </div>
                                        <div className=" flex items-center gap-1">
                                            <User className=" w-5 stroke-stone-600"/>
                                            <p>1Students</p>
                                        </div>
                                    </div>
                                    <div className=' w-full'>
                                        <button className='py-5 font-bold text-white my-5 w-full' id='H-btn'>Get Newsletter</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div>
                                <div className=" p- relative overflow-hidden group transition">
                                    <div className="">
                                        <img src={home_img2} alt="Home_image" className=" rounded-t-xl"/>
                                    </div>
                                    <div className="p-4 bg-white">
                                        <div className=" flex items-center justify-between ">
                                            <div className=" flex items-center gap-1">
                                                <User className=" stroke-[#014BAE] text-[#014BAE] w-4 "/>
                                                <p className=" text-[#014BAE] font-[poppins] font-bold text-sm ">Smit Samus</p>
                                            </div>
                                            <h2 className=" font-bold text-[#014BAE] text-xl font-[poppins]">$22</h2>
                                        </div>
                                        <p className=" font-bold font-[poppins] text-black text-lg py-3">Innovative Leadership in <br /> Digital Age:Navigating <br /> Change & Driving Growth</p>
                                    </div>
                                    <div className=" flex items-center justify-between border-t-[1px] rounded-b-xl bg-white p-4">
                                        <div className=" flex items-center gap-1">
                                            <CalendarRange className=" w-5 stroke-stone-600"/>
                                            <p>15/07/2024</p>
                                        </div>
                                        <div className=" flex items-center gap-1">
                                            <User className=" w-5 stroke-stone-600"/>
                                            <p>1Students</p>
                                        </div>
                                    </div>

                                    <div className=" absolute w-full h-full top-0 rounded-xl bg-white hover:transition-all group-hover:right-[0px] transition-all duration-500 -right-[570px] px-5">
                                        <div>
                                            <div className=" flex items-center gap-1 pt-20 ">
                                                <User className=" stroke-[#014BAE] w-4 "/>
                                                <p className=" text-[#014BAE] font-[poppins] font-bold text-sm ">Smit Samus</p>
                                            </div>
                                            <p className=" font-bold font-[poppins] text-black text-lg py-6">Innovative Leadership in <br /> Digital Age:Navigating <br /> Change & Driving Growth</p>
                                        </div>

                                        <div className=" flex items-center justify-between border-t-[1px] border-b-[1px] bg-white py-3">
                                            <div className=" flex items-center gap-1">
                                                <CalendarRange className=" w-5 stroke-stone-600"/>
                                                <p>15/07/2024</p>
                                            </div>
                                            <div className=" flex items-center gap-1">
                                                <User className=" w-5 stroke-stone-600"/>
                                                <p>1Students</p>
                                            </div>
                                        </div>
                                        <div className=' w-full'>
                                            <button className='py-5 font-bold text-white my-5 w-full' id='H-btn'>Get Newsletter</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className=" p- relative overflow-hidden group transition">
                                    <div className="">
                                        <img src={home_img3} alt="Home_image" className=" rounded-t-xl"/>
                                    </div>
                                    <div className="p-4 bg-white">
                                        <div className=" flex items-center justify-between ">
                                            <div className=" flex items-center gap-1">
                                                <User className=" stroke-[#014BAE] w-4 "/>
                                                <p className=" text-[#014bae] font-[poppins] font-bold text-sm ">Smit Samus</p>
                                            </div>
                                            <h2 className=" font-bold text-[#014BAE] text-xl font-[poppins]">$22</h2>
                                        </div>
                                        <p className=" font-bold font-[poppins] text-black text-lg py-3">Innovative Leadership in <br /> Digital Age:Navigating <br /> Change & Driving Growth</p>
                                    </div>
                                    <div className=" flex items-center justify-between border-t-[1px] rounded-b-xl bg-white p-4">
                                        <div className=" flex items-center gap-1">
                                            <CalendarRange className=" w-5 stroke-stone-600"/>
                                            <p>15/07/2024</p>
                                        </div>
                                        <div className=" flex items-center gap-1">
                                            <User className=" w-5 stroke-stone-600"/>
                                            <p>1Students</p>
                                        </div>
                                    </div>

                                    <div className=" absolute w-full h-full top-0 rounded-xl bg-white hover:transition-all group-hover:right-[0px] transition-all duration-500 -right-[570px] px-5">
                                        <div>
                                            <div className=" flex items-center gap-1 pt-20 ">
                                                <User className=" stroke-[#014BAE] "/>
                                                <p className=" text-[#014bae] font-[poppins] font-bold text-sm ">Smit Samus</p>
                                            </div>
                                            <p className=" font-bold font-[poppins] text-black text-lg py-6">Innovative Leadership in <br /> Digital Age:Navigating <br /> Change & Driving Growth</p>
                                        </div>

                                        <div className=" flex items-center justify-between border-t-[1px] border-b-[1px] bg-white py-3">
                                            <div className=" flex items-center gap-1">
                                                <CalendarRange className=" w-5 stroke-stone-600"/>
                                                <p>15/07/2024</p>
                                            </div>
                                            <div className=" flex items-center gap-1">
                                                <User className=" w-5 stroke-stone-600"/>
                                                <p>1Students</p>
                                            </div>
                                        </div>
                                        <div className=' w-full'>
                                            <button className='py-5 font-bold text-white my-5 w-full' id='H-btn'>Get Newsletter</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>

                <div>
                    <div className=" w-10 absolute top-[39%] right-[33%] xl:block hidden animate-bounce">
                        <img src={sideblub} alt="blub" className=""/>
                    </div>
                    <div className=" w-10 absolute top-[15%] right-[15%] xl:block hidden animate-bounce">
                        <img src={sideblub} alt="blub" className=""/>
                    </div>

                    <div className="animate-pulse duration-700 absolute top-[22%] left-[30%] border border-[#553CDF] rounded-md xl:block hidden">
                        <div className=" flex gap-3 items-start p-1 px-2">
                            <div>
                                <BookOpenText className=" w-12 h-12 stroke-white stroke-1 p-1 rounded-md bg-[#553CDF]"/>
                            </div>
                            <div className=" flex items-start flex-col">
                                <h1 className=" font-bold text-2xl">100+</h1>
                                <p className=" text-[#553CDF] leading-[4px]">(Online Course</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <Counter/>
                </div>

                <div className=" md:mb-[290px] md:mt-28 mt-20 mb-36">
                    <EchoolingCourses/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Homepage