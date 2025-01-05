import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product/${product?.id || product?._id || 2}`);
  };

  return (
    <div
      onClick={handleNavigate}
      className="productCard  w-[13rem] m-3 transition-all cursor-pointer rounded-lg"
    >
      <div className="h-[14rem] ">
        <img
          className="h-full w-full object-cover object-left-top rounded-t-lg"
          src={product.imageUrl}
          alt="product image"
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{product.brand}</p>
          <p>{product.title}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">{product.discountedPrice}</p>
          <p className="line-through opacity-50">{product.price}</p>
          <p className="text-green-600 font-semibold">
            {product.discountPercent}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
