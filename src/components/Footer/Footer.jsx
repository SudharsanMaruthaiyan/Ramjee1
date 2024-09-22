import { Facebook, Linkedin, Phone, Twitter, Youtube } from "lucide-react";
import { apple_store, google_play, navlogo1 } from "../../assets/image";

const Footer = () => {
  return (
    <>
      <div>
        <div className=" bg-[url(https://ik.imagekit.io/HoneyJoe/Skiil%20grow/Frame%2040288.png?updatedAt=1726761404248)] bg-contain max-w-[100%] mt-10">
          <div className="w-[90%] lg:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-24 gap-10 ">
            <div className=" flex flex-col gap-3 pb-5 md:pb-0">
              <img
                className=" pt-2 -ml-2"
                src={navlogo1}
                alt="logo"
                width={150}
              />
              <p className=" text-[#fff] text-wrap font-[Poppins] text-[16px] leading-7 pt-3">
                when an unknown printer took galley of type and scrambled it to
                make pspecimen bookt has.
              </p>
              <p className=" text-white font-[Poppins] pt-3">
                70 Kaliamman Kovil Street, Palanganatham Pasumpon Nagar, Madurai
              </p>
              <p className=" text-white font-[Poppins]">+91 80729 48266</p>
              <div></div>
            </div>

            <div className=" flex lg:justify-center md:pl-10">
              <div className=" flex flex-col gap-4 ">
                <h1 className=" text-white font-[Poppins] text-[24px] font-bold">
                  Resources
                </h1>
                <ul className=" text-[#ffffff] pt-4">
                  <li className=" pb-4 flex items-center group">
                    <div
                      className=" w-0 h-1 rounded-lg bg-[#fff] group-hover:w-4 transition-all"
                      id="move"
                    ></div>{" "}
                    <a
                      href=""
                      className=" font-[Poppins] font-medium group-hover:text-[#fff]  transition-all"
                    >
                      About
                    </a>
                  </li>
                  <li className=" pb-4 flex items-center group">
                    <div
                      className=" w-0 h-1 rounded-lg bg-[#fff]  group-hover:w-4 transition-all"
                      id="move"
                    ></div>
                    <a
                      href=""
                      className=" font-[Poppins] font-medium group-hover:text-[#fff] transition-all"
                    >
                      {" "}
                      Contact
                    </a>
                  </li>
                  <li className=" pb-4 flex items-center group">
                    <div
                      className=" w-0 h-1 rounded-lg bg-[#fff] group-hover:w-4 transition-all"
                      id="move"
                    ></div>
                    <a
                      href=""
                      className=" font-[Poppins] font-medium group-hover:text-[#fff]"
                    >
                      Help Center
                    </a>
                  </li>
                  <li className=" pb-4 flex items-center group">
                    <div
                      className=" w-0 h-1 rounded-lg bg-[#fff] group-hover:w-4 transition-all"
                      id="move"
                    ></div>
                    <a
                      href=""
                      className=" font-[Poppins] font-medium group-hover:text-[#fff]"
                    >
                      {" "}
                      Refund
                    </a>
                  </li>
                  <li className=" pb-4 flex items-center group">
                    <div
                      className=" w-0 h-1 rounded-lg bg-[#fff] group-hover:w-4 transition-all"
                      id="move"
                    ></div>
                    <a
                      href=""
                      className=" font-[Poppins] font-medium group-hover:text-[#fff]"
                    >
                      {" "}
                      Conditions
                    </a>
                  </li>
                  <li className=" pb-4 flex items-center group">
                    <div
                      className=" w-0 h-1 rounded-lg bg-[#fff] group-hover:w-4 transition-all"
                      id="move"
                    ></div>
                    <a
                      href=""
                      className=" font-[Poppins] font-medium group-hover:text-[#fff]"
                    >
                      {" "}
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className=" flex lg:justify-start lg:pl-20">
              <div className=" flex flex-col gap-4 ">
                <h1 className=" text-white font-[Poppins] text-[24px] font-bold">
                  Courses
                </h1>
                <ul className=" text-[#fff] pt-4">
                  <li className=" pb-4 flex items-center group">
                    <div
                      className=" w-0 h-1 rounded-lg bg-[#fff] group-hover:w-4 transition-all"
                      id="move"
                    ></div>
                    <a
                      href=""
                      className=" font-[Poppins] font-medium  group-hover:text-[#fff] "
                    >
                      {" "}
                      Life Coach
                    </a>
                  </li>
                  <li className=" pb-4 flex items-center group">
                    <div
                      className=" w-0 h-1 rounded-lg bg-[#fff] group-hover:w-4 transition-all"
                      id="move"
                    ></div>
                    <a
                      href=""
                      className=" font-[Poppins] font-medium group-hover:text-[#fff] "
                    >
                      {" "}
                      UI/UX Figma
                    </a>
                  </li>
                  <li className=" pb-4 flex items-center group">
                    <div
                      className=" w-0 h-1 rounded-lg bg-[#fff] group-hover:w-4 transition-all"
                      id="move"
                    ></div>
                    <a
                      href=""
                      className=" font-[Poppins] font-medium group-hover:text-[#fff] "
                    >
                      Web Design
                    </a>
                  </li>
                  <li className=" pb-4 flex items-center group">
                    <div
                      className=" w-0 h-1 rounded-lg bg-[#fff] group-hover:w-4 transition-all"
                      id="move"
                    ></div>
                    <a
                      href=""
                      className=" font-[Poppins] font-medium group-hover:text-[#fff] "
                    >
                      {" "}
                      Java
                    </a>
                  </li>
                  <li className=" pb-4 flex items-center group">
                    <div
                      className=" w-0 h-1 rounded-lg bg-[#fff] group-hover:w-4 transition-all"
                      id="move"
                    ></div>
                    <a
                      href=""
                      className=" font-[Poppins] font-medium group-hover:text-[#fff] "
                    >
                      {" "}
                      Web Development
                    </a>
                  </li>
                  <li className=" pb-4 flex items-center group">
                    <div
                      className=" w-0 h-1 rounded-lg bg-[#fff] group-hover:w-4 transition-all"
                      id="move"
                    ></div>
                    <a
                      href=""
                      className=" font-[Poppins] font-medium group-hover:text-[#fff] "
                    >
                      SEO Optimize
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className=" flex lg:justify-center xl:justify-end">
              <div className="flex flex-col gap-4 ">
                <h1 className=" text-white font-[Poppins] text-[24px] font-bold pb-5">
                  Get in Touch
                </h1>
                <div>
                  <p className="text-white font-[Poppins]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ac
                    minus vero similique.
                  </p>
                </div>
                <div className="flex gap-4">
                  <a href="">
                    <Facebook className="cursor-pointer w-5 transition duration-300 fill-white hover:fill-[#2f57ef] hover:stroke-[#2f57ef] stroke-white" />
                  </a>
                  <a href="">
                    <Twitter className="cursor-pointer w-5 transition duration-300 fill-white hover:fill-[#2f57ef] hover:stroke-[#2f57ef] stroke-white" />
                  </a>
                  <a href="">
                    <Phone className="cursor-pointer w-5 transition duration-300 fill-white hover:fill-[#2f57ef] hover:stroke-[#2f57ef] stroke-white" />
                  </a>
                  <a href="">
                    <Linkedin className="cursor-pointer w-5 transition duration-300 fill-white hover:fill-[#2f57ef] hover:stroke-[#2f57ef] stroke-white" />
                  </a>
                  <a href="">
                    <Youtube className="cursor-pointer w-5 transition duration-300 hover:fill-[#2f57ef] hover:stroke-[#2f57ef] stroke-white" />
                  </a>
                </div>
                <div className="flex gap-3">
                  <div>
                    <img src={google_play} alt="" />
                  </div>
                  <div>
                    <img src={apple_store} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-full border-t-[1px] py-7 mt-24">
            <div className=" 3xl:container w-[90%] xl:w-[90%] mx-auto">
              <div className=" lg:grid lg:grid-cols-2 grid-cols-1 flex flex-col items-center ">
                <div>
                  <p className=" text-[#fff] text-[15px] font-[Poppins]">
                    Copyright © 2024 Ramjee. All rights reserved.
                  </p>
                </div>
                <div className=" flex gap-2 lg:justify-end md:pt-3 lg:p-0">
                  <p className=" text-[#fff]  text-[15px] font-[Poppins] font-medium">
                    Privacy Policy
                  </p>
                  <p className=" text-[#fff] text-[15px] font-[Poppins] font-medium">
                    .
                  </p>
                  <p className=" text-[#fff] text-[15px] font-[Poppins] font-medium">
                    Terms & Conditions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
