import { useState } from "react";
import { viewProduct } from "../redux/actions";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ title, price, description, imgs, item }) => {
  const [activeImg, setActiveImg] = useState(0);
  const storeData = useSelector((store) => store?.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const viewDetails = (item) => {
    if (storeData?.isAuthenticated) {
      dispatch(viewProduct(item));
      navigate("/viewDetails");
      console.log(item);
    } else {
      dispatch(viewProduct(item));
      navigate("/signup");
    }
  };

  const nextImg = () => setActiveImg((prev) => prev + 1);
  const prevImg = () => setActiveImg((prev) => prev - 1);

  return (
    <>
      <div className="product-card">
        <p className="product-title">{title}</p>
        <div className="img-container">
          <button onClick={prevImg} type="button" disabled={activeImg === 0}>
            {"<"}
          </button>
          <img
            src={imgs[activeImg]?.imgUrl}
            alt="product-image"
            className="product-image"
          />
          <button
            onClick={nextImg}
            type="button"
            disabled={activeImg === imgs.length - 1}
          >
            {">"}
          </button>
        </div>
        <p className="price">
          <span>&#8377; </span>
          {price}
        </p>
        <p className="description">{description}</p>
        <Button name={"View Details"} onClick={() => viewDetails(item)} />
      </div>
    </>
  );
};

export default ProductCard;
