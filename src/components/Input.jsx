const Input = ({ setInputValue, placeHolder, onClick }) => {
  console.log(placeHolder, setInputValue);
  return (
    <input
      type="text"
      name="input"
      className="input-field"
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search products"
    ></input>
  );
};

export default Input;
