import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
const UserDetails = () => {
    const {id}=useParams();
    const [user,setUser]=useState(null);
   const [loading, setLoading] = useState(true); // ✅ add loading state

  useEffect(() => {
    setLoading(true); 
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
    </div>
  )
}

export default UserDetails