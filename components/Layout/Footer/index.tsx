import {
  FacebookIconWhite,
  InstagramIconWhite,
  TwitterIconWhite,
} from "../../../assets/icons/index";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-bg-orange py-16 text-secondary-white-color ">
      <div className="container mx-auto flex  flex-wrap justify-around">
        <div>
          <h6 className="text-2xl font-black tracking-widest ml-1 mb-4">
            TINY
          </h6>
          <div className="flex space-x-4 ">
            <ul className="text-xs mr-12  ">
              <li className="m-2 hover:scale-105 transition ease-in-out ">
                <Link href="/">
                  <a>OUR MEALS</a>
                </Link>
              </li>
              <li className="m-2 hover:scale-105 transition ease-in-out">
                <Link href="/">
                  <a>WHY TINY</a>
                </Link>
              </li>
              <li className="m-2 hover:scale-105 transition ease-in-out">
                <Link href="/">
                  <a>OUR STORY</a>
                </Link>
              </li>
              <li className="m-2 hover:scale-105 transition ease-in-out">
                <Link href="/">
                  <a>GET STARTED</a>
                </Link>
              </li>
              <li className="m-2 hover:scale-105 transition ease-in-out">
                <Link href="/">
                  <a>GIFT</a>
                </Link>
              </li>
              <li className="m-2 hover:scale-105 transition ease-in-out">
                <Link href="/">
                  <a>FAQ</a>
                </Link>
              </li>
            </ul>
            <ul className="text-xs ">
              <li className="m-2 hover:scale-105 transition ease-in-out">
                <Link href="/">
                  <a>BLOG</a>
                </Link>
              </li>
              <li className="m-2 hover:scale-105 transition ease-in-out">
                <Link href="/">
                  <a>AMBASSADOR PROGRAM</a>
                </Link>
              </li>
              <li className="m-2 hover:scale-105 transition ease-in-out">
                <Link href="/">
                  <a>CONTACT US</a>
                </Link>
              </li>
              <li className="m-2 hover:scale-105 transition ease-in-out">
                <Link href="/">
                  <a>REFER A FRIEND</a>
                </Link>
              </li>
              <li className="m-2 hover:scale-105 transition ease-in-out">
                <Link href="/">
                  <a>TERMS OF SERVICE</a>
                </Link>
              </li>
              <li className="m-2 hover:scale-105 transition ease-in-out">
                <Link href="/">
                  <a>REFUND POLICY</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-xs pt-8 md:pt-12 md:mt-0 ml-0 md:ml-8 ">
          <p className="text-xl w-full">
            Get tiny updates, early access to new meals, and more.
          </p>
          <form>
            <input
              className="w-full py-2.5 px-5 bg-transparent text-white placeholder:text-white border placeholder:opacity-75 mt-4 rounded-lg text-base border-secondary-white outline-none"
              type="text"
              placeholder="Email address"
            />
            <div className="max-w-[14rem]">
              <button className="mt-5 w-full text-center py-3 hover:opacity-80 ease-in-out transition rounded-full bg-white text-bg-purple-primary font-black text-xs tracking-widest">
                SUBSCRIBE
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container mx-auto flex justify-around flex-wrap ">
        <p className="text-xs mt-8 md:4 max-w-xs tracking-widest">
          <span className="hover:opacity-80 transition ease">
            <Link href="/">
              <a>© TINY ORGANICS INC.</a>
            </Link>
          </span>
          ALL RIGHTS RESERVED
          <span className="hover:opacity-80 transition ease">
            <Link href="/">
              <a> PRIVACY POLICY</a>
            </Link>
          </span>
          <span className="hover:opacity-80 transition ease">
            <Link href="/">
              <a> TERMS & CONDITIONS</a>
            </Link>
          </span>
        </p>
        <ul className="flex items-center mt-4 w-80 md:ml-10 max-w-xs ">
          <li className="w-5 h-5 transition ease-in-out hover:scale-110 mr-3 cursor-pointer">
            <a>
              <InstagramIconWhite />
            </a>
          </li>
          <li className="w-5 h-5 transition ease-in-out hover:scale-110 mr-3 cursor-pointer">
            <a>
              <FacebookIconWhite />
            </a>
          </li>
          <li className="w-5 h-5 transition ease-in-out hover:scale-110 mr-3 cursor-pointer">
            <a>
              <TwitterIconWhite />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
