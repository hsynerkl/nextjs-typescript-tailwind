import { QuoteIcon } from "@icons/index";

const Section5 = () => {
  return (
    <section className="mt-[5rem] container mx-auto">
      <h3 className="text-2xl text-[#54565b] text-center">Testimonials</h3>
      <div className=" flex flex-nowrap ">
        <div className="flex flex-col justify-center items-center w-2/6 mt-10 mb-4">
          <QuoteIcon />
          <h3 className="text-sm text-[#54565b] text-center mt-4">
            LAVENDER LIP BALM
          </h3>
          <p className="text-xs text-[#54565b] text-center mt-4">
            My go to lip balm especially in the colder months. A small swipe
            goes a long way and lasts a long time. I love it.
          </p>
          <p className="text-xs mt-2">- Angelina</p>
        </div>
        <div className="flex flex-col justify-center items-center w-2/6 mt-10 mb-4">
          <QuoteIcon />
          <h3 className="text-sm text-[#54565b] text-center mt-4">
            LAVENDER NECK PILLOW
          </h3>
          <p className="text-xs text-[#54565b] text-center mt-3">
            I put this across my shoulders after a long day at work. The smell
            and pressure work so well on aching muscles, I would definitely
            recommend this pillow!
          </p>
          <p className="text-xs mt-2">- Bahar</p>
        </div>
        <div className="flex flex-col justify-center items-center w-2/6 mt-10 mb-4">
          <QuoteIcon />
          <h3 className="text-sm text-[#54565b] text-center mt-4">
            LAVENDER SUGAR SCRUB
          </h3>
          <p className="text-xs text-[#54565b] text-center mt-3">
            This scrub is so lovely! Love the way it leaves my skin silky and my
            bathroom smelling like lavender.
          </p>
          <p className="text-xs mt-2">- Aisha</p>
        </div>
      </div>
    </section>
  );
};

export default Section5;
