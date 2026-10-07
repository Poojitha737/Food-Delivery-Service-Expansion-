import "../App.css";
function Orders({ orders }) {
  return (
    <div>
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders placed</p>
      ) : (
        orders.map((order, index) => {
          const total = order.reduce((sum, item) => sum + item.price, 0);
          return (
            <div key={index}>
              <h3>Order {index + 1}</h3>
              {order.map((item, i) => (
                <p key={i}>{item.name} - ₹{item.price}</p>
              ))}
              <h4>Total: ₹{total}</h4>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Orders;
