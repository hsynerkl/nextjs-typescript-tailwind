import {
  CupCakeIcon,
  RealIngredientsIcon,
  BrainIcon,
  TinyIcon,
} from "../../assets/icons/index";
import Image from "next/image";

const SectionTwo = () => {
  return (
    <section className="w-full flex flex-col items-center min-h-[calc(100vh-64px)] bg-secondary-white-color">
      <div className="container text-primary-color flex items-center flex-col pt-14">
        <div className="flex flex-col items-center">
          <h2 className="text-center md:text-5xl  text-2xl font-black">
            Meals made for your little one
          </h2>
          <p className="text-center text-lg md:text-2xl font-thin  mt-4 max-w-[calc(768px-153px)]">
            Weve built Tiny with a deep understanding of whats most important
            when it comes to feeding your child, so its one less thing you have
            to worry about.
          </p>
        </div>
      </div>
      <div className="container flex-wrap  flex md:justify-start xl:justify-center justify-center mt-8">
        <div>
          <div className="flex justify-center px-20 ">
            <RealIngredientsIcon />
          </div>
          <div className="w-64 mt-4">
            <h3 className="text-center text-2xl">Real ingredients</h3>
            <p className="text-center mt-4 text-sm">
              All our ingredients are 100% organic, plant-based, and free of the
              Big-8 allergens.
            </p>
          </div>
          <div className="flex justify-center px-20 mt-16 ">
            <CupCakeIcon />
          </div>
          <div className="w-64 mt-4 md:mb-0 mb-16">
            <h3 className="text-center text-2xl">Perfectly portioned</h3>
            <p className="text-center mt-4 text-sm">
              For babies and toddlers 6 months+
            </p>
          </div>
        </div>
        <div className="w-96 rounded-full border-3-blue mx-6  ">
          <div className="relative aspect-w-1 aspect-h-1 my-4 lg:my-0">
            <Image src="/images/food-1.webp" alt="img" layout="fill" />
          </div>
        </div>
        <div>
          <div className="flex justify-center px-20  mt-16 md:mt-0">
            <BrainIcon />
          </div>
          <div className="w-64 mt-4">
            <h3 className="text-center text-2xl">Science-backed</h3>
            <p className="text-center mt-4 text-sm">
              All Tiny meals are created by a chef and team of neonatal
              nutritionists.
            </p>
          </div>
          <div className="flex justify-center px-20 mt-16 ">
            <TinyIcon />
          </div>
          <div className="w-64 mt-4">
            <h3 className="text-center text-2xl">Delivered to you</h3>
            <p className="text-center mt-4 text-sm">
              Tiny’s meals are made fresh and shipped frozen to your door.
            </p>
          </div>
        </div>
      </div>
      <div className="justify-center  w-full flex mt-8  pb-8 md:pb-12 ">
        <div className="w-96">
          <button className="tracking-widest shadow-lg py-4 w-full font-black supria rounded-3xl hover:opacity-95 transition ease-in-out bg-secondary-color text-xs text-primary-white">
            JOIN TINY NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
