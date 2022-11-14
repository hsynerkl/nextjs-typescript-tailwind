import Video from "./Video";
import Image from "next/image";

const Section1 = () => {
  return (
    <section className="mt-10 md:mt-4 w-full video-container h-screen min-h-screen ">
      <Video />
      <div className="flex space-x-3 justify-center items-center flex-wrap w-full mt-8 ">
        <div className="flex sm:items-start items-center flex-col">
          <div className="w-[18rem] md:w-[35rem] h-48 md:h-96 relative ">
            <Image
              src="/images/s1.2.webp"
              layout="fill"
              objectFit="cover"
              alt="img"
            />
          </div>
          <div className="flex flex-col justify-center items-center md:justify-start md:items-start mt-4 text-[#54565B]">
            <h3 className="text-xl mt-2 ">Inside the Space</h3>
            <p className="mt-4 text-xs text-center">
              Featuring over 60 of Terre Bleu’s popular, natural, lavender-based
              products.
            </p>
            <button className="mt-3 text-xs border border-gray-100 py-2 px-4 rounded-full interstate">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="flex mt-2 sm:items-start items-center flex-col">
          <div className="w-[18rem] md:w-[35rem] h-48 md:h-96 relative ">
            <Image
              src="/images/s1.1.webp"
              layout="fill"
              objectFit="cover"
              alt="img"
            />
          </div>
          <div className="flex flex-col justify-center items-center md:justify-start md:items-start mt-4 text-[#54565B]">
            <h3 className="text-xl ">A Day in Elora, Ontario.</h3>
            <p className="mt-4 text-xs text-cemter">
              Known as Ontarios most beautiful village, there are so many things
              to see and discover here.
            </p>
            <button className="mt-3 text-xs border border-gray-100 py-2 px-4 rounded-full interstate">
              DISCOVER ELORA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
