"use client"
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

type Inputs = {
  text: string;
  Number: number;
  Desc: string;
};
const ContactsPage = () => {
	 const {
     register,
     handleSubmit,
     reset,
     watch,
     formState: { errors },
   } = useForm<Inputs>();
   const onSubmit: SubmitHandler<Inputs> = async(data) => {
	let chat_id = process.env.NEXT_PUBLIC_Chat_Id;
    let telegram_bot_id = process.env.NEXT_PUBLIC_Telegram_bot_Id;
    let message = `Name: ${data.text}\n Number: ${data.Number}\n Description: ${data.Desc}`
    let settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
      },
      body: JSON.stringify({
        chat_id: chat_id,
        text: message,
      }),
    };
    try {
      await fetch(
        `https://api.telegram.org/bot${telegram_bot_id}/sendMessage`,
        settings
      );
	      toast.success(` A message has been sent to the Telegram bot!!`);
         reset();
    } catch (error) {
      console.error("Error during fetch:", error);
    }
   
  }
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5  py-24 mx-auto flex sm:flex-nowrap items-center flex-wrap ">
        <div className="lg:w-2/1 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Photo booth tattooed prism, portland taiyaki hoodie neutra
                typewriter
              </p>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                Biz bilan bog'lanish
              </h2>
              <p className="mt-1">
                Photo booth tattooed prism, portland taiyaki hoodie neutra
                typewriter
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-500 leading-relaxed">
                example@email.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Shopping
          </h2>
          <p className="text-gray-600 text-sm">
            Biz bilan bog'lanish xabaringizni qoldiring siz bilan bog'lanamiz
            xabaringiz telegram botga boradi 😊{" "}
          </p>
          <p className="text-gray-600 text-sm">
            Sizning xabaringiz biz uchun juda muhim
          </p>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                {...register("text")}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Phone
              </label>
              <input
                type="number"
                {...register("Number")}
                placeholder="+998"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label form="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                {...register("Desc")}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white w-full bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactsPage;
