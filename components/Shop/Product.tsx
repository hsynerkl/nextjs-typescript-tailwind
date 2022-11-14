import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import { useCatalogContext } from "context/catalogContext";
import { useEffect } from "react";
interface DataProps {
  data: {
    id: number;
    name: string;
    price: number;
    desc: string;
    src: string;
  }[];
}
const Product = ({ data }: DataProps) => {
  const { addCart, toastShow } = useCatalogContext();

  useEffect(() => {
    toastShow > 0 && toast("Already added to cart.");
  }, [toastShow]);
  return (
    <section className="h-screen w-full mx-auto container mt-5 md:mt-0 md:flex items-center flex-wrap">
      <div className="w-full md:w-3/5 h-2/5  md:h-3/5 relative">
        <Image src={data[0].src} layout="fill" alt={data[0].name} />
      </div>
      <div className="flex items-center justify-center flex-col w-full md:w-2/5 md:h-full">
        <div className="w-full container mx-auto ">
          <h1 className="text-2xl text-[#54565b]">{data[0].name}</h1>
          <p className="text-[#1c1d1d] mt-2 pb-5 border-b border-b-gray-100 text-xs text-start">
            ${data[0].price}
          </p>
          <button
            className="p-4 bg-[#4f4285] text-xs w-full text-white mt-10 rounded"
            onClick={() => {
              addCart(data[0]);
            }}
          >
            ADD TO CART
          </button>
          <p className="text-xs text-[#54565b] mt-10">{data[0].desc}</p>
        </div>
      </div>
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

export default Product;
