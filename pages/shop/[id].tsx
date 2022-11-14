import type { GetStaticPaths, GetStaticProps } from "next";
import { API_URL } from "config";
import Products from "components/Shop/Product";
import Head from "next/head";
interface ProductsTypes {
  [key: string]: {
    id: number;
    name: string;
    desc: string;
    price: number;
    src: string;
  }[];
}

const ProductDetail = ({ filteredProducts }: ProductsTypes) => {
  return (
    <>
      <Head>
        <title>{filteredProducts[0].name}</title>
      </Head>
      <Products data={filteredProducts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || !params.id) {
    return { props: {} };
  }
  const productsData = await fetch(`${API_URL}/api/products`)
    .then((response) => response.json())
    .catch((err) => {
      console.log(err);
    });
  const filteredProducts = productsData.filter(
    (a: ProductsTypes) => a.id.toString() === params.id
  );
  return {
    props: {
      filteredProducts,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const productsData = await fetch(`${API_URL}/api/products`)
    .then((response) => response.json())
    .catch((err) => {
      console.log(err);
    });
  const paths = productsData.map((product: ProductsTypes) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
};

export default ProductDetail;
