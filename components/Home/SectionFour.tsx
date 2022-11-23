import Image from "next/image";
import { ChevronDownIcon, ChevronUp, StarsIcon } from "assets/icons";
import { useState } from "react";

const SectionFive = () => {
  const [showReview, setShowReview] = useState(0);

  const handlerReview = (value: number) => {
    value === showReview ? setShowReview(0) : setShowReview(value);
  };

  return (
    <section className="w-full bg-secondary-white-color text-primary-color py-16">
      <div className="container mx-auto ">
        <div className="w-full flex justify-center lg:flex-nowrap flex-wrap">
          <div className="relative mr-9">
            <Image src="/images/s5i1.webp" alt="img" width={180} height={173} />
          </div>
          <div className="max-w-[37rem]">
            <h6 className="text-4xl font-black">
              Proud partner of Veggies Early and Often
            </h6>
            <p className="mt-2 text-base font-thin">
              Through Veggies Early and Often, Partnership for a Healthier
              America is convening industry leaders including Tiny Organics,
              health professionals, and early education partners to help improve
              the food landscape for the nation’s youngest eaters through a
              veggie-forward approach. We aim to educate parents, caregivers,
              health professionals, and baby and toddler food makers about the
              importance of early, repeated exposure to vegetables for young
              eaters.
            </p>
          </div>
          <div className="relative ml-0 lg:ml-9 mt-10 md:mt-20">
            <Image src="/images/s5i2.webp" alt="img" width={180} height={173} />
          </div>
        </div>
      </div>
      <div className="container text-border-color mx-auto mt-8 items-center flex flex-col">
        <h6 className="font-black text-lg text-primary-color">
          Parents are talking about Tiny!
        </h6>
        <div
          className="flex justify-center flex-col items-center mt-8 cursor-pointer"
          onClick={() => {
            handlerReview(1);
          }}
        >
          <div className="w-24 h-4">
            <StarsIcon />
          </div>
          <p className="mt-2 text-sm">
            Love love love the nutrients and flavors
          </p>
          <div
            className={`text-sm mt-2 ${
              showReview === 1
                ? "flex flex-col items-center transition-all ease-out"
                : "hidden"
            }`}
          >
            <p className="text-center">
              We have tried a few different toddler and baby options for food
              and Tiny Organics is definitely our favorite! Our little girl
              loves them and they are nutrient packed!! ❤️❤️❤️
            </p>
            <p className="mt-2 text-blue-400 text-xs">MORE REVIEWS</p>
          </div>
          <p className="text-xs mt-2">Tara P.</p>
          <div className="w-6 mt-4 ">
            {showReview !== 1 ? <ChevronDownIcon /> : <ChevronUp />}
          </div>
        </div>
        <div className="border-b border-border-color mt-4 w-full"></div>
        <div
          className="flex justify-center flex-col items-center mt-8 cursor-pointer"
          onClick={() => {
            handlerReview(2);
          }}
        >
          <div className="w-24 h-4">
            <StarsIcon />
          </div>
          <p className="mt-2 text-sm">Healthy twist on a classic</p>
          <div
            className={`text-sm mt-2 ${
              showReview === 2
                ? "flex flex-col items-center transition ease-in-out"
                : "hidden"
            }`}
          >
            <p>
              My daughter loves the flavor and the texture of this meal. She
              gobbles it right up and it was fun for me to give her Mac n cheese
              😊
            </p>
            <p className="mt-2 text-blue-400 text-xs">MORE REVIEWS</p>
          </div>
          <p className="text-xs mt-2">Gabrielle B.</p>
          <div className="w-6 mt-4 ">
            {showReview !== 2 ? <ChevronDownIcon /> : <ChevronUp />}
          </div>
        </div>
        <div className="border-b border-border-color mt-4 w-full"></div>
        <div
          className="flex justify-center flex-col items-center mt-8 cursor-pointer"
          onClick={() => {
            handlerReview(3);
          }}
        >
          <div className="w-24 h-4">
            <StarsIcon />
          </div>
          <p className="mt-2 text-sm">Tasty!! My 18 month old loves it!</p>
          <div
            className={`text-sm mt-2 ${
              showReview === 3 ? "flex flex-col items-center" : "hidden"
            }`}
          >
            <p>
              We tried tiny organics and we love it. It’s really convenient for
              busy moms like myself, and also an easy healthy option for my
              daughter. There are so many flavors and my daughter loves all of
              them!
            </p>
            <p className="mt-2 text-blue-400 text-xs">MORE REVIEWS</p>
          </div>
          <p className="text-xs mt-2">Heidi H.</p>
          <div className="w-6 mt-4 ">
            {showReview !== 3 ? <ChevronDownIcon /> : <ChevronUp />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
