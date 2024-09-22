import { ChevronRight, ChevronRightCircle } from "lucide-react";

const Coursedesc = () => {
  return (
    <>
      <div className="max-w-[100%] mx-auto">
        <div className="w-full grid grid-cols-1 mx-auto">
          <div className="p-5 md:py-10 md:px-10 shadow-[0px_0px_14px_0px_#00000014] flex flex-col gap-5 rounded-lg">
            <div>
              <p className="font-[Poppins] text-[24px] md:text-[30px] xl:text-[1.75rem] font-semibold text-[#014BAE]">Course Description</p>
            </div>
            <div>
              <p className="font-[Inter] text-[14px] lg:text-[16px] text-[#6d6c80] leading-[1.75]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, possimus Poppinsvident doloremque esse quae excepturi
                nihil ad labore odio sed eaque obcaecati perspiciatis
                praesentium libero dolorem inventore amet atque nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, aliquam, placeat debitis maiores laboriosam vel iusto nobis tempore culpa aliquid aspernatur. Accusamus sint voluptates laboriosam! Totam ab voluptatum laborum doloremque?
              </p>
            </div>
            <div>
              <p className="font-[Poppins] text-[24px] md:text-[30px] xl:text-[1.75rem] font-semibold text-[#014BAE] leading-[1.75]">What you'll learn in this course?</p>
            </div>
            <div>
              <p className="font-[Inter] text-[14px] lg:text-[16px] text-[#6d6c80] leading-[1.75]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                perspiciatis ad nesciunt architecto odit cupiditate facilis
                magni ipsum iure. Fuga quis exercitationem, iste ullam adipisci
                doloribus illo et molestiae cupiditate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quos porro vero minus possimus, cupiditate impedit autem numquam, magni sint voluptates dignissimos quaerat libero distinctio adipisci odio est! Amet, reprehenderit.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-5 items-center group ">
                <div >
                  <ChevronRightCircle fill="#ffc224" strokeWidth={1} size={40} className="shadow-[4px_3px_0px_0px_#00000040] rounded-full bg-transparent group-hover:shadow-none transition"></ChevronRightCircle>
                </div>
                <div>
                  <p className="font-[Poppins] text-[18px] lg:text-[20px] text-[#014BAE] font-semibold">Work with color & Gradients & Grids</p>
                </div>
              </div>
              <div className="flex gap-5 items-center group ">
                <div >
                  <ChevronRightCircle fill="#ffc224" strokeWidth={1} size={40} className="shadow-[4px_3px_0px_0px_#00000040] rounded-full bg-transparent group-hover:shadow-none transition"></ChevronRightCircle>
                </div>
                <div>
                  <p className="font-[Poppins] text-[18px] lg:text-[20px] text-[#014BAE] font-semibold">All the useful shortcuts</p>
                </div>
              </div>
              <div className="flex gap-5 items-center group ">
                <div >
                  <ChevronRightCircle fill="#ffc224" strokeWidth={1} size={40} className="shadow-[4px_3px_0px_0px_#00000040] rounded-full bg-transparent group-hover:shadow-none transition"></ChevronRightCircle>
                </div>
                <div>
                  <p className="font-[Poppins] text-[18px] lg:text-[20px] text-[#014BAE] font-semibold">Be able to create Flyers, Brochures, Advertisements</p>
                </div>
              </div>
              <div className="flex gap-5 items-center group ">
                <div >
                  <ChevronRightCircle fill="#ffc224" strokeWidth={1} size={40} className="shadow-[4px_3px_0px_0px_#00000040] rounded-full bg-transparent group-hover:shadow-none transition"></ChevronRightCircle>
                </div>
                <div>
                  <p className="font-[Poppins] text-[18px] lg:text-[20px] text-[#014BAE] font-semibold">How to work with Images & Text</p>
                </div>
              </div>
            </div>
            <div>
                <p className="font-[Inter] text-[14px] text-[#6d6c80] leading-[1.75] lg:text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptatum sint harum, fugiat quis laudantium itaque a, molestiae amet similique quisquam. Repudiandae fugit sapiente officia facilis iusto? Deleniti, minus iste. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium voluptas itaque vel cum dolorum. Vero illum facere voluptas cum. Sapiente ipsam commodi laudantium saepe dicta nam consectetur aperiam, aut magni.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coursedesc;
