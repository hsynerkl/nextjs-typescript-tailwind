import GoogleButton from "react-google-button";
import { useAuth } from "context/AuthContext";
import { useLayoutEffect } from "react";
import { useRouter } from "next/router";
import LoadingPage from "@components/LoadingPage";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  const { googleSignIn, user } = useAuth();
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    googleSignIn();
  };

  useLayoutEffect(() => {
    !JSON.parse(localStorage.getItem("user")!) &&
      localStorage.setItem("user", JSON.stringify(false));
    JSON.parse(localStorage.getItem("user") || "") && router.push("/user");
  }, []);
  return (
    <>
      {Object.keys(user).length >= 1 ? (
        <LoadingPage />
      ) : (
        <section className="w-full min-h-[calc(100vh-64px)] flex ">
          <div className="hidden md:block relative w-3/5">
            <Image src="/images/login.png" layout="fill" alt="login" />
          </div>
          <div className="flex items-center md:justify-start justify:center flex-col py-16 w-max-content w-full md:w-2/5 ">
            <div className="max-w-sm container mx-auto">
              <div className="flex justify-start">
                <Image
                  src="/images/grouplogin.png"
                  alt="logo"
                  width={72}
                  height={72}
                />
              </div>
              <p className="mt-10 flex justify-center text-login-primary font-bold text-3xl">
                Login to your Account
              </p>
              <p className="mt-4 text-ignored-primary text-center">
                See what is going on with your business
              </p>
              <div className="w-full mt-8 flex justify-center">
                <GoogleButton onClick={handleGoogleSignIn} />
              </div>
              <p className="text-center my-8 text-ignored-primary text-xs">
                <span className="tracking-widest mr-1">------------</span>
                or Sign in with Email
                <span className="tracking-widest ml-1">------------</span>
              </p>
              <form className="text-ignored-primary">
                <div>
                  <label className="text-xs">Email</label>
                  <input
                    type="text"
                    className="w-full py-2 border border-ignored-primary rounded-md px-2 focus:outline-purple-primary text-purple-primary "
                    placeholder="mail@abc.com"
                  />
                </div>
                <div className="mt-4">
                  <label className="text-xs">Password</label>
                  <input
                    type="password"
                    className="w-full py-2 border border-ignored-primary rounded-md px-2 focus:outline-purple-primary text-purple-primary"
                    placeholder="asd123"
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs">
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-1" />
                    <label> Remember Me</label>
                  </div>
                  <Link href="/">
                    <a className="text-purple-primary hover:underline transition ease-in-out">
                      Forgot Password?
                    </a>
                  </Link>
                </div>
                <button className="w-full py-2 bg-purple-primary text-white mt-8 rounded-lg font-bold shadow-lg hover:opacity-80 transition ease-in-out">
                  Login
                </button>
              </form>
              <p className="mt-10 text-xs text-ignored-primary text-center ">
                Not Registered Yet?
                <span className="text-purple-primary ml-2 hover:underline transition ease-in-out cursor-pointer">
                  Create an Account
                </span>
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Login;
