import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
	useEffect(() => {
		// Animation pour la première div
		//A rendre en tant que function
		gsap.to('.div1', {
			opacity: 0,
			y: -100,
			scrollTrigger: {
				trigger: '.div1',
				start: 'top center',
				end: 'bottom center',
				scrub: 1,
				markers: true,
			},
		});
		gsap.to('.div2', {
			opacity: 0,
			y: -100,
			scrollTrigger: {
				trigger: '.div2',
				start: 'top center',
				end: 'bottom center',
				scrub: 1,
				markers: true,
			},
		});

		// Animation pour la deuxième div
		gsap.fromTo('.div2', { opacity: 0, y: -20, }
			, {
				opacity: 1,
				y: 0,
				scrollTrigger: {
					trigger: '.div1',
					start: 'top center',
					end: 'bottom center',
					scrub: 1,
				},
			});
			// A rendre en tant que function
		gsap.fromTo('.one', { opacity: 0, y: -20, },

			{
				opacity: 1, y: 0,

				scrollTrigger: {
					trigger: '.div1',
					start: 'top center',
					end: 'bottom center',
					scrub: 2,
				},
			}
		);


		gsap.fromTo('.div3', { opacity: 0, y: -20, },

			{
				opacity: 1, y: 0,

				scrollTrigger: {
					trigger: '.div2',
					start: 'top center',
					end: 'bottom center',
					scrub: 1,
				},
			}
		);

		// Nettoyage des déclencheurs de défilement lorsque le composant est démonté
		return () => {
			ScrollTrigger.getAll().forEach(trigger => trigger.kill(true));
		};
	}, []);

	return (
		<div className="animation-container h-3/4">
			<div className="div1 h-1/3">Contenu de Div 1</div>
			<div className="div2 h-1/3">

				<div className="one">image 1</div>
				<div className="deux ">duooooooo</div>

			</div>
			<div className="div3 h-1/2">

				<div className="three">troiss</div>
				<div className="four ">image 2</div>

			</div>
		</div>
	);
};

export default ScrollAnimation;