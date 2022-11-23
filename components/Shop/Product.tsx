import { useCart } from "context/CartContext";
import Image from "next/image";
import { ProductProps } from "types/Products";

const Product = ({ product }: ProductProps) => {
  const { basket, handleAddBasket } = useCart();

  return (
    <section className="w-full min-h-[calc(100vh-64px)] container mx-auto flex items-center justify-center ">
      <div className="flex justify-center flex-wrap items-center w-full gap-10 shadow-lg p-4">
        <div className="max-w-xs w-full ">
          <div className="aspect-w-1 aspect-h-1 relative w-full">
            <Image src={product.images[0]} alt="product" layout="fill" />
          </div>
        </div>
        <div className="max-w-sm w-full h-full flex flex-col mt-4 md:mt-0 ">
          <div className="mb-4 border-b-gray-300 border-b pb-2">
            <h1 className="text-4xl text-start">{product.title}</h1>
            <p className="text-md mt-2 ">{product.description}</p>
          </div>
          <p className="text-xs mt-2 text-yellow-400">
            Rating: {product.rating}
          </p>
          <p className="text-xs mt-2">Stock: {product.stock}</p>
          <p className="text-xs mt-2 text-green-500">${product.price}</p>
          <div className="flex justify-center">
            <button
              className="tracking-widest shadow py-4 px-10 hover:bg-black hover:text-white  font-black supria rounded-3xl hover:opacity-95 transition ease-in-out border border-black mt-8 text-xs text-primary-color"
              onClick={() => {
                handleAddBasket(product);
              }}
            >
              Add Basket
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
