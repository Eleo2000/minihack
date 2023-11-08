import { useLayoutEffect } from 'react';
import './Portal.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);
const Portal = () => {

    useLayoutEffect(() => {
		


        gsap.from('.perso', {
			
			scale: 1,
            y:10,
		});
        gsap.to('.perso', {
			
			scale: 1.,
            y:10,
			duration:0.4,
			scrollTrigger: {
				trigger: '.content-portal',
				start: 'top center',
                end:'bottom center',
				scrub:1.9,
				markers: true,

			},
		});
        gsap.from('.terre-l , .terre-r  ', {
			
			scale: 1,
            y:20,
		});
        gsap.to('.terre-l , .terre-r ', {
			
			scale: 1.2,
			duration:0.8,
            y:0,
            
            stagger:0.12,
			scrollTrigger: {
				trigger: '.content-portal',
				start: 'top center',
                end:'bottom center',
				scrub:1.9,
				markers: true,
                
			},
		});
        gsap.from('.arbre  ', {
			
			scale: 1,
            x:20,
            y:50,
		});
        gsap.to('.arbre ', {
			
			scale: 1.1,
			duration:0.9,
            y:50,
            x:-20,
            stagger:0.12,
			scrollTrigger: {
				trigger: '.content-portal',
				start: 'top center',
                end:'bottom center',
				scrub:1.9,
				markers: true,
                
			},
		});
        /*gsap.from('.titra-portal', {
            yPercent: 100,
            opacity:0,
            scrollTrigger: {
                trigger: '.titra-portal',
                start: "top center",
                end: "end end",
                scrub: 1
            }
        })*/

		// Nettoyage des déclencheurs de défilement lorsque le composant est démonté
		return () => {
			ScrollTrigger.getAll().forEach(trigger => trigger.kill(true));
		};
	}, []);

    return (
        <>

            <div className="portal">
                <div className="titra-portal text-center text-2xl uppercase">
                Etes-vous prEt A embrasser l'aventure qui libErera tout votre potentiel ?
                </div>

                <div className="content-portal">
                    <div className="portal-enter">
                        <div className="back imagex"></div>
                        <div className="arbre imagex"></div>
                        <div className="terre-p imagex"></div>
                        <div className="terre-r imagex"></div>
                        <div className="terre-l imagex"></div>
                        <div className="perso imagex"></div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default Portal;