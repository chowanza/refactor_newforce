import React, { useEffect, useState }  from 'react';
import { AiOutlinePhone, AiOutlineMail, AiOutlineFacebook, AiOutlineEnvironment } from 'react-icons/ai';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { Card } from 'flowbite-react';
import Footer from './Footer';
const cardstyle = 'flex items-center p-4 w-full md:w-64 h-40 rounded-lg '; // Use rounded-lg for rounded borders
const iconColor = 'orange';
const iconSize = 30; 

const Socials = () => {
const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check the screen size on initial render
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    {isMobile ? <Footer /> : (
    <section >
      <div className="flex flex-col space-y-8 justify-center items-center pb-10 text-black">
        <div className="flex flex-col md:flex-row space-x-8 space-y-8 md:space-y-0">
          <Card className={cardstyle}>
            <div className="flex items-center">
              <AiOutlineEnvironment size={iconSize + 20} color={iconColor} />
              <span className="ml-4">265 E Marion Avenue, Punta Gorda, FL 33950 (P)</span>
            </div>
          </Card>
          <Card className={cardstyle}>
            <div className="flex items-center">
              <AiOutlinePhone size={iconSize} color={iconColor} />
              <a href="tel:(941) 337-0680" className="ml-3">(941) 337-0680</a>
            </div>
          </Card>
          <Card className={cardstyle}>
            <div className="flex items-center">
              <AiOutlineMail size={iconSize} color={iconColor} />
              <span className="ml-4">info@newforce.pro</span>
            </div>
          </Card>
        </div>
        <div className="flex flex-col md:flex-row space-x-8 space-y-8 md:space-y-0">
          <Card className={cardstyle}>
            <a href="https://wa.me/+14076837106" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <FaWhatsapp size={iconSize} color={iconColor} />
              <span className="ml-4">+14076837106</span>
            </a>
          </Card>
          <Card className={cardstyle}>
            <a href="https://www.instagram.com/newforceconstruction/" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <FaInstagram size={iconSize} color={iconColor} />
              <span className="ml-4">@newforceconstruction</span>
            </a>
          </Card>
          <Card className={cardstyle}>
            <a href="https://www.facebook.com/share/tGtd6kqaN6ZwLfsR/" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <AiOutlineFacebook size={iconSize} color={iconColor} />
              <span className="ml-4">Facebook/NewForce</span>
            </a>
          </Card>
        </div>
      </div>
    </section>)}
    </>
  );
};

export default Socials;
