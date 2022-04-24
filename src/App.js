import { useState, useEffect } from 'react';
import User from './User';
import './App.css';
import { Container, Row } from 'react-bootstrap'

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    fetchUsersData()
  }, [])

  async function fetchUsersData() {
    setIsLoading(true)
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      console.log(response)
      const data = await response.json();
      console.log(data)
      setUsers(data)
    } catch (error) {
      console.log(error)
    }

  setIsLoading(false)
}

  return (
    <Container className="p-3">
      <h1 className="text-center">Users</h1>
      {isLoading && <h2>Loading</h2>}
      <Row xs={1} md={2} className="g-4">
      {users.map((user) => (
        <User
          key={user.id}
          name={user.name} 
          address={user.address} 
          username={user.username}
          email={user.email}
          phone={user.phone}
          company={user.company}
        />
      ))}
      </Row>
    </Container>
  );
}

export default App;
