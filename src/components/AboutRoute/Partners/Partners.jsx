import { brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8 } from "../../../assets/image"

const Partners = () => {
  return (
    <>
    <div className="max-w-[100%] mb-20">
        <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-start">
            <div className="flex flex-col justify-center gap-4">
                <div>
                    <p className="font-[Poppins] text-[#808080] text-[15px] tracking-widest">OUR PARTNERS</p>
                </div>
                <div>
                    <p className="font-[Poppins] text-[36px] font-semibold text-[#181818]">Learn With Our <br className=" hidden"/> Partners</p>
                </div>
                <div>
                    <p className="font-[Poppins] text-[15px] text-[#808080]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil laboriosam recusandae, voluptate assumenda delectus ea numquam labor</p>
                </div>
            </div>
            <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 lg:grid-cols-4">
                <div className="p-5 hover:shadow-[0px_10px_50px_0px_#1a2e551a]">
                    <img src={brand1} alt="" />
                </div>
                <div className="p-5 hover:shadow-[0px_10px_50px_0px_#1a2e551a]">
                    <img src={brand2} alt="" />
                </div>
                <div className="p-5 hover:shadow-[0px_10px_50px_0px_#1a2e551a]">
                    <img src={brand3} alt="" />
                </div>
                <div className="p-5 hover:shadow-[0px_10px_50px_0px_#1a2e551a]">
                    <img src={brand4} alt="" />
                </div>
                <div className="p-5 hover:shadow-[0px_10px_50px_0px_#1a2e551a]">
                    <img src={brand5} alt="" />
                </div>
                <div className="p-5 hover:shadow-[0px_10px_50px_0px_#1a2e551a]">
                    <img src={brand6} alt="" />
                </div>
                <div className="p-5 hover:shadow-[0px_10px_50px_0px_#1a2e551a]">
                    <img src={brand7} alt="" />
                </div>
                <div className="p-5 hover:shadow-[0px_10px_50px_0px_#1a2e551a]">
                    <img src={brand8} alt="" />
                </div>
            </div>

            </div>
        </div>

    </div>

    </>
  )
}

export default Partners