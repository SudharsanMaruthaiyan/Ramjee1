import { Tabs } from "@mui/base/Tabs";
import { TabsList } from "@mui/base/TabsList";
import { TabPanel } from "@mui/base/TabPanel";
import { Tab } from "@mui/base/Tab";
import { ChevronRight, GraduationCap } from "lucide-react";
import { coursetab1, coursetab2, coursetab3, coursetab4, coursetab5, coursetab6 } from "../../../assets/image";
import AllCourse from "../AllCourse/AllCourse";
import ArtDevelop from "../ArtDevelop/ArtDevelop";

export default function CourseTab() {
    return (
      <>
        <div className="max-w-[100%] mx-auto py-[20px] lg:py-[50px] my-[50px]">
          <div className="w-[90%] mx-auto grid grid-cols-1">
            <Tabs defaultValue={0} orientation="vertical">
              <div className=" grid grid-cols-4  gap-14">
                <div className="h-fit col-span-4 md:col-span-2 lg:col-span-1 border py-5 px-2 rounded-xl">
                    <div>
                        <h2 className="font-[Poppins] text-[24px] font-medium text-center"> Course Categories</h2>
                    </div>
                  <TabsList
                    className="w-[100%] flex flex-col gap-5 py-7 px-3 bg-white rounded-lg h-[100%]"
                    id="certi"
                  >
                    <Tab
                      slotProps={{
                        root: ({ selected, disabled }) => ({
                          className: `font-[Poppins]  ${
                            selected ? "text-[#FFEB6B] " : "text-black"
                          } ${
                            disabled
                              ? "cursor-not-allowed opacity-50"
                              : "cursor-pointer"
                          } text-[20px] w-full px-2 py-0   flex  gap-5 items-center focus:outline-0`,
                        }),
                      }}
                    >
                     <div className=""><GraduationCap color="black"></GraduationCap></div>  All Course 
                    </Tab>
                    <hr />
                    <Tab
                      slotProps={{
                        root: ({ selected, disabled }) => ({
                          className: `font-[Poppins]  ${
                            selected ? "text-[#FFEB6B] " : "text-black"
                          } ${
                            disabled
                              ? "cursor-not-allowed opacity-50"
                              : "cursor-pointer"
                          } text-[20px] gap-5 w-full px-2 py-0   flex  items-center focus:outline-0`,
                        }),
                      }}
                    >
                      <div><img src={coursetab1} alt="" className="w-[24px]"/></div> Art Develop 
                    </Tab>
                    <hr />
                    <Tab
                      slotProps={{
                        root: ({ selected, disabled }) => ({
                          className: `font-[Poppins]  ${
                            selected ? "text-[#FFEB6B] " : "text-black"
                          } ${
                            disabled
                              ? "cursor-not-allowed opacity-50"
                              : "cursor-pointer"
                          } text-[20px] gap-5 w-full px-2 py-0   flex  items-center focus:outline-0`,
                        }),
                      }}
                    >
                     <div><img src={coursetab2} alt="" className="w-[24px]" /></div> Bussiness 
                    </Tab>
                    <hr />
                    <Tab
                      slotProps={{
                        root: ({ selected, disabled }) => ({
                          className: `font-[Poppins]  ${
                            selected ? "text-[#FFEB6B] " : "text-black"
                          } ${
                            disabled
                              ? "cursor-not-allowed opacity-50"
                              : "cursor-pointer"
                          } text-[20px] gap-5 w-full px-2 py-0   flex  items-center focus:outline-0`,
                        }),
                      }}
                    >
                     <div><img src={coursetab3} alt="" className="w-[24px]" /></div> Design
                    </Tab>
                    <hr />
                    <Tab
                      slotProps={{
                        root: ({ selected, disabled }) => ({
                          className: `font-[Poppins]  ${
                            selected ? "text-[#FFEB6B] " : "text-black"
                          } ${
                            disabled
                              ? "cursor-not-allowed opacity-50"
                              : "cursor-pointer"
                          } text-[20px] gap-5 w-full px-2 py-0   flex  items-center focus:outline-0`,
                        }),
                      }}
                    >
                     <div><img src={coursetab4} alt="" className="w-[24px]" /></div> Development 
                    </Tab>
                    <hr />
                    <Tab
                      slotProps={{
                        root: ({ selected, disabled }) => ({
                          className: `font-[Poppins]  ${
                            selected ? "text-[#FFEB6B] " : "text-black"
                          } ${
                            disabled
                              ? "cursor-not-allowed opacity-50"
                              : "cursor-pointer"
                          } text-[20px] gap-5 w-full px-2 py-0   flex  items-center focus:outline-0`,
                        }),
                      }}
                    >
                     <div><img src={coursetab5} alt="" className="w-[24px]" /></div> Managemnet 
                    </Tab>
                    <hr />
                    <Tab
                      slotProps={{
                        root: ({ selected, disabled }) => ({
                          className: `font-[Poppins]  ${
                            selected ? "text-[#FFEB6B] " : "text-black"
                          } ${
                            disabled
                              ? "cursor-not-allowed opacity-50"
                              : "cursor-pointer"
                          } text-[20px] gap-5 w-full px-2 py-0   flex  items-center focus:outline-0`,
                        }),
                      }}
                    >
                     <div><img src={coursetab6} alt="" className="w-[24px]" /></div> UI/UX Design 
                    </Tab>
                  </TabsList>
                </div>
  
                <div className="col-span-4 md:col-span-2 lg:col-span-3">
                  <TabPanel value={0}>
                    <AllCourse></AllCourse>
                  </TabPanel>
                  <TabPanel value={1}>
                      <ArtDevelop></ArtDevelop>
                  </TabPanel>
                  <TabPanel value={2}>
                    Four
                  </TabPanel>
                  <TabPanel value={3}>
                  </TabPanel>
                  <TabPanel value={4}>
                  </TabPanel>
                  <TabPanel value={5}>
                  </TabPanel>
                  <TabPanel value={6}></TabPanel>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </>
    );
  }