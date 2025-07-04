import React, { useState } from 'react';
import './OrderFood.css'; // ✅ Import the CSS file

const OrderFood = () => {
  const foodItems = [
    { name: 'Pizza', price: 150,image: '/images/pizza.jpg' },
     
    { name: 'Burger', price: 80, image: '/images/burger.jpg' },
    { name: 'Pasta', price: 120, image: '/images/pasta.jpg' },
    { name: 'Fries', price: 60, image: '/images/fries.jpg' },
    { name: 'Sandwich', price: 90, image: '/images/sandwich.jpg' }
  ];

  const [orderCount, setOrderCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddToOrder = (item) => {
    setOrderCount(orderCount + 1);
    setTotalPrice(totalPrice + item.price);
  };

  return (
    <div className="order-container">
      <h2>🍱 Order Your Favorite Food</h2>

      <div className="food-grid">
        {foodItems.map((item, index) => (
          <div className="food-card" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <button onClick={() => handleAddToOrder(item)}>Add to Order</button>
          </div>
        ))}
      </div>

      {orderCount > 0 && (
        <div className="summary-box">
          <h4>🧾 Order Summary</h4>
          <p><strong>Total Items Ordered:</strong> {orderCount}</p>
          <p><strong>Total Price:</strong> ₹{totalPrice}</p>
        </div>
      )}
    </div>
  );
};

export default OrderFood;
