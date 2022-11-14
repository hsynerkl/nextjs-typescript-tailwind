import Link from "next/link";

const Navbar = () => {
  return (
    <ul className="flex flex-wrap justify-center text-[#54565b]  interstate tracking-widest">
      <li className="p-3 text-lg hover-effect-custom">
        <Link href="/shop">
          <a>SHOP</a>
        </Link>
      </li>
      <li className="p-3 text-lg hover-effect-custom">
        <Link href="/">CLASSES & EVENTS</Link>
      </li>
      <li className="p-3 text-lg hover-effect-custom">
        <Link href="/">THE LAVENDAR JOURNAL </Link>
      </li>
      <li className="p-3 text-lg hover-effect-custom">
        <Link href="/">ABOUT</Link>
      </li>
      <li className="p-3 text-lg hover-effect-custom">
        <Link href="/">CONTACT US</Link>
      </li>
    </ul>
  );
};

export default Navbar;
