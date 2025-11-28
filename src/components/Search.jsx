import { useState } from "react";
import Button from "./Button";

const Search = ({ onBlur }) => {
  const [inputValue, setInputValue] = useState("");

  const searchProducts = () => {
    console.log(inputValue);
  };
  return (
    <div className="search-block">
      <input
        type="text"
        name="input"
        className="input-field search-input"
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search products"
        onBlur={onBlur}
      ></input>
      <Button
        name={"Search"}
        onClick={searchProducts}
        styles={{
          padding: "16px",
          borderBottomLeftRadius: "0px",
          borderTopLeftRadius: "0px",
          maxHeight: "49px",
        }}
      />
    </div>
  );
};

export default Search;
