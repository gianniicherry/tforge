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
export const RequestContext = createContext();
export const CategoryContext = createContext();

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [requests, setRequests] = useState([])
  const [category, setCategory] = useState([])
  
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

  useEffect(() => {
    fetch('/requests').then((response) => {
      if (response.ok) {
        response.json().then((request) => {
          setRequests(request)
        });
      }
    });
  }, [currentUser]);

  useEffect(() => {
    fetch("/categories")
      .then(response => response.json())
      .then(data => setCategory(data))
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
        <RequestContext.Provider value={{requests, setRequests}}>
        <CategoryContext.Provider value={{category, setCategory}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth onLogin={handleLogin} />} />
          <Route path="/signout" element={<SignOut onLogout={handleLogout} />} />
          <Route path="/recycle" element={<Recycle />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recyclerequests" element={<RecycleStatus />} />
        </Routes>
        </CategoryContext.Provider>
        </RequestContext.Provider>
        </UserContext.Provider>
      </div>
    </>
  );
}

export default App;