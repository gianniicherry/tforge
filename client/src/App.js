import './App.css';
import React, {useState, createContext, useEffect} from 'react';
import Navbar from './Navbar';
import Home from './components/Home';
import Auth from './components/Auth';
import SignOut from './components/SignOut';
import Recycle from './components/Recycle';
import Contact from './components/Contact';
import About from './components/About';
import RecycleStatus from './components/RecycleStatus';
import { Route, Routes} from 'react-router-dom';

export const UserContext = createContext();

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  useEffect(() => {
    fetch('/auth').then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setCurrentUser(user)
          setIsLoggedIn(true)
        });
      }
    });
  }, []);

  function handleLogin(user) {
    setCurrentUser(user);
    setIsLoggedIn(true)
    
  }

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => setIsLoggedIn(false));
    setCurrentUser(null)
  }



  return (
    <>
      <Navbar isLoggedIn={isLoggedIn}/>
      <div className="container">
      <UserContext.Provider value={{ currentUser, setCurrentUser, isLoggedIn }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth onLogin={handleLogin} />} />
          <Route path="/signout" element={<SignOut onLogout={handleLogout} />} />
          <Route path="/recycle" element={<Recycle />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recyclerequests" element={<RecycleStatus />} />
        </Routes>
        </UserContext.Provider>
      </div>
    </>
  );
}

export default App;