import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './About.css'

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    // Animation using gsap and ScrollTrigger
    //bug a corriger xD
    //tokony asiana end ito xD
    gsap.from('.about__img', {
      
      yPercent: 10,
      width:'40%',
    });

    gsap.to('.about__img', {
      scrollTrigger: {
        trigger: '.about',
        start: 'top center',
        end: 'bottom center',
        scrub: 1.9,
      },
      yPercent: 0,
      width:'55%',
    });

    gsap.to('.about__img img', {
      scrollTrigger: {
        trigger: '.about',
        start: 'top center',
        end:'bottom center',
        scrub: 1.9,
      },
      scale: 1.5,
    });

    gsap.to('.about__txt', {
      scrollTrigger: {
        trigger: '.about__wrapp',
        start: 'top bottom',
        scrub: 1.9,
      },
      yPercent: 50,
    });
    gsap.to('.about__txt2', {
      scrollTrigger: {
        trigger: '.about__wrapp',
        start: 'top bottom',
        scrub: 1.9,
      },
      yPercent: -50,
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
            <span className="stroke">about</span>
            <span className="section-title__square"></span>
          </h2>
          <p className="about__p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque esse
            aspernatur fugit debitis quisquam. Quia exercitationem ipsum voluptas
            
          </p>
        </div>


        <div className="about__txt2">
          <h2 className="section-title">
            <span className="stroke">about</span>
            <span className="section-title__square"></span>
          </h2>
          <p className="about__p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque esse
            aspernatur fugit debitis quisquam. Quia exercitationem ipsum voluptas
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
