import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Home from './components/Home';
import Auth from './components/Auth';
import SignOut from './components/SignOut';
import Recycle from './components/Recycle';
import Contact from './components/Contact';
import About from './components/About';
import RecycleStatus from './components/RecycleStatus';
import { Route, Routes} from 'react-router-dom';


function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth  />} />
          <Route path="/signout" element={<SignOut  />} />
          <Route path="/recycle" element={<Recycle />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recyclestatus" element={<RecycleStatus />} />
        </Routes>
      </div>
    </>
  );
}

export default App;