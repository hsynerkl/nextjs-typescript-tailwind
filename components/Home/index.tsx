import BestSellers from "./BestSellers";
import SectionFive from "./SectionFive";
import SectionFour from "./SectionFour";
import SectionOne from "./SectionOne";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";

const Home = () => {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <BestSellers />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </div>
  );
};

export default Home;
