import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const User = () => {
  const router = useRouter();
  const [user, setUser] = useState();
  const [users, setUsers] = useState();
  const [isUpdate, setIsUpdate] = useState(0);

  const logOutF = () => {
    let [filteredUser] = users.filter((user) => user.loggedIn === true);
    filteredUser.loggedIn = false;
    let newData = users.filter((user) => user.token !== filteredUser.token);
    newData.push(filteredUser);
    localStorage.setItem("userTKN", JSON.stringify(newData));
    router.push("/");
  };

  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem("userTKN")));
    setIsUpdate((prev) => prev + 1);
  }, []);

  useEffect(() => {
    if (isUpdate > 0) {
      let loggedInStatus = users?.find((user) => user.loggedIn === true);
      setUser(loggedInStatus);
      !loggedInStatus && router.push("/signup");
    }
  }, [isUpdate]);

  return (
    <section className="w-screen border-b-gray-100 border-b text-[#54565b] pb-36">
      <div className="mt-4 grid grid-cols-2 container mx-auto">
        <div className="grid grid-cols-1 mx-6 ">
          <div>
            <h1 className="mt-10 text-3xl">My Account</h1>
            <p className="mt-10 text-xl">Order History</p>
            <p className="text-xs my-5">You havent placed any orders yet.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 mx-6">
          <div className="mt-10 flex flex-col items-end">
            <button
              className="py-2 px-1 md:w-1/4 border border-gray-100 text-xs rounded-sm tracking-widest"
              onClick={logOutF}
            >
              LOG OUT
            </button>
          </div>
          <h2 className="mt-16 md:mt-8 text-xl">Account details</h2>
          <p className="mt-2 text-xs">
            {user?.firstName + " " + user?.lastName}
          </p>
          <p></p>
        </div>
      </div>
    </section>
  );
};

export default User;
