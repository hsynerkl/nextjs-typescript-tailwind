import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-full relative bg-gradient-to-r from-slate-300 to-bg-purple-primary min-h-[calc(100vh-64px)] justify-center flex flex-col items-center text-white text-6xl ">
      <p className="font-black">Oops!</p>
      <p className="text-sm mt-4">404 - PAGE NOT FOUND</p>
      <div className="flex justify-center mt-4 ">
        <Link href="/">
          <a className="text-xs hover:scale-110 transition ease-in-out  ">
            Go Home.
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
