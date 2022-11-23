import Image from "next/image";
import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

const BestSellers = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  return (
    <section className="w-full py-16">
      <h1 className="text-center text-5xl text-primary-color youngserif">
        Best Sellers
      </h1>
      <div className="w-full mt-4">
        <ReactSimplyCarousel
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={5}
          itemsToScroll={1}
          forwardBtnProps={{
            style: {
              alignSelf: "center",
              background: "transparent",
              border: "1px solid gray",
              borderRadius: "50%",
              color: "black ",
              cursor: "pointer",
              fontSize: "20px",
              height: 30,
              lineHeight: 1,
              textAlign: "center",
              width: 30,
              position: "absolute",
              right: 4,
            },
            children: <span>{`>`}</span>,
          }}
          backwardBtnProps={{
            style: {
              alignSelf: "center",
              background: "transoarent",
              border: "1px solid gray",
              borderRadius: "50%",
              color: "black ",
              cursor: "pointer",
              fontSize: "20px",
              height: 30,
              lineHeight: 1,
              textAlign: "center",
              width: 30,
              position: "absolute",
              left: 4,
            },
            children: <span>{`<`}</span>,
          }}
          speed={400}
          easing="linear"
        >
          <div className="w-80 flex items-center flex-col text-primary-color">
            <div className="relative">
              <Image
                src="/images/s2i1.webp"
                alt="menu"
                width={200}
                height={200}
              />
            </div>
            <h4 className="text-lg font-black ">Meant to Bean</h4>
            <p className="text-sm mt-2">Mango, Green Bean, Black Bean</p>
            <button className="tracking-widest shadow py-4 px-20 hover:bg-black hover:text-white  font-black supria rounded-3xl hover:opacity-95 transition ease-in-out border border-black mt-4 text-xs text-primary-color">
              LEARN MORE
            </button>
          </div>
          <div className="w-80  flex items-center flex-col text-primary-color">
            <div className="relative">
              <Image
                src="/images/s2i2.webp"
                alt="menu"
                width={200}
                height={200}
              />
            </div>
            <h4 className="text-lg font-black ">Massaman Curry</h4>
            <p className="text-sm mt-2">Green Bean, Potato, Coconut Milk</p>
            <button className="tracking-widest shadow py-4 px-20 hover:bg-black hover:text-white  font-black supria rounded-3xl hover:opacity-95 transition ease-in-out border border-black mt-4 text-xs text-primary-color">
              LEARN MORE
            </button>
          </div>
          <div className="w-80 flex items-center flex-col text-primary-color">
            <div className="relative">
              <Image
                src="/images/s2i3.webp"
                alt="menu"
                width={200}
                height={200}
              />
            </div>
            <h4 className="text-lg font-black"> Cauliflower Mac-N-Cheeze</h4>
            <p className="text-sm mt-2">
              Cauliflower, Butternut Squash, Chickpea Pasta
            </p>
            <button className="tracking-widest shadow py-4 px-20 hover:bg-black hover:text-white  font-black supria rounded-3xl hover:opacity-95 transition ease-in-out border border-black mt-4 text-xs text-primary-color">
              LEARN MORE
            </button>
          </div>
          <div className="w-80 flex items-center flex-col text-primary-color">
            <div className="relative">
              <Image
                src="/images/s2i4.webp"
                alt="menu"
                width={200}
                height={200}
              />
            </div>
            <h4 className="text-lg font-black "> Three Sisters</h4>
            <p className="text-sm mt-2">
              Mushroom, Butternut Squash, Sweet Corn
            </p>
            <button className="tracking-widest shadow py-4 px-20 hover:bg-black hover:text-white  font-black supria rounded-3xl hover:opacity-95 transition ease-in-out border border-black mt-4 text-xs text-primary-color">
              LEARN MORE
            </button>
          </div>
          <div className="w-80 flex items-center flex-col text-primary-color">
            <div className="relative">
              <Image
                src="/images/s2i5.webp"
                alt="menu"
                width={200}
                height={200}
              />
            </div>
            <h4 className="text-lg font-black "> Turn the Beet Around</h4>
            <p className="text-sm mt-2">Beet, Cabbage, Apple </p>
            <button className="tracking-widest shadow py-4 px-20 hover:bg-black hover:text-white  font-black supria rounded-3xl hover:opacity-95 transition ease-in-out border border-black mt-4 text-xs text-primary-color">
              LEARN MORE
            </button>
          </div>
          <div className="w-80 flex items-center flex-col text-primary-color">
            <div className="relative">
              <Image
                src="/images/s2i6.webp"
                alt="menu"
                width={200}
                height={200}
              />
            </div>
            <h4 className="text-lg font-black "> I Think Therefore I Yam</h4>
            <p className="text-sm mt-2">Yam, Chickpeas, Garlic, Cilantro</p>
            <button className="tracking-widest shadow py-4 px-20 hover:bg-black hover:text-white  font-black supria rounded-3xl hover:opacity-95 transition ease-in-out border border-black mt-4 text-xs text-primary-color">
              LEARN MORE
            </button>
          </div>
          <div className="w-80 flex items-center flex-col text-primary-color">
            <div className="relative">
              <Image
                src="/images/s2i7.webp"
                alt="menu"
                width={200}
                height={200}
              />
            </div>
            <h4 className="text-lg font-black "> Valencian Paella</h4>
            <p className="text-sm mt-2">Bell Pepper, Tomato, Peas, Onion</p>
            <button className="tracking-widest shadow py-4 px-20 hover:bg-black hover:text-white  font-black supria rounded-3xl hover:opacity-95 transition ease-in-out border border-black mt-4 text-xs text-primary-color">
              LEARN MORE
            </button>
          </div>
          <div className="w-80 flex items-center flex-col text-primary-color">
            <div className="relative">
              <Image
                src="/images/s2i8.webp"
                alt="menu"
                width={200}
                height={200}
              />
            </div>
            <h4 className="text-lg font-black "> Ratatouille</h4>
            <p className="text-sm mt-2">
              Tomato, Eggplant, Zucchini, Bell Pepper, Basil
            </p>
            <button className="tracking-widest shadow py-4 px-20 hover:bg-black hover:text-white  font-black supria rounded-3xl hover:opacity-95 transition ease-in-out border border-black mt-4 text-xs text-primary-color">
              LEARN MORE
            </button>
          </div>
          <div className="w-80 flex items-center flex-col text-primary-color">
            <div className="relative">
              <Image
                src="/images/s2i9.webp"
                alt="menu"
                width={200}
                height={200}
              />
            </div>
            <h4 className="text-lg font-black "> Coconut Curry</h4>
            <p className="text-sm mt-2">
              Butternut Squash, Carrot, Peas, Red Lentil
            </p>
            <button className="tracking-widest shadow py-4 px-20 hover:bg-black hover:text-white  font-black supria rounded-3xl hover:opacity-95 transition ease-in-out border border-black mt-4 text-xs text-primary-color">
              LEARN MORE
            </button>
          </div>
          <div className="w-80 flex items-center flex-col text-primary-color">
            <div className="relative">
              <Image
                src="/images/s2i10.webp"
                alt="menu"
                width={200}
                height={200}
              />
            </div>
            <h4 className="text-lg font-black "> The Wizard of Orzo</h4>
            <p className="text-sm mt-2">Zucchini, Pea, Chickpea Orzo Pasta</p>
            <button className="tracking-widest shadow py-4 px-20 hover:bg-black hover:text-white  font-black supria rounded-3xl hover:opacity-95 transition ease-in-out border border-black mt-4 text-xs text-primary-color">
              LEARN MORE
            </button>
          </div>
        </ReactSimplyCarousel>
      </div>
    </section>
  );
};

export default BestSellers;
