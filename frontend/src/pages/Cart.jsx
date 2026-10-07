import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Cart({ cartItems, setCartItems, orders, setOrders }) {
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);
  // ✅ Correct total calculation (with quantity)
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  const placeOrder = () => {
    if (cartItems.length === 0) return;
    setOrders([...orders, cartItems]); // save order
    setCartItems([]); // clear cart
    setOrderPlaced(true); // show message
  };
  return (
    <div>
      <h2>Your Cart</h2>
      {/* ✅ Order Success Message */}
      {orderPlaced && (
        <h3 style={{ color: "green" }}>
          Order Placed Successfully ✅
        </h3>
      )}
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {/* ✅ SHOW ITEMS WITH QTY */}
          {cartItems.map((item, index) => (
            <div key={index}>
              <p>
                {item.name} - ₹{item.price} × {item.qty}
              </p>
              <button
                onClick={() => {
                  const existing = cartItems.find(i => i.name === item.name);
                  if (existing.qty === 1) {
                    // remove completely if qty = 1
                    const updated = cartItems.filter(i => i.name !== item.name);
                    setCartItems(updated);
                  } else {
                    // reduce quantity
                    const updated = cartItems.map(i =>
                      i.name === item.name ? { ...i, qty: i.qty - 1 } : i
                    );
                    setCartItems(updated);
                  }
                }}
              >
                Remove
              </button>
            </div>
          ))}
          {/* ✅ TOTAL */}
          <h3>Total: ₹{total}</h3>
          {/* ✅ PLACE ORDER */}
          <button onClick={placeOrder}>Place Order</button>
        </>
      )}

      {/* ✅ VIEW ORDERS BUTTON */}
      {orderPlaced && (
        <button onClick={() => navigate("/orders")}>
          View Orders
        </button>
      )}
    </div>
  );
}
export default Cart;
