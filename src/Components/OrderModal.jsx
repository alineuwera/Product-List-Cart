import React from "react";

// Import images dynamically
const images = import.meta.glob("/src/assets/images/*", { eager: true });

const imageMap = {};
for (const path in images) {
  const fileName = path.split("/").pop();
  imageMap[fileName] = images[path].default;
}

function OrderModal({ isOpen, onClose, cartItems = [], totalPrice = 0 }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center shadow-lg">
        {/* Header with Checkmark */}
        <div className="flex justify-start mb-4">
          <img src="public/icon-order-confirmed.svg" alt="" />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-left text-gray-800">Order Confirmed</h2>
        <p className="text-gray-500 mb-6 text-left">We hope you enjoy your food!</p>

        {/* Order Items List with Background */}
        <div className="bg-[#F9F5F1] rounded-lg p-4 text-left mb-6">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0"
              >
                <div className="flex items-center">
                  <img
                    src={
                      item?.image?.desktop
                        ? imageMap[item.image.desktop.split("/").pop()] ||
                          "https://via.placeholder.com/150"
                        : "https://via.placeholder.com/150"
                    }
                    alt={item.name || "Product"}
                    className="w-12 h-12 rounded-lg mr-4 object-contain"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">
                      {item.name || "Unknown Product"}
                    </p>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <span className="text-orange-600 font-bold">
                        {item.quantity || 0}x
                      </span>
                      <span>@ ${(item.price || 0).toFixed(2)}</span>
                    </p>
                  </div>
                </div>
                <p className="font-semibold text-gray-800">
                  ${((item.quantity || 0) * (item.price || 0)).toFixed(2)}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No items in the order.</p>
          )}
        </div>

        {/* Order Total */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600 font-semibold">Order Total</p>
          <p className="text-xl font-bold text-gray-800">${totalPrice.toFixed(2)}</p>
        </div>

        {/* Start New Order Button */}
        <button
          onClick={onClose}
          className="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-500 w-full font-semibold"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}

export default OrderModal;