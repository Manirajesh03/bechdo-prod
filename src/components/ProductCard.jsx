import { viewProduct } from "../redux/actions";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ title, price, description, imgs, item }) => {
  const storeData = useSelector((store) => store?.auth);
  console.log(storeData, "strdata");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const viewDetails = (item) => {
    console.log(storeData, item, "storeData");
    if (storeData?.isAuthenticated) {
      dispatch(viewProduct(item));
      navigate("/viewDetails");
    } else {
      navigate("/signup");
    }
  };

  return (
    <>
      <div className="product-card">
        <h4>{title}</h4>
        {imgs?.map((img) => (
          <img
            src={img?.imgUrl}
            key={img?.imgId}
            alt="product-image"
            className="product-image"
          />
        ))}
        <h1>
          <span>&#8377;</span>
          {price}
        </h1>
        <p>{description}</p>
        <Button name={"View Details"} onClick={() => viewDetails(item)} />
      </div>
    </>
  );
};

export default ProductCard;
