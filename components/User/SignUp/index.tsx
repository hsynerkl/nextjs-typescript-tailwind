import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

interface IFormInput {
  firstName: String;
  lastName: String;
  email: String;
  password: String;
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const router = useRouter();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    let localData = JSON.parse(localStorage.getItem("userTKN"));
    localData.push({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      token: +new Date(),
      loggedIn: true,
      cart: [],
    });
    console.log(localData);
    localStorage.setItem("userTKN", JSON.stringify(localData)),
      router.push("/user");
  };

  const notify = (err: any) => {
    if (err.firstName) {
      toast("Error: Name ");
    } else if (err.lastName) {
      toast("Error: Last Name ");
    } else if (err.email) {
      toast("Error: Email ");
    } else if (err.password) {
      toast("Error: Password ");
    }
  };

  return (
    <section className="w-full h-72 md:h-96 flex-col flex justify-center items-center mt-10 text-[#54565b]">
      <h1 className="text-2xl ">Create Account</h1>
      <form
        onKeyDown={(e) => e.key === "Enter" && notify(errors)}
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col h-screen mt-4 items-center"
      >
        <div className="flex w-full justify-between">
          <label className="w-1/3 text-sm whitespace-nowrap flex items-center">
            Name
          </label>
          <input
            {...register("firstName", {
              pattern: /^[A-Za-z]+$/i,
              required: true,
              maxLength: 20,
            })}
            className="form-control block w-2/3 text-xs px-2 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-gray-100 focus:outline-none"
          />
        </div>
        <div className="flex w-full justify-between mt-4">
          <label className="w-1/3 text-sm whitespace-nowrap flex items-center ">
            Last Name
          </label>
          <input
            {...register("lastName", {
              pattern: /^[A-Za-z]+$/i,
              required: true,
            })}
            className="form-control block w-2/3 text-xs px-2 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-gray-100 focus:outline-none"
          />
        </div>
        <div className="flex w-full justify-between mt-4">
          <label className="text-sm whitespace-nowrap flex items-center">
            E-mail
          </label>
          <input
            {...register("email", {
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              required: true,
            })}
            className="form-control block w-2/3 text-xs px-2 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-gray-100 focus:outline-none"
          />
        </div>
        <div className="flex w-full justify-between mt-4 relative">
          <label className="text-sm whitespace-nowrap flex items-center">
            Password
          </label>
          <input
            {...register("password", {
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
              required: true,
            })}
            className="form-control block w-2/3 text-xs px-2 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-gray-100 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          onClick={() => {
            notify(errors);
          }}
          className="bg-[#4f4285] px-4 py-2 text-white rounded-lg mt-4 text-xs"
        >
          Submit
        </button>
        <Link href="/login">
          <a className="text-xs mt-4 text-purple-900">
            Do you already have an account?
          </a>
        </Link>
      </form>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default SignUp;
