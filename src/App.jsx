import { useState } from "react";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";
import OrderModal from "./Components/OrderModal";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === product.name);
      
      if (existingItem) {
        return prevItems.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productName) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === productName);
      
      if (existingItem && existingItem.quantity > 1) {
        return prevItems.map((item) =>
          item.name === productName
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prevItems.filter((item) => item.name !== productName);
      }
    });
  };

  const confirmOrder = () => {
    setIsOrderModalOpen(true);
  };

  const closeOrderModal = () => {
    setIsOrderModalOpen(false);
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ProductList addToCart={addToCart} />
        </div>
        <div className="lg:col-span-1">
          <Cart
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            confirmOrder={confirmOrder}
          />
        </div>
      </div>

      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={closeOrderModal}
        cartItems={cartItems}
        totalPrice={totalPrice}
      />
    </div>
  );
}

export default App;