import Link from "next/link";
import { AiOutlineInstagram } from "react-icons/ai";
import { GrGithub } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import { TiSocialLinkedin } from "react-icons/ti";
import useLockBodyScroll from "../../../utils/hooks/useScrollLock";

interface SidebarProps {
  setShowSideBar: (value: boolean) => void;
}

const Sidebar = ({ setShowSideBar }: SidebarProps) => {
  useLockBodyScroll("hidden");
  const handleCloseMenu = () => {
    setShowSideBar(false);
  };
  return (
    <div className="w-full h-screen flex absolue top-0 ">
      <div className="bg-white h-full z-50 md:w-1/4 w-3/4  ">
        <div
          className="cursor-pointer flex justify-end pr-4 pt-10 pb-2 border-b border-gray-100"
          onClick={handleCloseMenu}
        >
          x
        </div>
        <nav className="mt-3">
          <ul>
            <li
              className="interstate text-xs py-3 flex justify-start tracking-widest pl-4 border-b border-gray-100"
              onClick={handleCloseMenu}
            >
              <Link href="/shop">SHOP</Link>
            </li>
            <li
              className="interstate text-xs py-3 flex justify-start tracking-widest pl-4 border-b border-gray-100"
              onClick={handleCloseMenu}
            >
              <Link href="/shop">CLASSES & EVENTS</Link>
            </li>
            <li
              className="interstate text-xs py-3 flex justify-start tracking-widest pl-4 flex-wrap border-b border-gray-100"
              onClick={handleCloseMenu}
            >
              <Link href="/shop">THE LAVENDER JOURNAL</Link>
            </li>
            <li
              className="interstate text-xs py-3 flex justify-start tracking-widest pl-4 border-b border-gray-100"
              onClick={handleCloseMenu}
            >
              <Link href="/shop">ABOUT</Link>
            </li>
            <li
              className="interstate text-xs py-3 flex justify-start pl-4 tracking-widest border-b border-gray-100"
              onClick={handleCloseMenu}
            >
              <Link href="/shop">CONTACTUS</Link>
            </li>
            <li
              className="interstate text-xs py-3 flex justify-start pl-4 tracking-widest border-b border-gray-100"
              onClick={handleCloseMenu}
            >
              <Link href="/login">
                <a>LOGIN</a>
              </Link>
            </li>
          </ul>
          <div className="flex flex-wrap ml-4 mt-4 ">
            <div className="px-5 py-1 flex items-center border">
              <a href="#">
                <AiOutlineInstagram />
              </a>
            </div>
            <div className="px-5 py-1 flex items-center border">
              <a href="#">
                <GrGithub />
              </a>
            </div>
            <div className="px-5 py-1 flex items-center border">
              <a href="#">
                <BsFacebook />
              </a>
            </div>
            <div className="px-5 py-1 flex items-center border">
              <a href="#">
                <TiSocialLinkedin />
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div className="h-full w-1/3 md:w-3/4 opacity-90 bg-slate-100"></div>
    </div>
  );
};

export default Sidebar;
