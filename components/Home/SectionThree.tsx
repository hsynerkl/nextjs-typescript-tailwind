import Image from "next/image";

const SectionThree = () => {
  return (
    <section className="bg-color-yellow w-full flex items-center flex-col ">
      <div className="flex flex-col items-center w-full container mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="w-[37rem] md:max-w-md lg:max-w-[37rem] max-w-xs mt-12  ">
            <div className="relative aspect-w-16 mx-4 aspect-h-9 lg:my-0 ">
              <Image
                src="/images/s3i1.webp"
                alt="img"
                layout="fill"
                className="rounded-2xl"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="max-w-sm flex justify-center items-center flex-col pl-0 md:pl-4">
            <h5 className="text-5xl youngserif mt-4 text-center md:text-start text-primary-color">
              Tell us about your little one
            </h5>
            <p className="mt-2 text-center md:text-start">
              Answer a few quick questions about your little one so we can show
              you their recommended meals.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap flex-row-reverse justify-center">
          <div className="w-[37rem] md:max-w-md lg:max-w-[37rem] max-w-xs mt-12  ">
            <div className="relative aspect-w-16 mx-4 aspect-h-9 lg:my-0 ">
              <Image
                src="/images/s3i2.webp"
                alt="img"
                layout="fill"
                className="rounded-2xl"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="max-w-sm flex justify-center items-center flex-col pl-0 md:pl-4 ">
            <h5 className="text-5xl mt-4 youngserif text-center md:text-start text-primary-color">
              Pick your meal plan
            </h5>
            <p className="mt-2 text-center md:text-start">
              Choose which recipes you’d like for your little one and pick how
              many you’d like to receive.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-[37rem] md:max-w-md lg:max-w-[37rem] max-w-xs mt-12  ">
            <div className="relative aspect-w-16 mx-4 aspect-h-9 lg:my-0 ">
              <Image
                src="/images/s3i3.webp"
                alt="img"
                layout="fill"
                className="rounded-2xl"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="max-w-sm flex justify-center items-center flex-col pl-0 md:pl-4">
            <h5 className="text-5xl mt-4 youngserif text-center md:text-start text-primary-color">
              Unpack, warm up, dig in!
            </h5>
            <p className="mt-2 text-center md:text-start">
              Your Tiny Meals arrive at your door frozen. Just warm them up and
              they’re ready for your little one.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <button className="tracking-widest shadow-lg py-3.5 px-20 font-black my-10 supria rounded-3xl hover:opacity-95 transition ease-in-out bg-secondary-color text-xs text-primary-white">
          JOIN TINY NOW
        </button>
      </div>
    </section>
  );
};

export default SectionThree;
