import Image from "next/image";

const Section2 = () => {
  return (
    <section className="mt-[20rem] md:mt-[44rem]  lg:mt-[55rem] clg:mt-[22rem] xl:mt-[22rem] 2xl:mt-[23rem] space-x-2 flex justify-center items-center flex-wrap ">
      <div className="w-40 h-44 relative">
        <Image src="/images/organic.png" layout="fill" alt="img" />
      </div>
      <div className="w-40 h-44 relative">
        <Image src="/images/proudly.png" layout="fill" alt="img" />
      </div>
      <div className="w-40 h-44 relative">
        <Image src="/images/handcrafted.png" layout="fill" alt="img" />
      </div>
      <div className="w-40 h-44 relative">
        <Image src="/images/cruelty.png" layout="fill" alt="img" />
      </div>
    </section>
  );
};

export default Section2;
