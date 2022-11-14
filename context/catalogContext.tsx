import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

interface ProductProps {
  id: string;
  name: string;
  price: number;
  image: string;
  desc: string;
}

export const CatalogContext = createContext({
  selectedOption: "",
  productsFilterF: () => {},
  selectOptions: [],
  setSelectedOption: () => {},
  addCart: () => {},
  toastShow: 0,
});

export const CatalogContextProvider = ({ children }: any) => {
  const [selectedOption, setSelectedOption] = useState("1");
  const [toastShow, setToastShow] = useState(0);
  const selectOptions = [
    { id: 1, name: "Price, low to high " },
    { id: 2, name: "Price, high to low " },
  ];
  const router = useRouter();
  const productsFilterF = (data: any) => {
    if (selectedOption === "1") {
      return data.sort((a: any, b: any) => a.price - b.price)[0];
    } else {
      return data.sort((a: any, b: any) => b.price - a.price)[0];
    }
  };
  const addCart = (product: ProductProps) => {
    const localData = JSON.parse(localStorage.getItem("userTKN"));
    const [filteredUser] = localData.filter((user) => user.loggedIn === true);
    if (filteredUser === undefined) {
      router.push("/signup");
    } else {
      const checkProduct = filteredUser.cart.filter(
        (data) => data.id === product.id
      );
      if (checkProduct.length > 0) {
        setToastShow((prev) => prev + 1);
      } else {
        filteredUser.cart.push({ ...product, piece: 1 });
        const newLocalData = localData.filter((user) => user.loggedIn !== true);
        newLocalData.push(filteredUser);
        localStorage.setItem("userTKN", JSON.stringify(newLocalData));
        router.replace("/cart");
      }
    }
  };

  const data = {
    selectOptions,
    setSelectedOption,
    selectedOption,
    productsFilterF,
    addCart,
    toastShow,
  };
  return (
    <CatalogContext.Provider value={data}>{children}</CatalogContext.Provider>
  );
};

export const useCatalogContext = () => useContext(CatalogContext);
