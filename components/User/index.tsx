import LoadingPage from "../LoadingPage";
import { useAuth } from "context/AuthContext";
import Image from "next/image";
import { useRouter } from "next/router";
import { useLayoutEffect } from "react";

const User = () => {
  const { user, googleLogOut } = useAuth();
  const router = useRouter();

  useLayoutEffect(() => {
    !JSON.parse(localStorage.getItem("user")!) &&
      localStorage.setItem("user", JSON.stringify(false));
    !JSON.parse(localStorage.getItem("user") || "") && router.push("/login");
  }, []);

  return (
    <>
      {Object.keys(user).length >= 1 ? (
        <section className="w-full h-[calc(100vh-64px)] bg-[#f3f4f8]">
          <div className="container mx-auto">
            <div className="relative w-full h-48 ">
              <Image src="/images/bgset.png" alt="bg" layout="fill" />
            </div>
            <div className="relative container mx-auto">
              <div className="w-36 h-36 absolute -top-12 bg-white flex justify-center items-center rounded-full border-white border-2">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/profile4.webp"
                    layout="fill"
                    alt="profile"
                    objectFit="contain"
                    objectPosition="center"
                  />
                </div>
              </div>
              <div className="ml-40 md:ml-48 text-xl font-bold mt-3 flex flex-wrap justify-between tracking-widest text-[#232360]">
                <p>Settings</p>
                <button
                  className="bg-[#232360] text-white px-6 py-2 whitespace-nowrap rounded-md text-sm hover:opacity-80 transition ease-in-out font-bold"
                  onClick={googleLogOut}
                >
                  Log Out
                </button>
              </div>
              <ul className="flex space-x-1 sm:space-x-6 text-[#6A7181]  mt-24 text-xs font-bold border-b-black border-b pb-4">
                <li className="text-[#232360] cursor-pointer transition ease-in-out">
                  My Details
                </li>
                <li className="cursor-pointer hover:text-[#232360] transition ease-in-out">
                  Profile
                </li>
                <li className="cursor-pointer hover:text-[#232360] transition ease-in-out">
                  Password
                </li>
                <li className="cursor-pointer hover:text-[#232360] transition ease-in-out">
                  Plan
                </li>
                <li className="cursor-pointer hover:text-[#232360] transition ease-in-out">
                  Email
                </li>
                <li className="cursor-pointer hover:text-[#232360] transition ease-in-out">
                  Notifications
                </li>
              </ul>
              <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-12 mt-4 text-md font-bold  ">
                <p>First name</p>
                <p>Last name</p>
                <p>Email</p>
              </div>
              <div className="grid grid-cols-3 text-[.60rem] sm:text-xs sm:grid-cols-6 lg:grid-cols-12 mt-2 text-xs">
                <p>{user.displayName?.split(" ")[0]}</p>
                <p>{user.displayName?.split(" ")[1]}</p>
                <p>{user.email}</p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

export default User;
