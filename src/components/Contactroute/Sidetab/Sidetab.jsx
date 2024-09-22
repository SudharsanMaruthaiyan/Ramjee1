import { Mail, MapPin, PhoneCall } from "lucide-react"

const Sidetab = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-5">
        <div className="flex items-center gap-8 bg-[#CCE2FF] py-9 px-10 border rounded-lg">
          <div className="bg-[#0162E4] p-5 rounded-full">
            <MapPin color="white"></MapPin>
          </div>
          <div className="flex justify-center">
            <p className="font-[Poppins] text-[16px] lg:text-[20px] font-semibold text-[#161439]">Address</p>
          </div>
        </div>
        <div className="flex items-center gap-8 bg-[#CCE2FF] py-9 px-10 border rounded-lg">
          <div className="bg-[#0162E4] p-5 rounded-full">
            <PhoneCall color="white"></PhoneCall>
          </div>
          <div className="flex justify-center">
            <p className="font-[Poppins] text-[16px] lg:text-[20px] font-semibold text-[#161439]">Phone</p>
          </div>
        </div>
        <div className="flex items-center gap-8 bg-[#CCE2FF] py-9 px-10 border rounded-lg">
          <div className="bg-[#0162E4] p-5 rounded-full">
            <Mail color="white"></Mail>
          </div>
          <div className="flex justify-center">
            <p className="font-[Poppins] text-[16px] lg:text-[20px] font-semibold text-[#161439]">E-Mail</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Sidetab
