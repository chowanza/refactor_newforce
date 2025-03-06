import React from "react";
import "./IconoTitulo.css";

const IconoTitulo = ({ icon, titulo }) => {
    return (
        <div className="expertise_icon_title">
            <img id="icon" src={icon} alt="Project Management"/>
            <h3>{titulo}</h3>
      </div>
      );
    }
export default IconoTitulo;
