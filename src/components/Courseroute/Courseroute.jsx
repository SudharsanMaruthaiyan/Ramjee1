// import Navtab from "./Navtab/Navtab"
// import Sidetab from "./Sidetab/Sidetab"
import Footer from "../Footer/Footer"
// import Videosection from "./Videosection/Videosection"
// import Header from "./Header/Header"
import Navbar from "../Navbar/Navbar"
import CourseTab from "./CourseTab/CourseTab"

const Courseroute = () => {
  return (
    <>
      <Navbar></Navbar>
      <CourseTab></CourseTab>
      <Footer></Footer>
    {/* <Navbar></Navbar>
      <Header></Header>
      <div className="max-w-[100%] mx-auto">
        <div className="w-[90%] grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-7">
          <div className="xl:col-span-3 lg:col-span-2 ">
            <Videosection></Videosection>
            <Navtab></Navtab>
          </div>
          <div className="lg:col-span-1 flex justify-end w-full">
            <Sidetab></Sidetab>
          </div>
        </div>
      </div>
      <Footer></Footer> */}
    </>
  )
}

export default Courseroute
