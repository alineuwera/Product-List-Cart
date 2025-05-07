import React from "react";
import { ShoppingCart } from "lucide-react";
const images = import.meta.glob("../assets/images/*", { eager: true });

const imageMap = {};
for (const path in images) {
  const fileName = path.split("/").pop();
  imageMap[fileName] = images[path].default;
}

function ProductCard({ product, addToCart }) {
  return (
    <div className="w-full bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition-shadow duration-300 hover:scale-105">
      <div className="relative">
        <img
          src={imageMap[product.image.desktop.split("/").pop()]}
          alt={product.name}
          className="w-full h-48 object-contain p-4"
        />
        <div className="absolute top-[81%] left-1/5  rounded-full p-2">
        <button
          onClick={() => addToCart(product)}
          className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 py-2 px-4 rounded-full font-semibold hover:bg-[#C73B0F] hover:text-white focus:outline-none"
        >
          <ShoppingCart size={18} className="text-orange-500" />
          Add to Cart
        </button>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-black mb-2">
          {product.name}
        </h2>
        <p className="text-gray-600 mb-2">{product.category}</p>
        <p className="text-orange-600 font-bold text-xl mb-4">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
