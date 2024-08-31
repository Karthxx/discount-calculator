import Navbar from "./Navbar";
import DiscountCalculator from "./DiscountCalculator";

function App() {
  return (
    <>
      <section className="text-white p-4 border-b-">
        <Navbar />
      </section>
      <section className="text-white m-8 sm:h-screen  sm:mt-36">
        <DiscountCalculator />
      </section>
    </>
  );
}

export default App;
