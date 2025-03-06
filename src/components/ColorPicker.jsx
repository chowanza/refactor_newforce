import React, { useState } from "react";
import "./ColorPicker.css";
import flecha from '../img/flecha.png';

const ColorPicker = (props) => {
  const { colors, titulo, onChange } = props;

  const [selectedColor, setSelectedColor] = useState(colors[0].name); // Estado inicial
  const [isOpen, setIsOpen] = useState(false);

  const handleColorClick = (colorName) => {
    setSelectedColor(colorName); // Actualiza el nombre del color seleccionado
    onChange(colorName); // Llama a la función onChange con el nombre del color
    setIsOpen(false); // Cierra el menú
  };

  return (
    <div className="color-picker-container">
      {/* Título desplegable */}
      <div onClick={() => setIsOpen(!isOpen)} className="Color_property">
        <h2 className="title">{titulo}</h2>
        <img src={flecha} alt="" style={{ width: "50px" }} />
      </div>
      {/* Opciones de colores desplegables */}
      {isOpen && (
        <div className="color-options">
          {colors.map((color) => (
            <div
              key={color.name}
              className="color-option"
              style={{
                backgroundColor: color.code,
                border: selectedColor === color.name ? "2px solid #ff8200" : "",
              }}
              onClick={() => handleColorClick(color.name)}
            ></div>
          ))}
        </div>
      )}

      {/* Cuadro con el color seleccionado */}
      <div className="selected-color-box">
        <span>Selected Color:</span>
        <div
          className="color-box"
          style={{ backgroundColor: colors.find(c => c.name === selectedColor)?.code }}
        ></div>
      </div>
    </div>
  );
};

export default ColorPicker;