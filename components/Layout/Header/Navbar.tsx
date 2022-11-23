import {
  ChevronDownIcon,
  FacebookIcon,
  HamburgerMenuIcon,
  InstagramIcon,
  TwitterIcon,
  ShoppingCartIcon,
} from "assets/icons";
import { useCart } from "context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

const Navbar = () => {
  const [sticky, setSticky] = useState<string | null>(null);
  const [sidebarShow, setSidebarShow] = useState<boolean>(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const router = useRouter();
  const { basket } = useCart();

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 44 ? "fixed top-0" : "";
    setSticky(stickyClass);
  };

  const handlerInnerWidth = () => {
    const innerWidth = window.innerWidth;
    innerWidth >= 768 && setSidebarShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    window.addEventListener("resize", handlerInnerWidth);
    return () => {
      window.removeEventListener("scroll", isSticky);
      window.removeEventListener("resize", handlerInnerWidth);
    };
  }, []);

  return (
    <nav className={`${sticky}  w-full bg-white z-50 max-h-[4rem]`}>
      <div className="relative">
        <div className=" z-50 mx-auto container">
          <div className="justify-between flex h-16  ">
            <div className="mt-4 mb-2 mr-10 ">
              <Link href="/">
                <a>
                  <Image
                    src="/images/tiny-logo.png"
                    width={115}
                    height={37}
                    alt="logo"
                  />
                </a>
              </Link>
            </div>
            <div className="navbar container lg:flex hidden w-2/4 text-sm text-secondary-color ">
              <ul className="flex z-50 relative ">
                <li className="py-6 relative pr-4 font-black hover:scale-110 transition ease-in-out group  ">
                  <div className="flex">
                    <Link href="/">
                      <a>OUR MEALS</a>
                    </Link>
                    <div className="h-4.5 w-4 text-primary-color ml-1  flex justify-center cursor-pointer items-center">
                      <ChevronDownIcon />
                    </div>
                  </div>
                  <div className="hidden z-50 absolute top-14 bg-white group-hover:flex pt-1">
                    <div
                      className="w-28 h-36 pt-2 px-2 cursor-pointer"
                      onClick={() => router.push("/shop")}
                    >
                      <div className="relative w-24 h-24">
                        <Image
                          src="/images/img-menu-01.webp"
                          layout="fill"
                          alt="menu"
                        />
                      </div>
                      <a className="text-center text-xs mt-1 text-bg-purple-primary">
                        Best Sellers
                      </a>
                    </div>
                    <div className="w-28 h-36 pt-2 px-2 cursor-pointer">
                      <div className="relative w-24 h-24">
                        <Image
                          src="/images/img-menu-03.webp"
                          layout="fill"
                          alt="menu"
                        />
                      </div>
                      <a className="text-center text-xs mt-1 text-bg-purple-primary">
                        Tiny Meals
                      </a>
                    </div>
                    <div className="w-28 h-32 pt-2 px-2 cursor-pointer">
                      <div className="relative w-24 h-24">
                        <Image
                          src="/images/tiny-10.webp"
                          layout="fill"
                          alt="menu"
                        />
                      </div>
                      <a className="text-center text-xs mt-1  text-bg-purple-primary">
                        Tiny Toddler Meals
                      </a>
                    </div>
                  </div>
                </li>
                <li className="py-6 cursor-pointer   relative pr-4 font-black hover:scale-110 transition ease-in-out group  ">
                  <div className="flex ">
                    <Link href="/">
                      <a>WHY TINY</a>
                    </Link>
                    <div className="h-4.5 w-4 text-primary-color ml-1  flex justify-center cursor-pointer items-center">
                      <ChevronDownIcon />
                    </div>
                  </div>
                  <div className="hidden z-50 absolute top-14 bg-white group-hover:flex">
                    <div className="w-28 h-36 pt-2 px-2">
                      <div className="relative w-24 h-24">
                        <Image
                          src="/images/img-menu-05.webp"
                          layout="fill"
                          alt="menu"
                        />
                      </div>
                      <a className="text-center text-xs mt-1 text-bg-purple-primary">
                        Why Tiny
                      </a>
                    </div>
                    <div className="w-28 h-36 pt-2 px-2 cursor-pointer">
                      <div className="relative w-24 h-24">
                        <Image
                          src="/images/img-menu-01.webp"
                          layout="fill"
                          alt="menu"
                        />
                      </div>
                      <a className="text-center text-xs mt-1 text-bg-purple-primary">
                        FAQ
                      </a>
                    </div>
                    <div className="w-28 h-32 pt-2 px-2 cursor-pointer">
                      <div className="relative w-24 h-24">
                        <Image
                          src="/images/img-menu-07.webp"
                          layout="fill"
                          alt="menu"
                        />
                      </div>
                      <a className="text-center text-xs mt-1  text-bg-purple-primary">
                        Tiny Blog
                      </a>
                    </div>
                  </div>
                </li>
                <li className="py-6 relative pr-4 font-black hover:scale-110 transition ease-in-out group text-color-pink  ">
                  <div className="flex">
                    <Link href="/">
                      <a>GIFT</a>
                    </Link>
                    <div className="h-4.5 w-4 text-primary-color ml-1  flex justify-center cursor-pointer items-center">
                      <ChevronDownIcon />
                    </div>
                  </div>
                  <div className="hidden z-50 absolute top-14 bg-white group-hover:flex">
                    <div className="w-28 h-36 pt-2 px-2 cursor-pointer">
                      <div className="relative w-24 h-24">
                        <Image
                          src="/images/img-menu-08.webp"
                          layout="fill"
                          alt="menu"
                        />
                      </div>
                      <a className="text-center text-xs mt-1 text-bg-purple-primary">
                        Best Sellers Bundler
                      </a>
                    </div>
                    <div className="w-28 h-36 pt-2 px-2 cursor-pointer">
                      <div className="relative w-24 h-24">
                        <Image
                          src="/images/meal12.png"
                          layout="fill"
                          alt="menu"
                        />
                      </div>
                      <a className="text-center text-xs mt-1 text-bg-purple-primary">
                        12 Meal Gift
                      </a>
                    </div>
                    <div className="w-28 h-32 pt-2 px-2 cursor-pointer">
                      <div className="relative w-24 h-24">
                        <Image
                          src="/images/meal24.webp"
                          layout="fill"
                          alt="menu"
                        />
                      </div>
                      <a className="text-center text-xs mt-1  text-bg-purple-primary">
                        24 Meal Gift
                      </a>
                    </div>
                  </div>
                </li>
                <li className="py-6 relative pr-4 font-black hover:scale-110 transition ease-in-out group  ">
                  <div className="flex">
                    <Link href="/user">
                      <a>ACCOUNT</a>
                    </Link>
                  </div>
                </li>
                <li className="py-5 relative pr-4 font-black hover:scale-110 transition ease-in-out group  ">
                  <div className="flex">
                    <Link href="/cart">
                      <a>
                        <ShoppingCartIcon />
                      </a>
                    </Link>
                    {basket.length >= 1 && (
                      <p className="text-[0.60rem] p-2 flex items-center justify-center bg-blue-200 rounded-full w-4 h-4 text-center absolute top-3 right-1">
                        {basket.length}
                      </p>
                    )}
                  </div>
                </li>
              </ul>
            </div>
            <div className="items-center lg:flex hidden">
              <div className="h-12 w-52 flex items-center">
                <button className="tracking-widest shadow-lg py-3.5 px-10 font-black supria rounded-3xl hover:opacity-95 transition ease-in-out bg-secondary-color text-xs text-primary-white">
                  JOIN TINY NOW
                </button>
              </div>
              <div className="flex space-x-3 ">
                <div className="w-5 h-5 transition ease-in-out hover:scale-110 ">
                  <Link href="/">
                    <a className="w-full h-full">
                      <FacebookIcon />
                    </a>
                  </Link>
                </div>
                <div className="w-5 h-5 transition ease-in-out hover:scale-110 ">
                  <Link href="/">
                    <a className="w-full h-full">
                      <InstagramIcon />
                    </a>
                  </Link>
                </div>
                <div className="w-5 h-5 transition ease-in-out hover:scale-110 ">
                  <Link href="/">
                    <a className="w-full h-full">
                      <TwitterIcon />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex ml-20 lg:hidden justify-center items-center">
              <div
                className="w-5 h-5 cursor-pointer"
                onClick={() => {
                  setSidebarShow((prev) => !prev);
                }}
              >
                <HamburgerMenuIcon />
              </div>
            </div>
          </div>
          {sidebarShow && (
            <div className="w-screen absolute bg-white pt-1 border-t border-gray-100 left-0 flex justify-center items-center z-50">
              <ReactSimplyCarousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                itemsToShow={3}
                itemsToScroll={1}
              >
                <div className="w-28 h-32 pt-2 px-2">
                  <div className="relative w-24 h-24">
                    <Link href="/shop">
                      <a>
                        <Image
                          src="/images/img-menu-01.webp"
                          layout="fill"
                          alt="menu"
                        />
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link href="/shop">
                      <a className="flex justify-center items-center w-full text-xs mt-1 text-bg-purple-primary">
                        Best Sellers
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="w-28 h-32 pt-2 px-2">
                  <div className="relative w-24 h-24">
                    <Link href="/cart">
                      <a>
                        <Image
                          src="/images/img-menu-02.webp"
                          layout="fill"
                          alt="menu"
                        />
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link href="/cart">
                      <a className="flex justify-center items-center w-full text-xs mt-1 text-bg-purple-primary">
                        Cart
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="w-28 h-32 pt-2 px-2">
                  <div className="relative w-24 h-24">
                    <Link href="/user">
                      <a>
                        <Image
                          src="/images/img-menu-07.webp"
                          layout="fill"
                          alt="menu"
                        />
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link href="/user">
                      <a className="flex justify-center items-center w-full text-xs mt-1 text-bg-purple-primary">
                        Account
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="w-28 h-32 pt-2 px-2 cursor-pointer">
                  <div className="relative w-24 h-24">
                    <Image
                      src="/images/img-menu-05.webp"
                      layout="fill"
                      alt="menu"
                    />
                  </div>
                  <p className="text-center text-xs mt-1 text-bg-purple-primary">
                    Why Tiny
                  </p>
                </div>

                <div className="w-28 h-32 pt-2 px-2">
                  <div className="relative w-24 h-24">
                    <Image
                      src="/images/img-menu-08.webp"
                      layout="fill"
                      alt="menu"
                    />
                  </div>
                  <p className="text-center text-xs mt-1 text-bg-purple-primary">
                    Gift
                  </p>
                </div>
              </ReactSimplyCarousel>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
