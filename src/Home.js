import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (

    <div className="container">
      <h1 className="title">Atividades REACT</h1>
      <nav className="navbar">
        <ul className="menu">
          <li className="dropdown" ref={dropdownRef}>
            <button 
              className="dropbtn"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              Atividades
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-content">
                <li><Link to="/Atv01" onClick={() => setIsDropdownOpen(false)}>Atividade 1</Link></li>
                <li><Link to="/Atv02" onClick={() => setIsDropdownOpen(false)}>Atividade 2</Link></li>
                <li><Link to="/Atv03" onClick={() => setIsDropdownOpen(false)}>Atividade 3</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>


    </div>
 

  );
  
};


export default Home;