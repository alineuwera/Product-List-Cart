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
    <>
   <div className="w-full bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
  <img
    src={imageMap[product.image.thumbnail.split("/").pop()]}
    alt={product.name}
    className="w-full h-48 object-contain p-4"
  />
  <div className="p-4 space-y-2">
    <p className="text-xs text-gray-500">{product.category}</p>
    <h2 className="text-lg font-semibold text-black">{product.name}</h2>
    <p className="text-orange-600 font-bold text-lg">${product.price.toFixed(2)}</p>
    <button
      onClick={() => addToCart(product)}
      className="w-full bg-white text-black border border-gray-300 py-2 rounded-4xl hover:bg-orange-600 hover:text-white transition"
    >
        <span className="text-orange-500"><ShoppingCart className="inline mr-2" size={16} /></span>
    Add to Cart
    </button>
  </div>
</div>

    </>
  );
}

export default ProductCard;
