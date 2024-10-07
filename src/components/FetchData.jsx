import axios from 'axios';
import React, { useEffect, useState } from 'react';

const FetchData = React.memo(() => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState([]);
  const [counter, setCounter] = useState(0);

  const incrementNumber = () => {
    setCounter((prev) => prev + 1);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  });

  console.log('Rendering...');
  let count = 0;
  //   for (let i = 0; i < 60000000; i++) {
  //     count = count + 1;
  //   }
  const longTitleCount = () => {
    console.log('adfsafasasg gasdg asg asgfa000');

    // return data.filter((item) => item.title.lenght > 50);
  };

  if (loading) return <p>Loading...</p>;
  //   if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Counter</h1>
      <p>Increment Number: {counter}</p>
      <button onClick={incrementNumber}>click</button>

      <h2>Fetching Data</h2>
      <p>Number of posts : {longTitleCount()}</p>
      <ul>
        {data.map((item) => {
          <div>
            <div>
              <img src={item.picture} alt='img' />
            </div>
          </div>;
        })}
      </ul>
    </div>
  );
});

export default FetchData;
