import { useEffect } from 'react';
import './Transition.css'
import gsap from 'gsap';


const Transition = () => {

    function animateFromTop() {
        let tl = gsap.timeline({ ease: "power4.inOut" });
        tl.to(".tile", {
            duration: 0.4,
            height: "50vh",
            top: "0%",
            delay: 0.2,
            stagger: 0.05,
        });
        tl.to(".tile", {
            duration: 0.4,
            height: "0vh",
            top: "0%",
            delay: 0.2,
            stagger:  0.05,
        });
        tl.set(".tile", { top: "0", height: "0" });
    }
    function animateFromTop2() {
        let tl = gsap.timeline({ ease: "power4.inOut"  });
        tl.set(".tile1", { top: "100%", height: "0" });

        tl.to(".tile1", {
            duration: 0.4, 
            height: "100%",
            top: "0%", 
            delay: 0.2,
            stagger: 0.05,
        });
        tl.to(".tile1", {
            duration: 0.4,
            height: " 0vh",
            top: "100%",
            delay: 0.2,
            stagger: 0.05,
            onComplete: () => {
                // Fonction à exécuter lorsque l'animation est terminée
                //console.log('L\'animation est terminée !');
                //props.change()
              }
        });
        tl.set(".tile1", { top: "100%", height: "0" });
        
    }

    useEffect(() => {

        animateFromTop() 
        animateFromTop2() 
        

    }, [])



    return (
        <>
            <div className="contenaire">

                <div className="transition">

                    <span className="tile"></span>
                    <span className="tile"></span>
                    <span className="tile"></span>
                    <span className="tile"></span>
                    <span className="tile"></span>
                    <span className="tile"></span>
                    <span className="tile"></span>
                    <span className="tile"></span>

                </div>
                <div className="transition2"> 

                    <span className="tile1"></span>
                    <span className="tile1"></span>
                    <span className="tile1"></span>
                    <span className="tile1"></span>
                    <span className="tile1"></span>
                    <span className="tile1"></span>
                    <span className="tile1"></span>
                    <span className="tile1"></span>

                </div>
            </div>
        </>
    )
}

export default Transition