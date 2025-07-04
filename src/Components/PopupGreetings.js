import React, { useEffect, useState } from 'react';
import './PopupGreetings.css';

const PopupGreetings = () => {
  const [greeting, setGreeting] = useState('');
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();

    if (hour >= 6 && hour < 12) {
      setGreeting('🌅 Good Morning! “Each morning we are born again. What we do today is what matters most.”');
    } else if (hour >= 12 && hour < 16) {
      setGreeting('🌞 Good Afternoon! “Success is the sum of small efforts, repeated day in and day out.”');
    } else if (hour >= 16 && hour < 19) {
      setGreeting('🌇 Good Evening! “The evening sings in a voice of amber, the dawn is surely coming.”');
    } else {
      setGreeting('🌙 Good Night! “The darkest nights produce the brightest stars.”');
    }

    // Auto-hide after 20 seconds
    const timer = setTimeout(() => setVisible(false), 20000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {visible && (
        <div className="popup-greeting">
          <span className="close-btn" onClick={() => setVisible(false)}>❌</span>
          {greeting}
        </div>
      )}
    </>
  );
};

export default PopupGreetings;
