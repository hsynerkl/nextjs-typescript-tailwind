import { API_URL } from "config";
import Head from "next/head";
import Shop from "../../components/Shop";
interface DataProps {
  data: {
    id: number;
    name: string;
    price: number;
    desc: string;
    src: string;
  }[];
}

export const getStaticProps = async () => {
  const data = await fetch(`${API_URL}/api/products`)
    .then((response) => response.json())
    .catch((e) => console.log(e));
  return {
    props: {
      data: data,
    },
  };
};

const ShopPage = ({ data }: DataProps) => {
  return (
    <>
      <Head>
        <title>Shop</title>
      </Head>
      <Shop data={data} />
    </>
  );
};

export default ShopPage;
