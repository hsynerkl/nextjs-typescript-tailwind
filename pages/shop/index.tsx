import Shop from "../../Components/Shop";
import Head from "next/head";
import { ProductsProps } from "../.././types/Products";

const ShopPage = ({ products }: ProductsProps) => {
  return (
    <>
      <Head>
        <title>Shop</title>
      </Head>
      <Shop products={products} />
    </>
  );
};

export const getStaticProps = async () => {
  const data = await fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .catch((e) => console.log(e));

  const products = data.products;

  return {
    props: {
      products,
    },
  };
};

export default ShopPage;
