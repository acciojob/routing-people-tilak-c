
import React from "react";
import '../styles/App.css';
import UserList from './UserList'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDetails from "./UserDetails";
const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Router>
          <Routes>
            <Route path="/" element={<UserList/>}/>
            <Route path="/users/:id" element={<UserDetails/>}/>
          </Routes>
         </Router>
    </div>
  )
}

export default App
