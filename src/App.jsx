import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        const data = await response.json();

        setUsers(data);

        if (!response.ok) throw new Error('Network response was not ok');
      } catch (error) {
        console.error('This is my eror:', error);
      }
    };
    fetchUsers();
  }, []);

  const fetchUserById = async (id) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await response.json();

      setUser(data);

      if (!response.ok) throw new Error('Network response was not ok');
    } catch (error) {
      console.error('This is my eror:', error);
    }
  };

  return (
    <>
      <div>
        <h1>Users List</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id} onClick={() => fetchUserById(user.id)}>
              {user.name}
            </li>
          ))}
        </ul>

        {user && (
          <div>
            <h2>User Data</h2>
            <p>
              <strong>Name:</strong>
              {user.name}
            </p>
            <p>
              <strong>Email:</strong>
              {user.email}
            </p>
            <p>
              <strong>address:</strong> {user.address.city},{' '}
              {user.address.street}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
