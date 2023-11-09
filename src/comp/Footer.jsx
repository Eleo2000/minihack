import gsap from 'gsap';
import Logo from '../components/svg/Logo'
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {

    const scrollToHeader = () => {
        // Utilisez la méthode native window.scrollTo pour effectuer le défilement
        window.scrollTo({
          top: 0, // Position de défilement vers le haut de la page
          behavior: 'smooth', // Défilement en douceur
        });
      };

    return (
        <>
            <div className="footer">
                <div className="top">
                    <Link to="/" className="logo"><Logo/></Link>
                    <div className="spans uppercase">
                        <span className="footer-span underr">securite</span>
                        <span className="footer-span underr"> mentions legales</span>
                        <span className="footer-span underr">politique de confidentialite</span>
                        <span className="footer-span underr">support</span>
                        <span className="footer-span underr">accessibilitE</span>

                    </div>
                </div>
                <div className="evo">2023 Evolutech - tous droits reserves</div>
                <div onClick={scrollToHeader} className="toTop underr">revenir vers le haut</div>
            </div>
        </>
    )
}

export default Footer 