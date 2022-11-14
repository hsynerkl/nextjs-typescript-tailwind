import Image from "next/image";

const Section3 = () => {
  return (
    <section className="pt-8 h-[27rem] flex-wrap flex">
      <div className="w-full md:w-4/12 pr-2 sm:h-5/6  h-full relative">
        <Image src="/images/s2.1.webp" alt="image" layout="fill" />
        <div className="top-0 w-full z-10 h-full absolute p-4">
          <div className="border-white border-2 h-full w-full flex-col flex justify-center items-center text-white text-xl font-bold">
            <h4 className="text-center">Lavender Gin Sour</h4>
            <button className="py-3 px-5 mt-2 text-xs  rounded-full bg-[#4f4285] tracking-widest	">
              SEE RECIPE
            </button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-4/12 pr-2 sm:h-5/6  h-full relative">
        <Image src="/images/s2.2.webp" alt="image" layout="fill" />
        <div className="top-0 w-full z-10 h-full absolute p-4">
          <div className="border-white border-2 h-full w-full flex-col flex justify-center items-center text-white text-xl font-bold">
            <h4 className="text-center">Blueberry Lavender Angel Food Cake</h4>
            <button className="py-3 px-5 mt-2 text-xs  rounded-full bg-[#4f4285] tracking-widest	">
              SEE RECIPE
            </button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-4/12 pr-2 sm:h-5/6  h-full relative">
        <Image src="/images/s2.3.webp" alt="image" layout="fill" />
        <div className="top-0 w-full z-10 h-full absolute p-4">
          <div className="border-white border-2 h-full w-full flex-col flex justify-center items-center text-white text-xl font-bold">
            <h4 className="text-center">
              Ways To Incorporate Lavender Essential Oil In Your Everyday
            </h4>
            <button className="py-3 px-5 mt-2 text-xs  rounded-full bg-[#4f4285] tracking-widest	">
              SEE RECIPE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
