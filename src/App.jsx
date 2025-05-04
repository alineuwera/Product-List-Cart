import { useState } from "react";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";
import OrderModal from "./Components/OrderModal";
import { ShoppingCart } from "lucide-react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = (product) => {
    const existing = cartItems.find((item) => item.id === product.id);
    if (existing) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (productId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity !== 0)
    );
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const confirmOrder = () => {
    setIsModalOpen(true);
    setCartItems([]);
  };

  const resetCart = () => {
    setCartItems([]);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-black mb-8">
          <span className="text-orange-500"><ShoppingCart className="inline mr-2" size={40} /></span> 
          Product List
          </h1>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <ProductList addToCart={addToCart} />

            <Cart
              cartItems={cartItems}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeFromCart={removeFromCart}
              confirmOrder={confirmOrder}
              resetCart={resetCart}
            />
          </div>
        </div>

        <OrderModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </>
  );
}

export default App;
