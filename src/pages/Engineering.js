import '../pages/Engineering.css';
import contactImage from '../img/contact-image.jpg'
import Hero from '../components/HeroS';
import Socials from '../components/Socials';
import Areas from '../components/Areas';

import Construction from '../components/new force construction';
import ContactForm from '../components/ContactForm';
import '@fortawesome/fontawesome-free/css/all.min.css';

import engineerImage from '../img/PARA PAGINA/pngwing.com (40).png';
import renderImage from '../img/3D_Render.png';
import housesImage from '../img/invest.png';
import Header from '../components/Header';

const heroCards = [
    {
        title: '3D Render',
        img: renderImage,
        buttonText: 'See More'
    },
    {
        title: 'Invest with Us',
        img: housesImage,
        buttonText: 'See More'
    }
  ];

function Engineering(){

    return (
        <div className="invest-with-us-page">
          {/* Header */}
          <Header currentPage="engineering"/>
          <Hero
            heroTitle="Engineering & Permitting"
            heroSubtitle="Comprehensive engineering and permitting services for all your construction needs."
            heroImg={engineerImage}
            heroCards={heroCards}
          />
          {/* Hero Section */}
            <Areas/>
            <Construction/>


                 {/*<section  id="contact" className="contact-section">
                  <ContactForm />
                  <img src={contactImage} alt="Contact" />
                </section>*/}
            <Socials/>
                
        </div>

        

    )
}

export default Engineering;
