import LiveVideo from "./LiveVideo/LiveVideo"

const LiveClasses = () => {
  return (
    <>
        <div className=" max-w-[100%] mx-auto my-20">
          <div className=" w-[90%] mx-auto">
            <div className=" text-center bg-[#F2F4F9] pb-0 pt-10 rounded-b-xl">
              <h5 className=" text-center font-bold text-[#014bae] py-2 font-[poppins]">Live Class</h5>
              <h1 className=" font-bold text-[35px] md:text-[40px] md:leading-tight leading-normal text-wrap px-12 font-[poppins] uppercase">High quality video,audio <br className=" md:block hidden"/>
              & live class</h1>
              <div className=" py-10">
                  <LiveVideo/>
              </div>
            </div>

          </div>
        </div>
    </>
  )
}

export default LiveClasses