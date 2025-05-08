import React, { useState } from "react";

const images = import.meta.glob("../assets/images/*", { eager: true });

const imageMap = {};
for (const path in images) {
  const fileName = path.split("/").pop();
  imageMap[fileName] = images[path].default;
}

function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1); // optional: reset after adding
  };

  return (
    <div className="w-full bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition-shadow duration-300 hover:scale-105">
      <div className="relative">
        <div>
          <img
            src={imageMap[product.image.desktop.split("/").pop()]}
            alt={product.name}
            className="w-full h-48 object-contain p-4"
          />
        </div>

        {/* Quantity control */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-orange-500 text-white rounded-full overflow-hidden">
          <button
            onClick={handleDecrement}
            className="px-3 py-2 hover:bg-orange-600 transition"
          >
            <img src="public/icon-decrement-quantity.svg" alt="decrement" />
          </button>
          <span className="px-4 text-lg">{quantity}</span>
          <button
            onClick={handleIncrement}
            className="px-3 py-2 hover:bg-orange-600 transition"
          >
            <img src="public/icon-increment-quantity.svg" alt="increment" />
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

        {/* Add to Cart button */}
        <button
          onClick={handleAddToCart}
          className="w-full flex items-center justify-center gap-2 bg-orange-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-orange-600 transition"
        >
          <img src="public/icon-add-to-cart.svg" alt="" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
