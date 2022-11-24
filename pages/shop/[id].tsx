import Product from "../../Components/Shop/Product";
import { IProduct, ProductProps } from "types/Products";

const ProductDetail = ({ product }: ProductProps) => {
  return <Product product={product} />;
};

export const getStaticProps = async ({ params }: { id: string } | any) => {
  if (!params || !params.id) {
    return { props: {} };
  }
  const product = await fetch(`https://dummyjson.com/products/${params.id}`)
    .then((res) => res.json())
    .catch((e) => console.log(e));

  return {
    props: { product },
  };
};

export const getStaticPaths = async () => {
  const data = await fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .catch((e) => console.log(e));
  const paths = data.products.map((product: IProduct) => ({
    params: { id: product.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default ProductDetail;
