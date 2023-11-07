import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './About.css'

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    // Animation using gsap and ScrollTrigger
    //bug a corriger xD
    gsap.from('.about__img', {
      scrollTrigger: {
        trigger: '.about',
        start: 'top bottom',
        scrub: 1.9,
      },
      yPercent: 10,
    }); 

    gsap.to('.about__img', {
        scrollTrigger: {
          trigger: '.about',
          start: 'top bottom',
          scrub: 1.9,
        },
        yPercent: 0,
      }); 

    gsap.to('.about__img img', {
      scrollTrigger: {
        trigger: '.about',
        start: 'top bottom',
        scrub: 1.9,
      },
      scale: 1.5 ,
    });

    gsap.to('.about__txt', {
      scrollTrigger: {
        trigger: '.about__wrapp',
        start: 'top bottom',
        scrub: 1.9,
      },
      yPercent: 50,
    });
  }, []);

  return (
    <div className="about">
      <div className="about__wrapp">
        <div className="about__img">
          <img
            src="https://dmitrinaumov.github.io/Paralax-effect-with-gsap-scrolltrigger/img/2.jpg"
            alt="2"
          />
        </div>
        <div className="about__txt">
          <h2 className="section-title">
            abo<span className="stroke">ut</span>
            <span className="section-title__square"></span>
          </h2>
          <p className="about__p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque esse
            aspernatur fugit debitis quisquam. Quia exercitationem ipsum voluptas
            voluptatum hic enim quo provident culpa possimus cupiditate! Dolorum
            quae doloremque cum rerum ipsam inventore beatae, at odit, velit,
            aspernatur minima! Corporis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
