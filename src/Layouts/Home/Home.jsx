import GroomsBrides from "./GroomsBrides";
import HappyCouples from "./HappyCouples";
import Header from "./Header";
import ServicesCard from "./ServicesCard";
import SomeMemories from "./SomeMemories";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <HappyCouples></HappyCouples>
      <ServicesCard></ServicesCard>
      <GroomsBrides></GroomsBrides>
      <SomeMemories></SomeMemories>
    </div>
  );
};

export default Home;
