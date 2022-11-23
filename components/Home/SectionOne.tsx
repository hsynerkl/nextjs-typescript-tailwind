import Image from "next/image";
import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

const SectionOne = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  return (
    <section className="w-full relative flex flex-col justify-center items-center md:items-start bg-hero-sectionone bg-cover bg-center">
      <div className="container mx-auto flex justify-center md:block pt-8 md:pt-20">
        <div className="md:max-w-md min-h-[calc(100vh-16rem)] text-primary-color flex flex-col items-center md:items-start ">
          <h1 className="md:text-[5rem] text-3xl leading-none text-center md:text-start youngserif font-black">
            Raising An Adventurous Eater
          </h1>
          <p className="mt-4 text-center md:text-start text-sm md:text-2xl font-thin">
            Fresh, organic, ready-to-eat baby and toddler meals, delivered.
          </p>
          <p className="mt-4 text-center md:text-start text-sm md:text-2xl font-thin">
            Meals starting at
            <span className="font-black text-black"> $4.66 </span>
            per meal
          </p>
          <div>
            <button className="tracking-widest shadow-lg py-3.5 px-20 font-black supria mt-4 rounded-3xl hover:opacity-95 transition ease-in-out bg-secondary-color text-xs text-primary-white whitespace-nowrap">
              JOIN TINY NOW
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-bg-purple-primary h-24 flex justify-center items-center">
        <ul className="container w-full h-full justify-center items-center space-x-2 hidden md:flex">
          <li className="mr-1">
            <Image
              src="/images/thenewyork.webp"
              width={120}
              height={125}
              alt="icon"
            />
          </li>
          <li className="mr-1">
            <Image
              src="/images/forbes.webp"
              width={120}
              height={125}
              alt="icon"
            />
          </li>
          <li className="mr-1">
            <Image
              src="/images/tc-logo.webp"
              width={120}
              height={125}
              alt="icon"
            />
          </li>
          <li className="mr-1">
            <Image
              src="/images/fatherly.webp"
              width={120}
              height={125}
              alt="icon"
            />
          </li>
          <li className="mr-1">
            <Image src="/images/Inc.webp" width={120} height={125} alt="icon" />
          </li>
          <li className="mr-1">
            <Image
              src="/images/romper.webp"
              width={120}
              height={125}
              alt="icon"
            />
          </li>
        </ul>
        <div className="container w-full h-full justify-center items-center md:hidden flex ">
          <ReactSimplyCarousel
            activeSlideIndex={activeSlideIndex}
            onRequestChange={setActiveSlideIndex}
            itemsToShow={1}
            itemsToScroll={1}
            autoplay={true}
            autoplayDelay={750}
          >
            <div className="w-24 h-24">
              <div className="relative w-full h-full">
                <Image src="/images/romper.webp" alt="icon" layout="fill" />
              </div>
            </div>
            <div className="w-24 h-24">
              <div className="relative w-full h-full">
                <Image src="/images/thenewyork.webp" alt="icon" layout="fill" />
              </div>
            </div>
            <div className="w-24 h-24">
              <div className="relative w-full h-full">
                <Image src="/images/Inc.webp" alt="icon" layout="fill" />
              </div>
            </div>
            <div className="w-24 h-24">
              <div className="relative w-full h-full">
                <Image src="/images/forbes.webp" alt="icon" layout="fill" />
              </div>
            </div>
            <div className="w-24 h-24">
              <div className="relative w-full h-full">
                <Image src="/images/fatherly.webp" alt="icon" layout="fill" />
              </div>
            </div>
            <div className="w-24 h-24">
              <div className="relative w-full h-full">
                <Image src="/images/tc-logo.webp" alt="icon" layout="fill" />
              </div>
            </div>
          </ReactSimplyCarousel>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
