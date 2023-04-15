import { useState } from "react";
import InputRange from "react-input-range";

const YearSlider = () => {
  const [price, setPrice] = useState({
    value: { min: 2001, max: 2023 },
  });

  const handleOnChange = (value) => {
    setPrice({ value });
  };

  return (
    <div className="js-price-rangeSlider">
      <div className="text-14 fw-500"></div>

      <div className="d-flex justify-between mb-20">
        <div className="text-15 text-dark-1">
          <span className="js-lower mx-1">  {price.value.min}</span>-
          <span className="js-upper mx-1">{price.value.max}</span>
        </div>
      </div>

      <div className="px-5">
        <InputRange
          formatLabel={(value) => ``}
          minValue={2000}
          maxValue={2023}
          value={price.value}
          onChange={(value) => handleOnChange(value)}
        />
      </div>
    </div>
  );
};

export default YearSlider;
