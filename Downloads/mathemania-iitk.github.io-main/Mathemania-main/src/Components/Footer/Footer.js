import React from "react";
import { useLocation } from "react-router-dom";
import FooterContact from "./FooterContact";
import { NavLink, useParams } from "react-router-dom";
import "../../App.css";

const Footer = ({}) => {
  const location = useLocation();
  let { id } = useParams();
  return (
    location.pathname !== "/tasks" && location.pathname !== "/onlinetest" && location.pathname !== "/task/:id" && (
      <footer>
        <div className="content">
          <div className="about">
            <p className="answer">
            If you choose to participate in this exciting competition of the best brains, you would follow Finnick Odair on his mathematical journey to the dystopian adventure</p>
            < FooterContact />
          </div>
          <div className="footer-nav">
          <NavLink
          className="menuButton"
          to="/"
          exact
          activeStyle={{
            fontWeight: "bold",
            fontSize: "20px",
            color: "#3ed1b8",
          }}
        >
          Home
        </NavLink>
        <NavLink
          className="menuButton"
          to="/tasks"
          activeStyle={{
            fontWeight: "bold",
            fontSize: "20px",
            color: "#3ed1b8",
          }}
        >
          Tasks
        </NavLink>
        
        <NavLink
          className="menuButton"
          to="/404"
          activeStyle={{
            fontWeight: "bold",
            fontSize: "20px",
            color: "#3ed1b8",
          }}
        >
          LeaderBoard
        </NavLink>
        <NavLink
          className="menuButton"
          to="/contact"
          activeStyle={{
            fontWeight: "bold",
            fontSize: "20px",
            color: "#3ed1b8",
          }}
        >
          Contact
        </NavLink> 
          </div>
           <div className="footer-nav">
           <div className="footer-nav">
          
          </div>
     </div>
          <span id="copyrights">Copyright Reserved. STAMATICS© 2022 </span>
        </div>
      </footer>
    )
  );
};

export default Footer;
