import Image from "next/image";

const Section6 = () => {
  return (
    <section className="mt-[5rem] ml-2">
      <h3 className="text-2xl text-[#54565b] text-start ">Featured In</h3>
      <div className="container mx-auto flex justify-center items-center flex-wrap ">
        <div className="w-28 h-28 md:w-40 md:h-40 relative">
          <Image src="/images/blog.png" alt="img" layout="fill" />
        </div>
        <div className="w-28 h-28 md:w-40 md:h-40 relative">
          <Image src="/images/lcbo.png" alt="img" layout="fill" />
        </div>
        <div className="w-28 h-28 md:w-40 md:h-40 relative">
          <Image src="/images/narcity.webp" alt="img" layout="fill" />
        </div>
        <div className="w-28 h-28 md:w-40 md:h-40 relative">
          <Image src="/images/bttv.png" alt="img" layout="fill" />
        </div>
        <div className="w-28 h-28 md:w-40 md:h-40 relative">
          <Image src="/images/ctw.png" alt="img" layout="fill" />
        </div>
        <div className="w-28 h-28 md:w-40 md:h-40 relative">
          <Image src="/images/global.png" alt="img" layout="fill" />
        </div>
        <div className="w-28 h-28 md:w-40 md:h-40 relative">
          <Image src="/images/cbc.png" alt="img" layout="fill" />
        </div>
      </div>
    </section>
  );
};

export default Section6;
