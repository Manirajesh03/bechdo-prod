import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const ViewProductDetails = () => {
  console.log("Rendered ViewProductDetails");
  const storeData = useSelector((state) => state);
  console.log(storeData);

  const { title, price, description, imgs } = storeData?.viewProduct?.[0];

  return (
    <div>
      <ProductCard
        title={title}
        price={price}
        description={description}
        imgs={imgs}
        item
      />
    </div>
  );
};

export default ViewProductDetails;
