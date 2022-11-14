import { RightArrow } from "@icons/index";

const Section7 = () => {
  return (
    <section className="w-full flex justify-center items-center bg-[#4f4285] h-48 md:h-72">
      <div className="flex flex-col text-white">
        <h3 className="text-lg text-center">
          Join our Email List for Exclusive Offers and Updates
        </h3>
        <p className="text-xs mt-4 text-center">
          Be the first to know about special offers, new product launches,
          features, events and more.
        </p>
        <div className="flex mt-4 justify-center">
          <input
            type="text"
            id="website-admin"
            className="rounded-none rounded-r-lg bg-transparent border text-white focus:outline-none  block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5   placeholder-white "
            placeholder="Enter your email"
          />
          <button className="ml-5 ">
            <RightArrow />
          </button>
        </div>
      </div>
    </section>
  );
};
export default Section7;
