function Cart({
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  confirmOrder,
  resetCart,
}) {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg w-full md:w-80">
      <h2 className="text-xl font-bold mb-4 text-orange-500">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-black">{item.name}</h3>
                <p className="text-sm text-gray-500">
               <span className="text-orange-500 font-bold"> {item.quantity}×</span>  @${item.price.toFixed(2)}  
                </p>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="w-8 h-8 border rounded hover:bg-gray-200"
                >
                  -
                </button>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="w-8 h-8 border rounded hover:bg-gray-200"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="w-8 h-8 bg-red-500 text-white rounded"
                >
                  ×
                </button>
              </div>
            </div>
          ))}

          <p className="text-right font-bold text-lg mt-2">
            Total: ${totalPrice.toFixed(2)}
          </p>

          <div className="flex flex-col gap-2 mt-4">
            <button
              onClick={confirmOrder}
              className="bg-orange-700 rounded-4xl text-white py-2 hover:bg-orange-600 transition duration-200"
            >
              Confirm Order
            </button>
            <button
              onClick={resetCart}
              className="bg-white border border-gray-300 py-2 rounded-4xl hover:bg-gray-100"
            >
              New Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
