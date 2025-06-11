  import React from "react";
  const images = import.meta.glob("../assets/images/*", { eager: true });

  const imageMap = {};
  for (const path in images) {
    const fileName = path.split("/").pop();
    imageMap[fileName] = images[path].default;
  }

  function ProductCard({ product, addToCart }) {
    return (
      <div className="w-full overflow-hidden hover:shadow-xl rounded-xl">
        <div className="relative">
          <div className="">
            <img
              src={imageMap[product.image.desktop.split("/").pop()]}
              alt={product.name}
              className="w-full h-48 object-cover  hover:border hover:border-orange-600 rounded-xl"
            />
          </div>
          <div className="absolute top-[81%] left-1/5 rounded-full p-2">
            <button
              onClick={() => addToCart(product)}
              className="md: w-full flex items-center justify-center gap-2 bg-white border border-gray-300 py-2 px-4 rounded-full font-semibold hover:bg-orange-600 hover:text-white focus:outline-none md:items-center"
            >
              <img src="public/icon-add-to-cart.svg" alt="Add to cart"/>
              Add to Cart
            </button>
          </div>
        </div>
        <div className="p-3">
        <p className="text-gray-600">{product.category}</p>
          <h2 className="text-lg font-semibold text-black">
            {product.name}
          </h2>
          <p className="text-orange-600 font-bold text-xl mb-4">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>
    );
  }

  export default ProductCard;