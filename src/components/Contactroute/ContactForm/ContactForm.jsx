import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useForm, useFormState } from "react-hook-form";
import * as z from 'zod';

const schema = z.object({
    name: z.string().min(1, { message: '* Required' }),
    email: z.string().email(),
    web: z.string().min(1, { message: '* Required' }),
    comment: z.string().min(1, { message: '* Required' }),
  });

const ContactForm = () => {

    const {register , handleSubmit,formState:{errors}} = useForm({
        resolver:zodResolver(schema),
        mode:"onChange"
    })
    const onSubmit = async (data) => {
        // async request which may result error
        try {
            console.log(data)

        } catch (e) {
          console.log(e)
          // handle your error
        }
      };
  return (
    <>
      <div className="grid grid-cols-1 py-8 px-10 bg-[#CCE2FF] border rounded-lg gap-5">
        <div className="flex flex-col gap-4">
          <p className="font-[Poppins] text-[#014BAE] text-[26px] lg:text-[30px] font-semibold">
            Send Us Message
          </p>
          <p className="font-[Poppins] text-[14px] lg:text-base text-[#6d6c80]">
            Your email address will not be published. Required fields are marked
            *
          </p>
        </div>
        <div>
          <form action="" className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <textarea
                name="message"
                id="mess"
                placeholder="Comment"
                rows={4}
                cols={30}
                className="p-5 border rounded-lg lg:w-[550px]"
                {...register("comment")}
              ></textarea>
              <p className="text-red-500">{errors.comment?.message}</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name*"
                  className="px-5 py-2 border rounded-lg"
                  {...register("name")}
                />
                <p className="text-red-500">{errors.name?.message}</p>
              </div>
              <div>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="*Email"
                  className="px-5 py-2 border rounded-lg"
                  {...register("email")}
                />
                <p className="text-red-500">{errors.email?.message}</p>
              </div>
              <div>
                <input
                  type="text"
                  name="web"
                  id="web"
                  placeholder="Website"
                  className="px-5 py-2 border rounded-lg"
                  {...register("web")}
                />
                <p className="text-red-500">{errors.web?.message}</p>
              </div>
              
            </div>
            <div>
                <button
                  type="submit"
                  className="flex items-center hover:shadow-none transition hover:bg-[#fff] gap-4 border-2 border-black rounded-full py-[16px] px-[30px] bg-[#FFDE05]  font-[Poppins] font-semibold"
                >
                  Send <ArrowRight></ArrowRight>
                </button>
              </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
