import { ChevronRight } from "lucide-react"
import { contacthead1440, contacthead745, contactheadmob, headerimg_ribbon, headerimg_rocket, headerimg_star, headerimg_starurn } from "../../../assets/image"


const Header = () => {
  return (
    <>
      <div className=" max-w-[100%] mx-auto mt-[80px] py-[40px]">
        <div className="w-[100%] grid grid-cols-1 mx-auto">
          <img src={contacthead745} alt="" className="hidden md:block xl:hidden" />
          <img src={contacthead1440} alt="" className="hidden xl:block" />
          <img src={contactheadmob} alt="" className=" md:hidden xl:hidden" />
        </div>
      </div>
    </>
  )
}

export default Header
