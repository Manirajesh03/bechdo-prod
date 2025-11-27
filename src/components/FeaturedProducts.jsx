import data from "../constants/data.json";
import { useDispatch } from "react-redux";
import { viewProduct } from "../redux/actions";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const dispatch = useDispatch();
  const { featuredProducts } = data;

  return (
    <>
      <h2 className="featured-products-title">Featured Products</h2>
      <div className="featured-products-container">
        {featuredProducts?.map((item) => {
          const { title, price, description, imgs, productId } = item;
          return (
            <ProductCard
              title={title}
              price={price}
              description={description}
              imgs={imgs}
              productId={productId}
              key={productId}
              item={item}
            />
          );
        })}
      </div>
    </>
  );
};

export default FeaturedProducts;
