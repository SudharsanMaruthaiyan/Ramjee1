import { Menu } from "lucide-react";
import { navlogo } from "../../assets/image";
import { Link } from "react-router-dom";
import { useState } from "react";
// import Animatedcursor from "../AnimatedCursor/AnimatedCursor";
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <div className="3xl:container mx-auto bg-white shadow-md z-50 fixed top-0 w-full">
        {/* <Animatedcursor/> */}
        <div className=" w-[90%] grid grid-cols-2 lg:grid-cols-3 mx-auto my-5 items-center justify-between sticky top-0">
          <div className="">
            <img src={navlogo} alt="logo" width={100} />
          </div>
          <div className="flex items-center justify-end lg:col-span-2">
            <div className={`lg:block ${toggle?'block ' :' hidden'}`}>
              <div className=" lg:flex gap-20 absolute -left-6 md:-left-10 top-20 lg:static bg-white w-[115%] md:w-[118%] lg:mt-0 -mt-6 z-50 ">
                <div>
                  <ul className=" lg:flex lg:gap-9 space-y-3 lg:space-y-0 items-center justify-center ">
                    <li className=" text-[16px] font-bold font-[Poppins] p-2 text-center lg:p-0 hover:text-[#1176F0]">
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li className="text-[16px] font-bold font-[Poppins] p-2 text-center lg:p-0  hover:text-[#1176F0]">
                      <Link to={"/course"}>Course</Link>
                    </li>
                    <li className="text-[16px] font-bold font-[Poppins] p-2 text-center lg:p-0 hover:text-[#1176F0]">
                      <Link to={"/about"}>About us</Link>
                    </li>
                    <li className="text-[16px] font-bold font-[Poppins] p-2 text-center lg:p-0 hover:text-[#1176F0]">
                      <Link to={"/contact"}>Contact</Link>
                    </li>
                    <li className="text-[16px] font-bold font-[Poppins] p-2 text-center lg:p-0 hover:text-[#1176F0]">
                      <Link to={"/Blog"}>Blog</Link>
                    </li>
                    <li className="text-[16px] font-bold font-[Poppins] p-2 text-center lg:p-0  px-3 py-2 rounded-lg flex items-center  text-white justify-center">
                      <button className="bg-blue-500 px-8 py-2 hover:bg-white border border-[#1176F0] hover:text-[#1176F0] rounded-full font-[Poppins] font-bold text-white ">Log in </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Menu className={`block lg:hidden`} onClick={()=>{
              setToggle(!toggle)
            }} 
            ></Menu>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
