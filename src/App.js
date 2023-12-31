import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Archive from './components/Archive';
import CurrentWeek from "./components/CurrentWeek";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App body-padding content-container">
        <Routes>
          <Route path="/archive" element={<Archive />} />
          <Route index element={<CurrentWeek />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
