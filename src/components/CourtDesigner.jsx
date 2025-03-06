import React, { useState } from "react";
import Render from "./3DRender";
import './CourtDesigner.css'
import ColorPicker from "./ColorPicker";



function DesignCourt() {
  const [isMobile] = useState(window.innerWidth <= 768);
  const getAvailableColors = (courtOption) => {
    if (courtOption === "soccer" || courtOption === "basketball") {
      return [{ name: 'CompetitionGreen', code: "#35563b" }]; // No color options for these court types
    } 
    if (courtOption === "fullCourt") {
      return [{name:'Gray',code:'#616566'}]; // Only Gray for full court
    }
    if(courtOption === "bocce_ball"){
      return [
        { name: 'Beige', code: "#876849" },
        { name: 'Gray', code: "#616566" }
      ]
    }
    if(courtOption==='padel'){
      return [
        { name: 'Orange', code: "#e2652d" },
        { name: 'LightBlue', code: "rgb(34, 54, 91)"},
        { name: 'CompetitionGreen', code: "#35563b" }
      ]
    }
    // For other court types, provide all colors
    return colors; 
  };
  
  const [showRenderOptions, setShowRenderOptions] = useState(true);
  const handleRenderClick = () => {
    if(showRenderOptions){
      setShowRenderOptions(false);
    }
    else{
      setShowRenderOptions(true);
      }
  };
  const colors = [
    { name: 'UltraViolet', code: "#4e2b6d" },
    { name: 'Orange', code: "#e2652d" },
    { name: 'Blue', code: "#22365b" },
    { name: 'Slate', code: "#484c4d" },
    { name: 'SkyBlue', code: "#779ac4" },
    { name: 'ProPurple', code: "#38344f" },
    { name: 'PassionPink', code: "#de4c8a" },
    { name: 'NauticalNavi', code: "#0d1f2b" },
    { name: 'CaribeanBlue', code: "#196c96" },
    { name: 'BrightRed', code: "#98242f" },
    { name: 'LightBlue', code: "#484c4d" },
    { name: 'Gray', code: "#616566" },
    { name: 'CompetitionGreen', code: "#35563b" },
    { name: 'Beige', code: "#876849" }
  ]

  const [courtOption, setCourtOption] = useState("basketball")
  const [mainColor, setMainColor] = useState("UltraViolet");
  const getRenderSource = (courtOption, color) => {
    const source = renderSources[courtOption];
    if (typeof source === "string") {
      return source; // Si no hay colores, devuelve el enlace predeterminado
    }
    return source[color] || source.Blanco; // Devuelve el enlace del color seleccionado o un valor predeterminado
  };
  const renderSources = {
    soccer: "https://3dwarehouse.sketchup.com/embed/cbb7f47c-eeb6-4a95-80ef-960da198908f?token=G743guW0UAc=&binaryName=s22",
    bocce_ball: {
      Gray: "https://3dwarehouse.sketchup.com/embed/5f154ae6-1c0f-4bf5-a577-e4da3b3468f7?token=e3J1Kz5Owh4=&binaryName=s22",
      Beige: "https://3dwarehouse.sketchup.com/embed/a23b8a13-740a-4a6f-a716-cb2467eda63b?token=ktgPuel2eYk=&binaryName=s22"
    },
    basketball: "https://3dwarehouse.sketchup.com/embed/266fe7ee-1a76-4641-b930-325f7ddeb196?token=w-6DJq7w4Is=&binaryName=s21",
    fullCourt: "https://3dwarehouse.sketchup.com/embed/5e2b7ac5-c9eb-401f-8fc3-2ccc18f90c85?token=RujOQlnOjJc=&binaryName=s21",
    tenis: {
      UltraViolet: "https://3dwarehouse.sketchup.com/embed/f2e43043-7bec-4832-ab7a-a58cc8dbd81d?token=AKP3y8GpNQc=&binaryName=s22",
      Orange: "https://3dwarehouse.sketchup.com/embed/36a2542b-e176-437f-b372-7d32d8449e83?token=g0qngdzSI5Q=&binaryName=s22",
      Blue: "https://3dwarehouse.sketchup.com/embed/e191f859-695b-45fd-abfc-5b6116381c7a?token=ERywIZTt6mE=&binaryName=s22",
      Slate: "https://3dwarehouse.sketchup.com/embed/b1fb3f1c-10c1-48a5-92f1-c54a77af51dd?token=ihq6jN5n7fw=&binaryName=s22",
      SkyBlue: "https://3dwarehouse.sketchup.com/embed/de834121-bba2-4640-a757-4be637a839ed?token=s_g76ijK0E8=&binaryName=s22",
      ProPurple: "https://3dwarehouse.sketchup.com/embed/1039b1d3-7c3c-407f-867e-bac2642c9593?token=XtM2M2GVG98=&binaryName=s22",
      PassionPink: "https://3dwarehouse.sketchup.com/embed/588fbc7d-239e-4d91-9e41-821f9ae2f4f7?token=B-IwGXtvHs0=&binaryName=s22",
      NauticalNavi: "https://3dwarehouse.sketchup.com/embed/f9cad793-159c-4c46-9209-61d9378df9e3?token=vKdo8IV6vsw=&binaryName=s22",
      LightBlue: "https://3dwarehouse.sketchup.com/embed/0fbaf03a-d599-48f1-b986-45fae6e95302?token=VzWeuFst-xA=&binaryName=s22",
      Gray: "https://3dwarehouse.sketchup.com/embed/41c47664-525d-42d3-a2da-257dc3624dfe?token=R7_xBbDs5fI=&binaryName=s22",
      CompetitionGreen: "https://3dwarehouse.sketchup.com/embed/72a99f83-9b42-44ef-89a7-16ba017ff4c5?token=nEWGJ0AKWtA=&binaryName=s22",
      CaribeanBlue: "https://3dwarehouse.sketchup.com/embed/fd387a9c-a300-4663-9b3a-fc688ba69e32?token=jrTe0UUzMdY=&binaryName=s22",
      BrightRed: "https://3dwarehouse.sketchup.com/embed/e5ed8599-f291-4edd-9fcc-5388898a5c0f?token=N070oCyvzC8=&binaryName=s22",
      Beige: "https://3dwarehouse.sketchup.com/embed/d8c9acd9-b20a-45a6-b837-8b2e251a3b52?token=HLfAxh24dgw=&binaryName=s22",

    },
    padel: {
      LightBlue: "https://3dwarehouse.sketchup.com/embed/cc0c5d18-8dea-4c53-8661-ceaace543a69?token=3yDpvTnqSjE=&binaryName=s22",
      CompetitionGreen: "https://3dwarehouse.sketchup.com/embed/1fffbaa8-cb12-4def-9ef8-a8aa905998cd?token=CsuEYvby4B4=&binaryName=s22",
      Orange:"https://3dwarehouse.sketchup.com/embed/c8af7a39-4530-49e2-83cc-1f0774071c03?token=GO6AKeVXV5M=&binaryName=s22 "
      },
    pickleball: {
      UltraViolet: "https://3dwarehouse.sketchup.com/embed/afc8f84d-c773-4dcb-b71c-fd433547cc22?token=C_9F-wV137I=&binaryName=s22",
      Orange: "https://3dwarehouse.sketchup.com/embed/9a5fddfa-5135-4e72-b6e7-dddc17dcc31d?token=NewOKeRsgLk=&binaryName=s22",
      Blue: "https://3dwarehouse.sketchup.com/embed/782ce81f-5601-4003-b29c-1bc3f4adef18?token=C0uAvP1fgHA=&binaryName=s22",
      Slate: "https://3dwarehouse.sketchup.com/embed/917dcef9-92fc-40be-9d18-397d41e296fe?token=dWfF-Lq4ozQ=&binaryName=s22",
      SkyBlue: "https://3dwarehouse.sketchup.com/embed/664025a5-dd70-4999-b06b-941a5c3cdf7c?token=MhG8OjCDBjc=&binaryName=s22",
      ProPurple: "https://3dwarehouse.sketchup.com/embed/81d01c11-9652-468d-a066-a0dfc0897e62?token=ZJh_eXk5kKE=&binaryName=s22",
      PassionPink: "https://3dwarehouse.sketchup.com/embed/1676e942-2c15-44e1-acfe-f2d7844aea85?token=7G1Om55ltKU=&binaryName=s22",
      NauticalNavi: "https://3dwarehouse.sketchup.com/embed/c8dbb2b8-2262-47cd-b4bd-806f63dbd42e?token=TT9xeu687gE=&binaryName=s22",
      LightBlue: "https://3dwarehouse.sketchup.com/embed/83562b22-ac3d-4184-95bc-9bf17122b401?token=OJ8DDR2Nsok=&binaryName=s22",
      Gray: "https://3dwarehouse.sketchup.com/embed/24b8c8bb-8114-4fe6-83d2-a0d8a2651225?token=9GI3nE8CvDI=&binaryName=s22",
      CompetitionGreen: "https://3dwarehouse.sketchup.com/embed/307233c1-f6e5-406c-833c-7b9e76023528?token=NdZaLxft8X4=&binaryName=s22",
      CaribeanBlue: "https://3dwarehouse.sketchup.com/embed/3e026971-89f1-4f20-8085-de06f176bdb9?token=S5Vps8Mafd0=&binaryName=s22",
      BrightRed: "https://3dwarehouse.sketchup.com/embed/d0a04251-733d-4bcc-8a82-d961168373f3?token=nYLlkuJ_M2Y=&binaryName=s22",
      Beige: "https://3dwarehouse.sketchup.com/embed/ef5c2ad0-56f1-400c-9e76-c9339c2a873c?token=cM4H7IiOWTA=&binaryName=s22"
    }
  }

  return (
    <div style={{marginTop:"20px"
    }}>
      {!showRenderOptions && <button className="Render_btn" onClick={handleRenderClick}>Volver</button>}
      <div className="Main_Render">
        {showRenderOptions && (
          <div className="Render_options backdrop-blur" >
          <h2>Design Your Court</h2>

          {/* Width Input */}


          {/* Units */}
          <div className="ParSelect">
            <ColorPicker titulo="Main Court Color" colors={getAvailableColors(courtOption)} onChange={(colorName => setMainColor(colorName))} />
          </div>
          {/* Court Type */}
          <div className="Court_Type">
            <div className="Par">
              <input
                type="radio"
                id="Basketball"
                name="courtOption"
                checked={courtOption === "basketball"}
                onChange={() => setCourtOption("basketball")}
              />
              <label htmlFor="Basketball">Basketball</label>
            </div>
            <div className="Par">
              <input
                type="radio"
                id="FullCourt"
                name="courtOption"
                checked={courtOption === "fullCourt"}
                onChange={() => setCourtOption("fullCourt")}
              />
              <label htmlFor="FullCourt">Full Court</label>
            </div>
            <div className="Par">
              <input
                type="radio"
                id="Soccer"
                name="courtOption"
                checked={courtOption === "soccer"}
                onChange={() => setCourtOption("soccer")}
              />
              <label htmlFor="Soccer">Soccer</label>
            </div>
            <div className="Par">
              <input
                type="radio"
                id="Tenis"
                name="courtOption"
                checked={courtOption === "tenis"}
                onChange={() => setCourtOption("tenis")}
              />
              <label htmlFor="Tenis">Tenis</label>
            </div>
            <div className="Par">
              <input
                type="radio"
                id="Bocce_ball"
                name="courtOption"
                checked={courtOption === "bocce_ball"}
                onChange={() => setCourtOption("bocce_ball")}
              />
              <label htmlFor="Bocce_ball">Bocce Ball</label>
            </div>
            <div className="Par">
              <input
                type="radio"
                id="Padel"
                name="courtOption"
                checked={courtOption === "padel"}
                onChange={() => setCourtOption("padel")}
              />
              <label htmlFor="Padel">Padel</label>
            </div>
            <div className="Par">
              <input
                type="radio"
                id="Pickleball"
                name="courtOption"
                checked={courtOption === "pickleball"}
                onChange={() => setCourtOption("pickleball")}
              />
              <label htmlFor="Pickleball">Pickleball</label>
            </div>
          </div>

          {/* Select Options */}
          <button className="Render_btn" onClick={handleRenderClick}>Render</button>
        
        </div>
  )}

        {/* Render Section */}
        {(isMobile ? !showRenderOptions : true) && (<div className="Render_Container">
          <Render width="100%" height="700vh" src={getRenderSource(courtOption, mainColor)} />
        </div>
        )}
      </div>
      

      
    </div>
  );
}

export default DesignCourt;
