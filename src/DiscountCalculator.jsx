import React, { useState, useCallback } from "react";

const DiscountCalculator = () => {
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [finalPrice, setFinalPrice] = useState("");
  const [savings, setSavings] = useState("");

  const calculateDiscount = useCallback(() => {
    const price = parseFloat(originalPrice);
    const discount = parseFloat(discountPercentage);

    if (isNaN(price) || isNaN(discount) || price <= 0 || discount < 0) {
      setFinalPrice("");
      setSavings("");
      return;
    }

    const discountAmount = (price * discount) / 100;
    const final = price - discountAmount;
    const save = price - final;

    setFinalPrice(final.toFixed(2));
    setSavings(save.toFixed(2));
  }, [originalPrice, discountPercentage]);

  React.useEffect(() => {
    calculateDiscount();
  }, [calculateDiscount]);

  return (
    <div className="sm:flex max-w-4xl mx-auto">
      <div className="p-4 max-w-md sm:w-6/12 mx-auto border rounded">
        <div className="mb-4">
          <label className="block mb-2">Original Price:</label>
          <input
            type="number"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(e.target.value)}
            className="w-full p-2 border rounded text-black"
            inputMode="decimal"
            pattern="\d*"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Discount Percentage:</label>
          <input
            type="number"
            value={discountPercentage}
            onChange={(e) => setDiscountPercentage(e.target.value)}
            className="w-full p-2 border rounded text-black"
            inputMode="decimal"
            pattern="\d*"
          />
        </div>
        <div className="mb-2">
          <strong>You Pay:</strong> {finalPrice ? `$${finalPrice}` : ""}
        </div>
        <div>
          <strong>You Save:</strong> {savings ? `$${savings}` : ""}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center sm:w-6/12">
        <h1 className="text-2xl my-6 sm:my-0 sm:mb-6 font-bold">
          Discount Calculator
        </h1>
        <p className="text-center sm:px-10">
          {`Welcome to free online Discount Calculator! Whether you're
          shopping for groceries, electronics, or planning your next big
          purchase, our easy-to-use tool helps you quickly determine how much
          you'll save with any discount.`}
        </p>
      </div>
    </div>
  );
};

export default DiscountCalculator;
