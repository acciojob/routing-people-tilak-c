import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
const UserDetails = () => {
    const {id}=useParams();
    const [user,setUser]=useState(null);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
          .then((response) => response.json())
          .then((data) => setUser(data))
          .catch((error) => console.error("Error fetching users:", error));
      }, [id]);
      if(!user){
        return <p>Loading user details...</p>
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