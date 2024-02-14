import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/logistics/')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          <h1>{item.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default App;
