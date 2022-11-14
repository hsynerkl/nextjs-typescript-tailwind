import { InstagramIcon } from "@icons/index";
import Image from "next/image";

const Section4 = () => {
  return (
    <section>
      <div className="flex justify-center items-center md:mb-14 mb-5 mt-[52rem] sm:mt-[40rem] md:mt-[0rem] ">
        <h3 className="text-2xl text-[#54565b]">Follow us on Instagram</h3>
      </div>
      <div className="flex w-full h-52 md:h-[30rem] lg:h-[40rem] xl:h-[50rem]  flex-wrap">
        <div className=" w-2/6 px-2 h-2/4 md:h-2/4 mt-4">
          <div className="w-full h-full relative z-10 group ">
            <Image src="/images/s3.1.jpeg" alt="image" layout="fill" />
            <div className="absolute z-50 top-0 left-0 transition justify-center items-center text-white hidden w-full h-full bg-black opacity-70 group-hover:flex hover:cursor-pointer">
              <div className="h-6 w-6 ">
                <InstagramIcon color="white" />
              </div>
            </div>
          </div>
        </div>
        <div className=" w-2/6 px-2 h-2/4 md:h-2/4 mt-4">
          <div className="w-full h-full relative z-10 group ">
            <Image src="/images/s3.2.jpeg" alt="image" layout="fill" />
            <div className="absolute z-50 top-0 left-0 transition justify-center items-center text-white hidden w-full h-full bg-black opacity-70 group-hover:flex hover:cursor-pointer">
              <div className="h-6 w-6 ">
                <InstagramIcon color="white" />
              </div>
            </div>
          </div>
        </div>
        <div className=" w-2/6 px-2 h-2/4 mt-4">
          <div className="w-full h-full relative z-10 group ">
            <Image src="/images/s3.3.jpeg" alt="image" layout="fill" />
            <div className="absolute z-50 top-0 left-0 transition justify-center items-center text-white hidden w-full h-full bg-black opacity-70 group-hover:flex hover:cursor-pointer">
              <div className="h-6 w-6 ">
                <InstagramIcon color="white" />
              </div>
            </div>
          </div>
        </div>
        <div className=" w-2/6 px-2 h-2/4 mt-4">
          <div className="w-full h-full relative z-10 group ">
            <Image src="/images/s3.4.jpeg" alt="image" layout="fill" />
            <div className="absolute z-50 top-0 left-0 transition justify-center items-center text-white hidden w-full h-full bg-black opacity-70 group-hover:flex hover:cursor-pointer">
              <div className="h-6 w-6 ">
                <InstagramIcon color="white" />
              </div>
            </div>
          </div>
        </div>
        <div className=" w-2/6 px-2 h-2/4 mt-4">
          <div className="w-full h-full relative z-10 group ">
            <Image src="/images/s3.5.jpeg" alt="image" layout="fill" />
            <div className="absolute z-50 top-0 left-0 transition justify-center items-center text-white hidden w-full h-full bg-black opacity-70 group-hover:flex hover:cursor-pointer">
              <div className="h-6 w-6 ">
                <InstagramIcon color="white" />
              </div>
            </div>
          </div>
        </div>
        <div className=" w-2/6 px-2 h-2/4 mt-4">
          <div className="w-full h-full relative z-10 group ">
            <Image src="/images/s3.6.jpeg" alt="image" layout="fill" />
            <div className="absolute z-50 top-0 left-0 transition justify-center items-center text-white hidden w-full h-full bg-black opacity-70 group-hover:flex hover:cursor-pointer">
              <div className="h-6 w-6 ">
                <InstagramIcon color="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
