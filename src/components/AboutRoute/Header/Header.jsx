import { abouthead1440, abouthead745, aboutheadmob } from "../../../assets/image"

const Header = () => {
  return (
    <>
    <div className=" max-w-[100%] mx-auto mt-[100px]">
        <div className="w-[100%] grid grid-cols-1 mx-auto">
          <img src={abouthead745} alt="" className="hidden md:block xl:hidden" />
          <img src={abouthead1440} alt="" className="hidden xl:block" />
          <img src={aboutheadmob} alt="" className=" md:hidden xl:hidden" />
        </div>
      </div>
      
    </>
  )
}

export default Header
