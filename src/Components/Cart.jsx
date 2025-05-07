function Cart({
  cartItems = [],
  removeFromCart,
  confirmOrder,
}) {
  const totalPrice = cartItems.reduce(
    (total, item) => total + (Number(item.price) || 0) * (item.quantity || 0),
    0
  );

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg w-full md:w-96">
      <h2 className="text-xl font-bold mb-4 text-orange-600">
        Your Cart ({totalItems})
      </h2>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center text-center text-gray-500">
          <img
            src="public/illustration-empty-cart.svg"  
            alt="Empty cart"
            className="w-32 h-32 mb-4"
          />
          <p className="">Your added items will appear here</p>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center py-2 border-b"
            >
              <div>
                <h3 className="font-semibold text-black">{item.name}</h3>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <span className="text-orange-600 font-bold">
                    {item.quantity}x
                  </span>
                  <span>@ ${Number(item.price).toFixed(2)}</span>
                  <span className="text-gray-400 ml-1">
                    ${ (item.price * item.quantity).toFixed(2) }
                  </span>
                </p>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-gray-400 hover:text-red-500 text-xl"
              >
                ×
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center mt-4 font-semibold text-lg">
            <p>Order Total</p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-3 mt-4 text-sm text-gray-600 flex items-center gap-2">
            <span className="text-green-500">🌱</span>
            This is a <span className="font-semibold">carbon-neutral</span> delivery
          </div>

          <button
            onClick={confirmOrder}
            className="bg-orange-600 rounded-full text-white py-3 mt-5 w-full text-center text-lg hover:bg-orange-500 transition"
          >
            Confirm Order
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
