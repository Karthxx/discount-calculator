import Navbar from "./Navbar";
import DiscountCalculator from "./DiscountCalculator";

function App() {
  return (
    <>
      <section className="text-white p-4 border-b-">
        <Navbar />
      </section>
      <section className="text-white m-8">
        <DiscountCalculator />
      </section>
    </>
  );
}

export default App;
