import React, { useEffect, useState } from 'react';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/messages');
        const data = await response.json();
        console.log('Response from server:', data);
        setGreeting(data[0].message);
      } catch (error) {
        console.error('Error fetching greeting:', error);
      }
    };

    fetchData();
  }, []);

  console.log('Greeting value:', greeting);

  return (
    <div>
      <h2>Greeting Component</h2>
      <p>{greeting}</p>
    </div>
  );
};

export default Greeting;