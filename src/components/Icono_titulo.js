import React from "react";
import "./Icono_titulo.css";

const Icono_titulo = ({ icon, titulo,ancho }) => {
    return (
        <div className="expertise_icon_title" style={{width: ancho}}>
            <img id="icon" src={icon} alt="Project Management"/>
            <h3>{titulo}</h3>
      </div>
      );
    }
export default Icono_titulo;
