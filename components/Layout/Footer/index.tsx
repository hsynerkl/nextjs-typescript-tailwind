import Image from "next/image";
import Link from "next/link";
import {
  AmericanExpressIcon,
  ApplePay,
  DinersClub,
  DiscoverIcon,
  GpayIcon,
  MasterCardIcon,
  DisneyPayIcon,
  VisaIcon,
  InstagramIcon,
  GithubIcon,
} from "@icons/index";
const Footer = () => {
  return (
    <footer className="h-[22rem] w-full">
      <div className=" flex flex-col md:flex-row items-center md:items-start flex-wrap justify-center md:justify-between mt-12 md:ml-8 md:space-x-24  ">
        <div className="ml-5 md:ml-14 w-20 h-24 mt-0 md:mt-6 relative">
          <Image src="/images/terreminlogo.png" alt="logo" layout="fill" />
        </div>
        <div className="mt-4 flex flex-row justify-center items-center md:mt-0">
          <ul className="mt-6 text-xs flex justify-center items-center md:justify-start md:items-start flex-col">
            <li className=" text-lg trackig-widest ">NAVIGATE</li>
            <li className="mt-4">
              <Link href="/">Our Story</Link>
            </li>
            <li className="mt-4">
              <Link href="/">FAQs</Link>
            </li>
            <li className="mt-4">
              <Link href="/">Employment</Link>
            </li>
          </ul>
        </div>
        <div className="mt-4 flex flex-row justify-center items-center md:mt-0">
          <ul className="mt-6 text-xs flex justify-center items-center md:justify-start md:items-start flex-col">
            <li className=" text-lg trackig-widest ">THE LAVENDER JOURNAL</li>
            <li className="mt-4">
              <Link href="/">Recipes</Link>
            </li>
            <li className="mt-4">
              <Link href="/">DIY</Link>
            </li>
            <li className="mt-4">
              <Link href="/">Wellness</Link>
            </li>
          </ul>
        </div>
        <div className="mt-4 flex flex-row justify-center items-center md:mt-0">
          <ul className="mt-6 text-xs flex flex-col justify-center items-center md:justify-start md:items-start">
            <li className=" text-lg trackig-widest ">POLICIES</li>
            <li className="mt-4">
              <Link href="/">Shipping & Return Policy</Link>
            </li>
            <li className="mt-4">
              <Link href="/">Terms of Service</Link>
            </li>
            <li className="mt-4">
              <Link href="/">Privacy Policy</Link>
            </li>
            <li className="mt-4">
              <Link href="/">Liability Notice</Link>
            </li>
          </ul>
        </div>
        <div className="max-w-xs mt-4 md:mt-2 -col mb-4">
          <div className="relative mt-4 mr-5 md:mr-14">
            <p className="text-xs text-center md:text-start">
              SIGN UP TO STAY UP-TO-DATE ON EXCLUSIVE OFFERS AND UPDATES.
            </p>
            <div className="flex absolute bottom-3 left-0 items-center pl-3 pointer-events-none ">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <input
              type="email"
              id="input-group-1"
              className="bg-transparent border-b border-b-black mt-4 text-black placeholder-black text-xs  outline-none block w-full pl-10 p-2.5 "
              placeholder="Enter your email"
            />
          </div>
          <div className="mt-4">
            <ul className="flex space-x-1">
              <li>
                <InstagramIcon color="black" />
              </li>
              <li>
                <GithubIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-4 md:mt-14 flex justify-center items-center">
        <ul className="flex">
          <li>
            <AmericanExpressIcon />
          </li>
          <li>
            <ApplePay />
          </li>
          <li>
            <DinersClub />
          </li>
          <li>
            <DiscoverIcon />
          </li>
          <li>
            <GpayIcon />
          </li>
          <li>
            <MasterCardIcon />
          </li>
          <li>
            <DisneyPayIcon />
          </li>
          <li>
            <VisaIcon />
          </li>
        </ul>
      </div>
      <div className="text-xs w-full mt-5 ">
        <p className="text-center">
          © 2022 Terre Bleu All imagery, graphics, copy, phrases and names
          including but not limited to The Yellow Door and all branding are
          intellectual property and protected trademarks and copyrights of Terre
          Bleu Lavender Farm Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
