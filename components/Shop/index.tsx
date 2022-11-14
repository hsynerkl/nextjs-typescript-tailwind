import Filter from "./Filter";
import Catalog from "./Catalog";
interface DataProps {
  data: {
    id: number;
    name: string;
    price: number;
    desc: string;
    src: string;
  }[];
}

const Shop = ({ data }: DataProps) => {
  return (
    <section className="mt-20 container sm:mx-5 md:mx-auto  ">
      <h1 className="text-2xl text-[#54565b]">All Products</h1>
      <p className="text-[#54565b] text-sm mt-10">
        Our full range of lovingly developed lavender products made only from
        organic Terre Bleu lavender.
      </p>
      <div className="flex justify-between mt-10 items-center">
        <p className="text-xs">{data?.length} products </p>
        <Filter />
      </div>
      <Catalog data={data} />
    </section>
  );
};

export default Shop;
