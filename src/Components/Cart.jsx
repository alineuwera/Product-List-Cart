function Cart({ cartItems = [], removeFromCart, confirmOrder }) {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg w-full md:w-96">
      <h2 className="text-xl font-bold mb-6 text-orange-600">
        Your Cart ({totalItems})
      </h2>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center text-center text-gray-500 py-8">
          <img
            src="/illustration-empty-cart.svg"
            alt="Empty cart"
            className="w-32 h-32 mb-4"
          />
          <p className="text-gray-600">Your added items will appear here</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={`${item.id}-${item.name}`}
                className="flex justify-between items-start"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-black text-lg">
                    {item.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mt-1">
                    <p className="text-orange-600 font-bold">
                      {item.quantity}x
                    </p>
                    <p className="text-gray-600">@ ${item.price.toFixed(2)}</p>
                    <p className="text-gray-400 ml-auto">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  {item.category && (
                    <p className="text-sm text-gray-500 mt-1">
                      {item.category}
                    </p>
                  )}
                </div>

                <img
                  src="public/icon-remove-item.svg"
                  alt="remove icon."
                  onClick={() => removeFromCart(item.name)}
                  className="border rounded-full border-gray-300 p-1"
                />
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between items-center mb-6">
              <p className="font-semibold text-gray-800">Order Total</p>
              <p className="font-bold text-gray-800">
                ${totalPrice.toFixed(2)}
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-600 flex items-center gap-2 mb-6">
              <img
                src="/icon-carbon-neutral.svg"
                alt="Carbon neutral"
                className="w-5 h-5"
              />
              <span>
                This is a <span className="font-semibold">carbon-neutral</span>{" "}
                delivery
              </span>
            </div>

            <button
              onClick={confirmOrder}
              className="bg-orange-600 rounded-full text-white py-2 w-full text-center text-lg hover:bg-orange-500 font-semibold"
            >
              Confirm Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
