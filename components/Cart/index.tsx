import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Cart = () => {
  const [productsData, setProductsData] = useState();
  const [isUpdate, setIsUpdate] = useState(0);
  const router = useRouter();

  const totalPriceF = () => {
    let value = 0;
    const priceValues = productsData?.cart.map(
      (product) => product.price * product.piece
    );
    if (priceValues !== undefined) {
      for (let i = 0; i < priceValues.length; i++) {
        value += priceValues[i];
      }
      return value;
    }
  };
  const removeProductCart = (product) => {
    const newProductsData = productsData.cart.filter(
      (data) => data.id !== product.id
    );

    const localData = JSON.parse(localStorage.getItem("userTKN"));
    const localDataFindUser = localData.find((user) => user.loggedIn === true);
    localDataFindUser.cart = newProductsData;
    const localDataFindOtherUsers = localData.find(
      (user) => user.loggedIn !== true
    );
    if (localDataFindOtherUsers) {
      let newLocalData = [localDataFindOtherUsers, localDataFindUser];
      localStorage.setItem("userTKN", JSON.stringify(newLocalData));
      setIsUpdate((prev) => prev + 1);
    } else {
      let newLocalData = [localDataFindUser];
      localStorage.setItem("userTKN", JSON.stringify(newLocalData));
      setIsUpdate((prev) => prev + 1);
    }
  };

  const addProductInput = (eValue, product) => {
    const localData = JSON.parse(localStorage.getItem("userTKN")!);
    const findUser = localData.find((user) => user.loggedIn === true);
    const [userCart] = findUser.cart.filter((a) => a.id === product.id);
    userCart.piece = eValue;
    const findOtherUsers = localData.find((user) => user.loggedIn !== true);
    if (findOtherUsers) {
      const newLocalData = [findOtherUsers, findUser];
      localStorage.setItem("userTKN", JSON.stringify(newLocalData));
      setIsUpdate((prev) => prev + 1);
    } else {
      const newLocalData = [findUser];
      localStorage.setItem("userTKN", JSON.stringify(newLocalData));
      setIsUpdate((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const usersData = JSON.parse(localStorage.getItem("userTKN")!);
    const [filteredData] = usersData.filter((user) => user.loggedIn === true);
    setProductsData(filteredData);
  }, [isUpdate]);

  useEffect(() => {
    const usersData = JSON.parse(localStorage.getItem("userTKN")!);
    const loggedIn = usersData?.find((user) => user.loggedIn === true);
    !loggedIn && router.push("/login");
    const [filteredData] = usersData.filter((user) => user.loggedIn === true);
    setProductsData(filteredData);
  }, []);

  return (
    <section className=" text-[#54565b] w-screen border-b border-gray-100">
      <div className=" p-10 md:p-20 text-3xl container mx-auto">
        <h1>Cart</h1>
        <div className="mt-4 text-xs tracking-widest border-b border-gray-100 inline py-1">
          <Link href="/shop">
            <a>Continue shopping</a>
          </Link>
        </div>
      </div>
      <div
        className={`flex-row-reverse  container mx-auto text-sm space-x-10 hidden md:flex ${
          productsData?.cart.length > 0 && "mb-4 border-b border-gray-100"
        }`}
      ></div>
      <div className="container mx-auto flex flex-col ">
        {productsData?.cart.map((product, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-3 h-40 border-b border-gray-100"
            >
              <div className="aspect-auto relative">
                <Image src={product.src} layout="fill" objectFit="contain" />
              </div>
              <div className="text-xs tracking-widest text-[#54565]">
                <p className="mt-4">{product.name}</p>
                <button
                  className="py-2 mt-4 px-4 border border-gray-100 text-xs rounded-sm tracking-widest"
                  onClick={(e) => removeProductCart(product)}
                >
                  REMOVE
                </button>
              </div>
              <div className=" ml-4 mt-4 flex flex-wrap md:flex-row md:flex-nowrap  ">
                <p className="text-xs flex justify-center ">
                  Price: ${product.price}
                </p>
                <div className="w-full ">
                  <p className="text-xs">Quantity</p>
                  <input
                    type="number"
                    min="1"
                    max="30"
                    onChange={(e) => {
                      addProductInput(e.target.value, product);
                    }}
                    defaultValue={product.piece}
                    className="text-xs border border-gray-100 w-3/6 mt-3 p-2 focus:border-black focus:border"
                  />
                </div>
                <p className="text-xs ">
                  Total: ${product.piece * product.price}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {productsData?.cart.length > 0 && (
        <div className="container mx-auto grid grid-cols-2 mb-10 mt-4 tracking-widest">
          <div>
            <label className="text-xs tracking-widest ">ORDER NOTE</label>
            <textarea className="block min-h-[3rem] w-full px-3 py-1.5 text-xs  border border-solid border-gray-300 rounded transition ease-in-out m-0 min-h-10 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none"></textarea>
          </div>
          <div>
            <div className="flex pl-4 md:pl-20 justify-between text-xs tracking-widest ">
              <p>SUB TOTAL</p>
              <p>${totalPriceF()}</p>
            </div>
            <div className="w-full text-xs h-full flex mt-4 flex-col justify-start items-end">
              <p className="text-xs inline">
                Shipping, taxes, and discount codes calculated at checkout.
              </p>
              <div className="w-full flex justify-end items-cemter space-x-2">
                <button className="py-2 mt-4 px-4 border border-gray-100 text-xs rounded-sm tracking-widest">
                  UPDATE CART
                </button>
                <button className="py-2 mt-4 px-4 border text-white bg-[#4F4285] border-gray-100 text-xs rounded-sm tracking-widest">
                  CHECK OUT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
