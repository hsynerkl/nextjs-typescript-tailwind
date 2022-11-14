import Image from "next/image";
import Navbar from "../../Navbar";
import Sidebar from "components/Layout/Sidebar";
import { SearchIcon, MenuIcon, UserIcon, ShoppingCar } from "@icons/index";
import { useState } from "react";
import useLockBodyScroll from "../../../utils/hooks/useScrollLock";
import Link from "next/link";

const Header = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  useLockBodyScroll("auto");

  const handleShow = () => {
    setShowSideBar(true);
  };

  return (
    <>
      {showSideBar && (
        <aside className="absolute top-0 h-full  drop-shadow-sm w-full z-50 transition">
          <Sidebar setShowSideBar={setShowSideBar} />
        </aside>
      )}
      <header className="w-100 h-24 md:h-48 ">
        <div>
          <div className=" bg-[#4f4285] whitespace-nowrap text-center z-10 leading-8 interstate font-light top-0 sticky text-xs  text-white items-center justify-center flex">
            <p>FREE SHIPPING ON ORDERS OVER $100 WITHIN CANADA</p>
          </div>

          <div className="pt-0 h-24 w-full justify-between items-center flex container mx-auto">
            <div className="md:flex hidden items-center pl-4">
              <SearchIcon />
            </div>
            <div
              className="md:hidden flex items-center cursor-pointer pl-4"
              onClick={handleShow}
            >
              <MenuIcon />
            </div>
            <Link href="/" passHref>
              <div className="relative w-48 md:w-72 h-full cursor-pointer ">
                <Image src="/images/purple.png" layout="fill" alt="logo" />
              </div>
            </Link>

            <div className="flex space-x-2 pr-4">
              <div className="cursor-pointer w-6 h-6">
                <Link href="/user">
                  <a>
                    <UserIcon />
                  </a>
                </Link>
              </div>
              <div className="cursor-pointer ">
                <Link href="/cart">
                  <a>
                    <ShoppingCar />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="h-20 border-b border-b-gray-100 pb-2 hidden md:flex items-center justify-center text-sm text-light p-1 leading-loose">
            <Navbar />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
