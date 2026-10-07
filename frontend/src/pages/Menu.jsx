import { useParams, useNavigate } from "react-router-dom";
import "../App.css";
function Menu({ cartItems, setCartItems }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const menuData = {
    "Biryani House": [
      { name: "Chicken Biryani", price: 210 },
      { name: "Mutton Biryani", price: 300 },
      { name: "Veg Biryani", price: 150 },
      { name: "Paneer Biryani", price: 180 },
      { name: "Gobi Manchurian", price: 110 },
      { name: "Paneer Butter Masala", price: 210 },
      { name: "Butter Naan", price: 250 },
      { name: "French Fries", price: 210 },
      { name: "Chocolate Ice Cream", price: 210 },
      { name: "Vanilla Milkshake", price: 110 },
    ],
     "Paradise": [
      { name: "Veg Dum Biryani", price: 220 },
      { name: "Paneer Biryani", price: 240 },
      { name: "Mushroom Biryani", price: 230 },
      { name: "Spring Rolls", price: 150 },
      { name: "Chilli Paneer", price: 200 },
      { name: "Veg Pulao", price: 180 },
      { name: "Paneer Curry", price: 210 },
      { name: "Cold Coffee", price: 120 },
      { name: "Strawberry Ice Cream", price: 110 },
      { name: "Mango Juice", price: 90 }
  ]  ,
    "Shah Ghouse": [
      { name: "Veg Biryani", price: 200 },
      { name: "Paneer Biryani", price: 220 },
      { name: "Dal Tadka", price: 160 },
      { name: "Jeera Rice", price: 140 },
      { name: "Veg Pakoda", price: 130 },
      { name: "Aloo Gobi", price: 170 },
      { name: "Veg Sandwich", price: 120 },
      { name: "Lassi", price: 80 },
      { name: "Butterscotch Ice Cream", price: 100 },
      { name: "Orange Juice", price: 90 }
    ],
    "Anjappar": [
      { name: "Veg Meals", price: 180 },
      { name: "Paneer Curry", price: 210 },
      { name: "Veg Fried Rice", price: 160 },
      { name: "Spring Rolls", price: 150 },
      { name: "Chilli Gobi", price: 170 },
      { name: "Veg Noodles", price: 150 },
      { name: "Filter Coffee", price: 60 },
      { name: "Badam Milk", price: 90 },
      { name: "Vanilla Ice Cream", price: 100 },
      { name: "Fruit Salad", price: 110 }
    ],

    "A2B": [
      { name: "Mini Meals", price: 150 },
      { name: "Full Meals", price: 200 },
      { name: "Paneer Butter Masala", price: 220 },
      { name: "Veg Biryani", price: 180 },
      { name: "Masala Dosa", price: 120 },
      { name: "Idli Sambar", price: 80 },
      { name: "Coffee", price: 50 },
      { name: "Lassi", price: 70 },
      { name: "Ice Cream", price: 100 },
      { name: "Kesari", price: 90 }
  ]  ,
    "Saravana Bhavan": [
      { name: "South Indian Meals", price: 190 },
      { name: "Veg Biryani", price: 170 },
      { name: "Ghee Dosa", price: 130 },
      { name: "Rava Dosa", price: 120 },
      { name: "Idli", price: 60 },
      { name: "Vada", price: 70 },
      { name: "Filter Coffee", price: 60 },
      { name: "Badam Milk", price: 90 },
      { name: "Ice Cream", price: 100 },
      { name: "Halwa", price: 110 }
    ],
    "Meghana Foods": [
      { name: "Veg Biryani", price: 210 },
      { name: "Paneer Biryani", price: 230 },
      { name: "Mushroom Biryani", price: 220 },
      { name: "Gobi Manchurian", price: 180 },
      { name: "Paneer Curry", price: 200 },
      { name: "Veg Noodles", price: 160 },
      { name: "French Fries", price: 120 },
      { name: "Cold Coffee", price: 130 },
      { name: "Ice Cream", price: 100 },
      { name: "Juice", price: 90 }
    ],
    "Empire": [
      { name: "Veg Biryani", price: 200 },
      { name: "Paneer Tikka", price: 220 },
      { name: "Veg Fried Rice", price: 170 },
      { name: "Veg Noodles", price: 160 },
      { name: "Chilli Paneer", price: 200 },
      { name: "Gobi Manchurian", price: 180 },
      { name: "Milkshake", price: 140 },
      { name: "Cold Coffee", price: 130 },
      { name: "Ice Cream", price: 100 },
      { name: "Fruit Juice", price: 90 }
    ],
    "Truffles": [
      { name: "Veg Burger", price: 180 },
      { name: "Paneer Burger", price: 200 },
      { name: "French Fries", price: 120 },
      { name: "Veg Pasta", price: 170 },
      { name: "Cheese Balls", price: 150 },
      { name: "Veg Sandwich", price: 140 },
      { name: "Cold Coffee", price: 130 },
      { name: "Milkshake", price: 150 },
      { name: "Ice Cream", price: 110 },
      { name: "Brownie", price: 120 }
    ],
  
    "Dominos": [
      { name: "Veg Pizza", price: 250 },
      { name: "Paneer Pizza", price: 270 },
      { name: "Garlic Bread", price: 120 },
      { name: "Stuffed Garlic Bread", price: 150 },
      { name: "Stuffed Garlic Bread", price: 150 },
      { name: "Stuffed Garlic Bread", price: 150 },
      { name: "Pasta", price: 180 },
      { name: "Choco Lava Cake", price: 110 },
      { name: "Pepsi", price: 60 },
      { name: "Coke", price: 60 },
      {name: "Ice Cream", price: 100 },
      { name: "Brownie", price: 120 }
    ],
    "Pizza Hut": [
      { name: "Veg Pizza", price: 260 },
      { name: "Paneer Pizza", price: 280 },
      { name: "Cheese Pizza", price: 240 },
      { name: "Garlic Bread", price: 130 },
      { name: "Veg Pasta", price: 190 },
      { name: "French Fries", price: 120 },
      { name: "Cold Drink", price: 70 },
      { name: "Milkshake", price: 150 },
      { name: "Ice Cream", price: 110 },
      { name: "Brownie", price: 130 }
    ],
    "KFC": [
      { name: "Veg Burger", price: 180 },
      { name: "Veg Wrap", price: 170 },
      { name: "French Fries", price: 120 },
      { name: "Veg Nuggets", price: 150 },
      { name: "Veg Rice Bowl", price: 190 },
      { name: "Cold Drink", price: 70 },
      { name: "Milkshake", price: 150 },
      { name: "Ice Cream", price: 110 },
      { name: "Brownie", price: 120 },
      { name: "Pepsi", price: 60 }
    ]
  };
  const items = menuData[id] || [];

  // 🔥 ADD ITEM
  const addItem = (item) => {
    const existing = cartItems.find(i => i.name === item.name);
    if (existing) {
      const updated = cartItems.map(i =>
        i.name === item.name ? { ...i, qty: i.qty + 1 } : i
      );
      setCartItems(updated);
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
 };
  // 🔥 REMOVE ITEM
  const removeItem = (item) => {
    const existing = cartItems.find(i => i.name === item.name);
    if (existing.qty === 1) {
      const updated = cartItems.filter(i => i.name !== item.name);
      setCartItems(updated);
    } else {
      const updated = cartItems.map(i =>
        i.name === item.name ? { ...i, qty: i.qty - 1 } : i
      );
      setCartItems(updated);
    }
  };
  // 🔥 GET COUNT
  const getQty = (item) => {
    const found = cartItems.find(i => i.name === item.name);
    return found ? found.qty : 0;
  };
  return (
    <div>
      <h2>Menu - {id}</h2>
      <button onClick={() => navigate("/cart")}>Go to Cart</button>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
        {items.map((item, index) => {
          const qty = getQty(item);
          return (
            <div key={index} style={{ border: "1px solid gray", padding: "10px", textAlign: "center" }}>
              <p>{item.name}</p>
              <p>₹{item.price}</p>
              {/* 🔥 CONDITIONAL BUTTON */}
              {qty === 0 ? (
                <button onClick={() => addItem(item)}>Add</button>
              ) : (
                <div>
                  <button onClick={() => removeItem(item)}>-</button>
                  <span style={{ margin: "0 10px" }}>{qty}</span>
                  <button onClick={() => addItem(item)}>+</button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Menu;
