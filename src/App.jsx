import react from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './components/pages/NotFound'
import AddUser from './components/users/AddUser'
import User from './components/users/User';
import EditUser from './components/users/EditUser';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route exact path="/users/add" element={<AddUser/>} />
          <Route exact path="/users/edit/:id" element={<EditUser/>} />
          <Route exact path="/users/:id" element={<User />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
