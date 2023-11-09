import { gsap } from "gsap-trial";
import SplitText from "gsap-trial/SplitText";
import ModelViewer from "../comp/ThreeD"
import './css/Home.css'
import Cercla from "./svg/Cercla"
import { useEffect, useRef } from "react";
import Scroller from "../comp/Scroller";
import About from "../comp/About";
import ScrollAnimation from "../comp/ScrollAnimation";
import Portal from "../comp/Portal";

/* The following plugin is a Club GSAP perk */
gsap.registerPlugin(SplitText)
const Home =()=>{

    const text_hero = useRef();
    

    useEffect(() => {
        // Sélectionnez l'élément texte avec la référence
        const textElement = text_hero.current;
        text_hero.current.style.opacity = 1;
        // Créez une instance SplitText
        const split = new SplitText(textElement, { type: 'lines,words,chars' });

        // Créez une animation avec GSAP
        gsap.from(split.chars, {
            duration: .5,
            ease: 'back.out',
            y: 10,
            opacity: 0,
            stagger: 0.05,
        });
    }, []);

    return(
        <>
        <div className="home text-2xl text-center">
            <div className="3d_content ">
                <ModelViewer />
            </div>
            <div ref={text_hero} style={{opacity:0}} className="texte_content  uppercase ">Explorez les etoiles avec <span>miniSpace</span><br/>
                Votre voyage vers la connaissance commence ici</div>

                <button className="btn-home "> <Cercla/> <div className="txt-btn-home">Explorer</div></button>
                <Scroller />

                
        </div>
            <About/>

            <ScrollAnimation/>

            <Portal/>
            <div className="footer h-80">
                footer
            </div>
        </>
    )
}

export default Home