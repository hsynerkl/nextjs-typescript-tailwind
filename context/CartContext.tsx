import { createContext, useContext, useEffect, useState } from "react";
import { FirebaseProductType, IProduct } from "types/Products";
import { useAuth } from "./AuthContext";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

interface CartContextType {
  status: boolean;
  basket: FirebaseProductType[];
  setBasket: React.Dispatch<React.SetStateAction<FirebaseProductType[]>>;
  handleAddBasket: (product: IProduct) => void;
  handleDeleteBasket: (id: string) => void;
  handleUpdateBasket: (product: any, value: boolean) => void;
}

const CartContext = createContext<CartContextType>({} as CartContextType);

export const CartContextProdiver: React.FC = ({ children }) => {
  const { user } = useAuth();
  const [basket, setBasket] = useState<FirebaseProductType[]>([]);
  const [isUpdate, setIsUpdate] = useState(0);
  const [status, setStatus] = useState(false);
  const router = useRouter();

  const handleUpdateBasket = async (product: any, value: boolean) => {
    const id = product[0];
    const model = {
      ...product[1],
      quantity: value ? product[1].quantity + 1 : product[1].quantity - 1,
      userId: user.uid,
    };

    try {
      setStatus(true);
      await fetch(
        `https://tinyapp-f14ce-default-rtdb.europe-west1.firebasedatabase.app/cart/${id}.json`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(model),
        }
      );
      setStatus(false);
    } catch (e) {
      console.log(e);
    }
    setIsUpdate((prev) => prev + 1);
  };

  const handleAddBasket = async (product: IProduct) => {
    const filteredval = basket.filter(
      (item) => item[1].product.title === product.title
    );
    if (filteredval.length >= 1) {
      toast("Already in the cart");
    } else {
      await fetch(
        "https://tinyapp-f14ce-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: user.uid,
            product,
            quantity: 1,
          }),
        }
      ).then((res) => res.json());
      setIsUpdate((prev) => prev + 1);
      router.push("/cart");
    }
  };

  const handleDeleteBasket = async (id: string) => {
    await fetch(
      `https://tinyapp-f14ce-default-rtdb.europe-west1.firebasedatabase.app/cart/${id}.json`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );
    setIsUpdate((prev) => prev + 1);
  };

  const getProductData = async () => {
    const data = await fetch(
      "https://tinyapp-f14ce-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
    ).then((res) => res.json());
    if (!data) return;

    const resData = Object.entries(data) as unknown as FirebaseProductType;
    const newData = resData.filter((data: any) => data[1].userId === user.uid);
    setBasket(newData);
  };

  useEffect(() => {
    getProductData();
  }, [user.uid, isUpdate]);

  const data = {
    basket,
    setBasket,
    handleAddBasket,
    handleDeleteBasket,
    handleUpdateBasket,
    status,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
