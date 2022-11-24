import LoadingPage from "../LoadingPage";
import { ArrowRight, LeftArrowIcon, TrashIcon } from "../../assets/icons/index";
import { useAuth } from "context/AuthContext";
import { useCart } from "context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useLayoutEffect } from "react";
import { FirebaseProductType } from "types/Products";

const Cart = () => {
  const { basket, status, handleDeleteBasket, handleUpdateBasket } = useCart();
  const router = useRouter();
  const { user } = useAuth();

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const buttonDisable = (cart: FirebaseProductType, value?: boolean) => {
    if (value) {
      return status ? true : false;
    } else if (cart[1].quantity <= 1) {
      return true;
    } else if (status) {
      return true;
    }
    return false;
  };

  const subTotalCalculate = () => {
    var total = 0;
    basket.map((item) => (total += item[1].product.price * item[1].quantity));
    return total;
  };

  useLayoutEffect(() => {
    !JSON.parse(localStorage.getItem("user")!) && router.push("/login");
  }, []);

  return (
    <>
      {Object.keys(user).length >= 1 ? (
        <section className="w-full min-h-[calc(100vh-64px)] py-16 bg-[#739AFF] flex justify-center">
          <div className="container mx-auto flex flex-wrap w-full py-8 bg-white rounded-lg">
            <div className="flex w-full lg:w-3/5 flex-col ">
              <div className="flex w-full border-b border-gray-100 pb-4 hover:underline hover:text-[#739AFF] transition ease-in-out  ">
                <div className="w-3 h-3 mt-[0.10rem] mr-2">
                  <Link href="/shop">
                    <a>
                      <LeftArrowIcon />
                    </a>
                  </Link>
                </div>
                <Link href="/shop">
                  <a className="text-center text-xs">Shopping Continue</a>
                </Link>
              </div>
              <div className="mt-4 text-xs">
                <p className="text-lg">Shopping cart</p>
                <p className="mt-1">
                  You have {basket.length} item in your cart
                </p>
              </div>
              <div className="lg:mt-8">
                {basket.map((cart, index) => (
                  <div
                    key={index}
                    className="w-full h-32 shadow-lg rounded-xl flex items-center mt-2 lg:mt-8 justify-around px-2"
                  >
                    <div className="hidden md:flex">
                      <Image
                        src={cart[1].product.images[0]}
                        alt=""
                        width={80}
                        height={80}
                      />
                    </div>

                    <div className="max-w-[8rem] ">
                      <p className="text-md whitespace-nowrap">
                        {cart[1].product.title}
                      </p>
                      <p className="text-xs pb-3">
                        {cart[1].product.description}
                      </p>
                    </div>
                    <div className="flex text-sm">
                      <button
                        className={`px-2 bg-[#739AFF] text-white rounded-lg cursor-pointer transition ease-in-out ${
                          buttonDisable(cart)
                            ? "hover:bg-red-500"
                            : "hover:bg-[#4DE1C1]"
                        }`}
                        disabled={buttonDisable(cart)}
                        onClick={() => handleUpdateBasket(cart, false)}
                      >
                        -
                      </button>
                      <p className="mx-1 text-[#739AFF] ">{cart[1].quantity}</p>
                      <button
                        className={`px-2 bg-[#739AFF] text-white rounded-lg cursor-pointer transition ease-in-out ${
                          buttonDisable(cart, true)
                            ? "hover:bg-red-500"
                            : "hover:bg-[#4DE1C1]"
                        }`}
                        onClick={() => handleUpdateBasket(cart, true)}
                      >
                        +
                      </button>
                    </div>
                    <p className="text-xs">
                      {formatter.format(
                        cart[1].quantity * cart[1].product.price
                      )}
                    </p>
                    <div
                      className="h-5 w-5 cursor-pointer hover:text-[#739AFF] transition ease-in-out hover:scale-125"
                      onClick={() => handleDeleteBasket(cart[0])}
                    >
                      <TrashIcon />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="max-w-sm w-96 min-w-96 container mx-auto flex justify-center mt-12">
              <div className="container pb-96 mx-auto w-full bg-[#565ABB] rounded-lg max-w-sm max-h-[40rem] flex flex-col shadow-lg">
                <div className="flex justify-between text-white font-bold ">
                  <p className="pt-6">Card Details</p>
                  <div className="pt-2 relative">
                    <Image
                      src="/images/profile1.webp"
                      alt="profile"
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
                <p className="mt-4 text-white text-sm">Card type</p>
                <div className="flex mt-2">
                  <div className="mr-4">
                    <Image
                      src="/images/mastercard.png"
                      alt="payment"
                      width={75}
                      height={55}
                    />
                  </div>
                  <div className="mr-4">
                    <Image
                      src="/images/visa.png"
                      alt="payment"
                      width={75}
                      height={55}
                    />
                  </div>
                  <div className="mr-4">
                    <Image
                      src="/images/rupay.png"
                      alt="payment"
                      width={75}
                      height={55}
                    />
                  </div>
                </div>
                <form className="mt-4 text-white">
                  <div>
                    <label className="text-xs">Name on card</label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full bg-transparent border border-ignored-primary text-xs px-5 py-3 mt-1 rounded-lg"
                    />
                  </div>
                  <div className="mt-2">
                    <label className="text-xs">Card number</label>
                    <input
                      type="text"
                      placeholder="1111 2222 3333 4444"
                      className="w-full bg-transparent border border-ignored-primary text-xs px-5 py-3 mt-1 rounded-lg"
                    />
                  </div>
                  <div className="flex w-full mt-2">
                    <div className="w-2/4">
                      <label className="text-xs">Expiration Date</label>
                      <input
                        type="text"
                        placeholder="mm/yy"
                        className="w-full bg-transparent border border-ignored-primary text-xs px-5 py-3 mt-1 rounded-lg"
                      />
                    </div>
                    <div className="w-2/4 ml-2">
                      <label className="text-xs">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full bg-transparent border border-ignored-primary text-xs px-5 py-3 mt-1 rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between text-xs mt-6">
                    <p>Subtotal</p>
                    <p>{formatter.format(subTotalCalculate())}</p>
                  </div>
                  <div className="flex justify-between text-xs mt-2">
                    <p>Shipping</p>
                    <p>{formatter.format(4)}</p>
                  </div>
                  <div className="flex justify-between text-xs mt-2">
                    <p>Total (Tax incl.)</p>
                    <p> {formatter.format(subTotalCalculate() + 4)}</p>
                  </div>
                  <div className="w-full flex items-center justify-between bg-[#4DE1C1] rounded-lg mt-10 py-4 px-4">
                    <p className="mt-[0.10rem]">${subTotalCalculate() + 4}</p>
                    <div className="flex cursor-pointer hover:scale-110 transition ease-in-out">
                      <p>Checkout</p>
                      <div className="h-4 w-4 mt-1 ml-2">
                        <ArrowRight />
                      </div>
                    </div>
                  </div>
                </form>
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

export default Cart;
