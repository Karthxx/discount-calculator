import Navbar from "./Navbar";
import DiscountCalculator from "./DiscountCalculator";

function App() {
  return (
    <>
      <section className="text-white p-4 border-b-">
        <Navbar />
      </section>
      <section className="text-white mx-8 sm:h-screen  sm:pt-36">
        <DiscountCalculator />
      </section>
    </>
  );
}

export default App;
