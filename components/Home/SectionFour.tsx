import Image from "next/image";
import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

const SectionFour = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  return (
    <section className="w-full bg-center bg-cover bg-hero-sectiontwo text-primary-color ">
      <div className="container mx-auto pt-16 pb-20 flex  justify-center items-center flex-col">
        <h6 className="text-4xl text-center font-black">Backed by experts</h6>
        <div className="flex mt-5">
          <ReactSimplyCarousel
            activeSlideIndex={activeSlideIndex}
            onRequestChange={setActiveSlideIndex}
            itemsToShow={1}
            itemsToScroll={1}
            forwardBtnProps={{
              style: {
                alignSelf: "center",
                background: "#214042",
                borderRadius: "50%",
                color: "white ",
                cursor: "pointer",
                fontSize: "20px",
                height: 30,
                lineHeight: 1,
                textAlign: "center",
                width: 30,
                position: "absolute",
                right: 5,
                zIndex: 49,
              },
              children: <span>{`>`}</span>,
            }}
            backwardBtnProps={{
              style: {
                alignSelf: "center",
                background: "#214042",
                border: "1px solid black",
                borderRadius: "50%",
                color: "white ",
                cursor: "pointer",
                fontSize: "20px",
                height: 30,
                lineHeight: 1,
                textAlign: "center",
                width: 30,
                position: "absolute",
                left: 5,
                zIndex: 49,
              },
              children: <span>{`<`}</span>,
            }}
            speed={1000}
            easing="linear"
          >
            <div className="pt-20 md:mt-36 w-full relative flex">
              <div className="absolute w-32 h-32 top-5 left-[3.75rem] justify-center items-center flex">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/profile2.webp"
                    alt="image"
                    layout="fill"
                  />
                </div>
              </div>
              <div className="bg-white w-[15rem] min-w-[15rem] h-[26rem] rounded-lg">
                <h6 className="text-lg youngserif text-center pt-28 font-black">
                  Caree J. Cotwright, PhD, RDN
                </h6>
                <p className="text-sm text-center mt-4 tracking-widest">
                  Associate Professor, University of Georgia Department of
                  Nutritional Sciences
                </p>
                <p className="text-sm text-center mt-4 px-2 font-black italic">
                  I am proud to partner with Tiny Organics to build a strong
                  foundation for kids to become veggie lovers. Tiny Organics has
                  a flavorful and fun approach to develop adventurous eaters.
                </p>
              </div>
            </div>
            <div className="pt-20 md:mt-36 mx-10 w-full relative flex">
              <div className="absolute w-32 h-32 top-5 left-[3.75rem]  justify-center items-center flex">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/profile3.webp"
                    alt="image"
                    layout="fill"
                  />
                </div>
              </div>
              <div className="bg-white w-[15rem] min-w-[15rem] h-[26rem] rounded-lg">
                <h6 className="text-lg youngserif text-center pt-28 font-black">
                  Dariush Mozaffarian, MD, DrPH
                </h6>
                <p className="text-sm text-center mt-4 tracking-widest">
                  Professor at the Friedman School of Nutrition Science and
                  Policy & Tinys Scientific Advisor
                </p>
                <p className="text-sm text-center mt-4 px-2 font-black italic">
                  Tiny Organics is a member of our Food and Nutrition Innovation
                  Council and I’m proud to personally serve as Tinys scientific
                  advisor.
                </p>
              </div>
            </div>
            <div className="pt-20 md:mt-36 w-full relative flex">
              <div className="absolute  w-32 h-32 top-5 left-[3.75rem] justify-center items-center flex">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/profile1.webp"
                    alt="image"
                    layout="fill"
                  />
                </div>
              </div>
              <div className="bg-white w-[15rem] min-w-[15rem] h-[26rem] rounded-lg">
                <h6 className="text-lg youngserif text-center pt-28 font-black">
                  Priscilla Barr, MS, RDN
                </h6>
                <p className="text-sm text-center mt-4 tracking-widest">
                  Neonatal Nutritionist, NYU Langone & Tinys Nutritional Advisor
                </p>
                <p className="text-sm text-center mt-4 px-2 font-black italic">
                  There is no better time in a child’s life to make nutrition a
                  top priority than during infancy and toddlerhood: when their
                  brains are growing faster than ever.
                </p>
              </div>
            </div>
          </ReactSimplyCarousel>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
