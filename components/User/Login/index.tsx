import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

interface IFormInput {
  email: String;
  password: String;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const router = useRouter();
  const [users, setUsers] = useState();
  const [isUpdate, setIsUpdate] = useState(0);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    let user = users.filter(
      (user) => user.email === data.email && user.password === data.password
    )[0];
    if (user) {
      user.loggedIn = true;
      let newData = users.filter((a) => a.token !== user.token);
      newData.push(user);
      localStorage.setItem("userTKN", JSON.stringify(newData));
      router.push("/user");
    } else {
      prompt("Invalid Email or Password");
    }
  };

  const notify = (err: any) => {
    if (err.email) {
      toast("Error: Email ");
    } else if (err.password) {
      toast("Error: Password ");
    }
  };
  useEffect(() => {
    let a = JSON.parse(localStorage.getItem("userTKN"));
    setUsers(a);
    setIsUpdate((prev) => prev + 1);
  }, []);
  useEffect(() => {
    if (isUpdate > 0) {
      users.find((user) => user.loggedIn === true) && router.push("/user");
    }
  }, [isUpdate]);
  return (
    <section className="w-full  flex-col flex justify-center items-center mt-10 text-[#54565b]">
      <h1 className="text-2xl ">Login</h1>
      <form
        onKeyDown={(e) => e.key === "Enter" && notify(errors)}
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col h-screen  items-center"
      >
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
        <Link href="/signup">
          <a className="text-xs mt-4 text-purple-900">Create a new account</a>
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

export default Login;
