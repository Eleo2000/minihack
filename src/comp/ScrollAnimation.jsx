import React, { useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollAnimation.css'
import Cercla from '../components/svg/Cercla';

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
	
	useLayoutEffect(() => {
		// Animation pour la première div
		//A rendre en tant que function
		
		gsap.to('.pin-content', {
			scrollTrigger: {
			  trigger: '.animation-container', // L'élément qui déclenche l'épinglage
			  start: 'top top', // Quand commencer l'épinglage (vous pouvez ajuster cette valeur)
			  end: '+=100%', // Où l'épinglage se termine (vous pouvez ajuster cette valeur)
			  pin: true, // Épingler l'élément
			  markers: true, // Afficher des marqueurs pour le débogage (facultatif, retirez en production)
			},
		  });


		  gsap.from('.modely1', {
			opacity:0,
			y: 100,
			
			
		});
		  gsap.to('.modely1', {
			opacity:1,
			y: 0,
			duration:1,
			scrollTrigger: {
				trigger: '.animation-container',
				start: 'top top',
				end: 'top center',
				scrub:1.6,

			},
		});


		gsap.to('.div1', {
			opacity:0,
			y: -200,
			duration:0.8,
			scrollTrigger: {
				trigger: '.div1',
				start: 'top top',
				end: 'bottom center',
				scrub:1.9,
				pin: true,
				markers: true,

			},
		});
		gsap.from('.div2', {
			opacity:0,
			y: 100,
			
		});
		gsap.to('.div2', {
			opacity:1,
			y: -350,
			duration:0.8,
			scrollTrigger: {
				trigger: '.div1',
				start: 'top top',
				end: 'bottom center',
				scrub:1.9,
				

			},
		});
		gsap.from('.modely2', {
			opacity:0,
			y: 100,
			
		});
		gsap.to('.modely2', {
			opacity:1,
			y: 0,
			duration:2,
			scrollTrigger: {
				trigger: '.div1',
				start: 'top center',
				
				scrub:1.9,

			},
		});
		

		// Animation pour la deuxième div
		/*gsap.fromTo('.div2', { opacity: 0, y: -20, }
			, {
				opacity: 1,
				y: 0,
				scrollTrigger: {
					trigger: '.div1',
					start: 'top center',
					end: 'bottom center',
					scrub: 1,
				},
			});*/
		

		// Nettoyage des déclencheurs de défilement lorsque le composant est démonté
		return () => {
			ScrollTrigger.getAll().forEach(trigger => trigger.kill(true));
		};
	}, []);

	return (
		<div className="animation-container func">
			<div className="titre-func text-center text-2xl uppercase">
				Le Pouvoir de miniSpace
			</div>
			<div className="div1 functionXd h-1/3">

				<div className="modely1">image 0</div>
				<div className="deux carda">
					<div className="titre_func uppercase">Atout 1</div>
					<div className="info">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque esse aspernatur fugit debitis quisquam.
					 Quia exercitationem ipsum voluptas voluptatum hic enim quo provident culpa possimus cupiditate! 
					 Dolorum quae doloremque cum rerum ipsam inventore beatae, at odit, velit, aspernatur minima! Corporis.
					</div>
					<button className='btn-func btn-home'><Cercla/> <div className="txt-btn-home">voir</div></button>
				</div>

			</div>

			<div className="div2 functionXd h-1/3">

				<div className="modely2">image 2</div>
				<div className="deux carda">
					<div className="titre_func uppercase">Atout 2</div>
					<div className="info">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque esse aspernatur fugit debitis quisquam.
					 Quia exercitationem ipsum voluptas voluptatum hic enim quo provident culpa possimus cupiditate! 
					 Dolorum quae doloremque cum rerum ipsam inventore beatae, at odit, velit, aspernatur minima! Corporis.
					</div>
					<button className='btn-func btn-home'><Cercla/> <div className="txt-btn-home">voir</div></button>
				</div>

			</div>
			
		</div>
	);
};

export default ScrollAnimation;