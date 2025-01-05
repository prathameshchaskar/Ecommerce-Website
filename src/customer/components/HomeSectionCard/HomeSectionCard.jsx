import React from "react";
import { useNavigate } from "react-router-dom";

const HomeSectionCard = ({ product,sectionName }) => {
  const navigate = useNavigate();

   // Define a manual mapping of section names to paths
   const sectionPaths = {
    "Men Kurta": "/men/clothing/mens_kurta",
    "Backpacks": "/men/accessories/men_backpacks",
    "Lengha Choli": "/women/clothing/women_lenghaCholi",
    "Saree": "/women/clothing/women_saree",
    "Dress": "/women/clothing/Dress",
    "Women Gowns": "/women/clothing/women_gouns",
    "Men Jeans": "/men/clothing/men_jeans",
  };

  // Get the corresponding path based on the sectionName
  const getNavigationPath = () => {
    return sectionPaths[sectionName] || "/"; // Default to "/" if sectionName is not found
  };

  return (
    <div
      onClick={() => navigate(getNavigationPath())}
      className="cursor-pointer flex flex-col items-center rounded-lg shadow-lg mx-3 border overflow-hidden "
    >
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full "
          src={product?.image || product?.imageUrl}
          alt={product?.title}
        />
      </div>
      <div className="p-2">
        <h3 className="text-lg font-medium  text-gray-900">
          {product?.brand || product?.title}
        </h3>
        <p className="text-sm mt-2">{product.title}</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
