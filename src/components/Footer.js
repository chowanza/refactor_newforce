import React from "react"; 

function footer() {
    return (
        <footer className="footer">
                  <p>Contact us at: info@newforce.pro</p>
                  <div className="footer-icons">
                    <a href="https://wa.me/+14076837106" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-whatsapp"></i> {/* Ícono de WhatsApp */}
                    </a>
                    <a href="https://www.instagram.com/newforceconstruction/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i> {/* Ícono de Instagram */}
                    </a>
                    <a href="https://www.facebook.com/share/tGtd6kqaN6ZwLfsR/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook"></i> {/* Ícono de Facebook */}
                    </a>
                  </div>
                  <div>
                    <a href="tel:(941) 337-0680">(941) 337-0680</a>
                    <p>Fax: (941) 337-0682</p>
                  </div>
                  <p>Location: 265 E Marion Avenue, Punta Gorda, FL 33950 (P)</p>
                  <p>© 2024 New Forces Construction. All rights reserved.</p>
                </footer>

    )
}

export default footer;
