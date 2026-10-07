import { useParams, useNavigate } from "react-router-dom";
import "../App.css";
import Navbar from "../components/Navbar";
function Restaurants() {
  const { city } = useParams();
  const navigate = useNavigate();
  const data = {
    Hyderabad: [
      { name: "Biryani House", price: 250 },
      { name: "Paradise", price: 300 },
      { name: "Shah Ghouse", price: 280 }
    ],
    Chennai: [
      { name: "Anjappar", price: 250 },
      { name: "A2B", price: 300 },
      { name: "Saravana Bhavan", price: 280 }
    ],
    Bangalore: [
      { name: "Meghana Foods", price: 250 },
      { name: "Empire", price: 300 },
      { name: "Truffles", price: 280 }
    ],
    Mumbai: [
      { name: "Dominos", price: 250 },
      { name: "Pizza Hut", price: 300 },
      { name: "KFC", price: 280 }
    ],
  };
  const hotelImages = {
    "Biryani House": "/images/hotels/hotel1.jpg",
    Paradise: "/images/hotels/hotel2.jpg",
    "Shah Ghouse": "/images/hotels/hotel3.jpg",
    "Anjappar": "/images/hotels/hotel4.jpg",
    "A2B": "/images/hotels/hotel5.jpg",
    "Saravana Bhavan": "/images/hotels/hotel6.jpg",
    "Meghana Foods": "/images/hotels/hotel7.jpg",
    "Empire": "/images/hotels/hotel8.jpg",
    "Truffles": "/images/hotels/hotel9.jpg",
    "Dominos": "/images/hotels/hotel10.jpg",
    "Pizza Hut": "/images/hotels/hotel11.jpg",
    "KFC": "/images/hotels/hotel12.jpg",
  };
  const restaurants = data[city] || [];
  // FIXED loading check
  if (!restaurants.length) return <h2>Loading...</h2>;
  return (
    <>
      <Navbar />
      <div>
        <h2 style={{ textAlign: "center" }}>
          🍴 Restaurants in {city}
        </h2>
        <div className="restaurant-grid">
          {restaurants.map((res, i) => (
            <div key={i} className="card">
              <img             
                  hotelImages[res.name] ||
                  `https://source.unsplash.com/400x300/?food,${res.name}`
                }
                alt={res.name}
              />
              <h3>{res.name}</h3>
              <p>Starting from ₹{res.price}</p>
              <button
                className="btn"
                onClick={() => navigate(`/menu/${res.name}`)}
              >
                View Menu
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Restaurants;
