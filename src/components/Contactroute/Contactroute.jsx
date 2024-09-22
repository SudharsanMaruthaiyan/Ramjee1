
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import ContactForm from "./ContactForm/ContactForm"
import Header from "./Header/Header"
import Map from "./Map/Map"
import Sidetab from "./Sidetab/Sidetab"

const Contactroute = () => {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header> 
      <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <Sidetab></Sidetab>
        </div>
        <div className=" lg:col-span-3">
          <ContactForm></ContactForm>
        </div>
      </div>
      <Map></Map>
      <Footer></Footer>
    </>
  )
}

export default Contactroute
