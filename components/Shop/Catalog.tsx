import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { useCatalogContext } from "../../context/catalogContext";

interface DataProps {
  data: {
    id: number;
    name: string;
    price: number;
    desc: string;
    src: string;
  }[];
}

const Catalog = ({ data }: DataProps) => {
  const router = useRouter();
  const { selectedOption, productsFilterF } = useCatalogContext();
  const [isUpdate, setIsUpdate] = useState();

  useEffect(() => {
    setIsUpdate(productsFilterF(data));
  }, [selectedOption]);

  return (
    <div className="w-full flex-wrap flex mt-10">
      {data?.map((item) => {
        return (
          <div
            className="h-96 w-full md:w-3/12 cursor-pointer hover-effect-custom"
            key={item.id}
            onClick={() => {
              router.replace(`/shop/${item.id}`);
            }}
          >
            <div className="mr-2 aspect-square relative">
              <Image src={item.src} layout="fill" alt={item.name} />
            </div>
            <p className="text-sm text-center text-[#54565b]">{item.name}</p>
            <p className="text-xs mt-2 text-center text-[#54565b]">
              from ${item.price}
            </p>
            <p className="text-xs mt-2 text-center text-[#54565b] "></p>
          </div>
        );
      })}
    </div>
  );
};

export default Catalog;
