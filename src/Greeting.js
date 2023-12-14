import React, { useEffect, useState } from 'react';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/messages');
        const data = await response.json();

        const randomIndex = Math.floor(Math.random() * data.length);
        const randomMessage = data[randomIndex].message;

        setGreeting(randomMessage);
      } catch (error) {
        console.error('Error fetching greeting:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>{greeting}</p>
    </div>
  );
};

export default Greeting;
