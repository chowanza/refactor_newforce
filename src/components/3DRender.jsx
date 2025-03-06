import React from "react";

function Render(props) {
    const { title, src, width, height } = props;

    return (
        <iframe 
            title={title} 
            src={src} 
            frameBorder="0" 
            scrolling="no" 
            marginHeight="0" 
            marginWidth="0" 
            width={width} 
            height={height} 
            allowFullScreen
            >
        </iframe>
    );
}

// Definir propiedades por defecto
Render.defaultProps = {
    title: "3D Render",
    src: "https://3dwarehouse.sketchup.com/embed/5f154ae6-1c0f-4bf5-a577-e4da3b3468f7?token=e3J1Kz5Owh4=&binaryName=s22",
    width: "580",
    height: "326"
};

export default Render;