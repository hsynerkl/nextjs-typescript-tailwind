import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { ProductsProps, IProduct } from "../../types/Products";
import SearchBar from "./SearchBar";

const Shop = ({ products }: ProductsProps) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedData, setSearchedData] = useState<IProduct[]>([]);

  const getSearchedProduct = () => {
    if (searchQuery != "") {
      const searchedQuery = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchedData(searchedQuery);
    } else {
      setSearchedData([]);
    }
  };

  useEffect(() => {
    searchQuery == "" && setSearchedData([]);
  }, [searchQuery]);

  return (
    <section className="w-full min-h-[calc(100vh-64px)] ">
      <div className="w-full bg-banner bg-right md:bg-center bg-cover ">
        <div className="w-full text-primary-color flex justify-center flex-col container mx-auto items-center py-24">
          <h1 className=" text-3xl md:text-6xl font-black">Best Sellers</h1>
          <p className="max-w-sm text-md md:text-xl text-center mt-4">
            Introduce your little one to their first
            <span className="text-lg md:text-2xl font-black">
              {" "}
              100 flavors{" "}
            </span>
            to raise a healthy eater for life
          </p>
        </div>
      </div>
      <div className="w-full bg-bg-orange py-8">
        <SearchBar
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
          getSearchedProduct={getSearchedProduct}
          searchedData={searchedData}
        />
      </div>

      <div className="container mx-auto flex flex-wrap py-8 justify-center gap-10">
        {searchedData?.length >= 1 ? (
          <>
            {searchedData.map((product) => {
              return (
                <div
                  className="flex justify-center items-center flex-col max-w-sm shadow-lg p-4 rounded-lg"
                  key={product.id}
                >
                  <div className="w-5/6">
                    <div className="aspect-w-1 aspect-h-1 relative">
                      <Image
                        src={product.images[0]}
                        alt="product"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                  <p className="mt-4 text-sm">{product.title}</p>
                  <p className="mt-2 text-xs">${product.price}</p>
                  <button
                    className="tracking-widest shadow py-4 px-20 hover:bg-black hover:text-white font-black supria rounded-3xl hover:opacity-95 transition ease-in-out border border-black mt-4 text-xs text-primary-color"
                    onClick={() => {
                      router.push(`/shop/${product.id}`);
                    }}
                  >
                    LEARN MORE
                  </button>
                </div>
              );
            })}
          </>
        ) : (
          <>
            {products.map((product) => {
              return (
                <div
                  className="flex justify-center items-center flex-col max-w-sm shadow-lg p-4 rounded-lg"
                  key={product.id}
                >
                  <div className="w-5/6">
                    <div className="aspect-w-1 aspect-h-1 relative">
                      <Image
                        src={product.images[0]}
                        alt="product"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                  <p className="mt-4 text-sm">{product.title}</p>
                  <p className="mt-2 text-xs">${product.price}</p>
                  <button
                    className="tracking-widest shadow py-4 px-20 hover:bg-black hover:text-white font-black supria rounded-3xl hover:opacity-95 transition ease-in-out border border-black mt-4 text-xs text-primary-color"
                    onClick={() => {
                      router.push(`/shop/${product.id}`);
                    }}
                  >
                    LEARN MORE
                  </button>
                </div>
              );
            })}
          </>
        )}
      </div>
    </section>
  );
};

export default Shop;
