
// import React, { useState } from "react";

// import "./index.css";
// import { Link, NavLink } from "react-router-dom";

//  const MyNavBar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       <span className="title logo" >
//         Website
//       </span>
//       <span className="menu" onClick={() => setMenuOpen(!menuOpen)}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </span>
//        <div className="menu-lists" > {/*style={{height:"0%",width:"0%"}} */}
//       <ul className={menuOpen ? "open" : ""} >
//         <li>
//           <NavLink to="/about">Home</NavLink>
//         </li>
//         <li>
//           <NavLink to="/Searchs">Search</NavLink>
//         </li>
//         <li>
//           <NavLink to="/Orders">Orders</NavLink>
//         </li>
//         <li>
//           <NavLink to="/Cart">Cart</NavLink>
//         </li>
//         <li>
//           <NavLink to="/Profile">Profile</NavLink>
//         </li>
//         <li>
//           <NavLink to="/About">About</NavLink>
//         </li>
//       </ul>
//       </div>
//     </nav>
//   );
// };


// export {MyNavBar}


import react,{ useState } from "react";

import "./index.css";
import { Link, NavLink } from "react-router-dom";

 const MyNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav_titles"> 
      <div className="title" >
        Website
      </div >
      <div  className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div ></div>
     
       <div className="menu-lists" > {/*style={{height:"0%",width:"0%"}} */}
      <ul className={menuOpen ? "open" : ""} >
        <li>
          <NavLink to="/Home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Search">Search</NavLink>
        </li>
        <li>
          <NavLink to="/Orders">Orders</NavLink>
        </li>
        <li>
          <NavLink to="/Cart">Cart</NavLink>
        </li>
        <li>
          <NavLink to="/Profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
      </ul>
      </div>
    </nav>
  );
};


export {MyNavBar}
