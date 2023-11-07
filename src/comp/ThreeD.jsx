import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { a, useSpring } from '@react-spring/three';

import './ThreeD.css'
import { gsap } from "gsap-trial";


gsap.registerPlugin()
function ModelViewer() {

    const controlsRef = useRef();
    
    const rotationSpring = useSpring({
        from: { rotation: [-15, 45, -3] },
        to: async (next) => {
            while (true) {
                const t = Date.now() * 0.001; // Obtenir le temps actuel en secondes
                await next({ rotation: [-15 + Math.cos(t / 4) / 8, 45 + Math.sin(t / 3) / 4, -3 + Math.sin(t / 2) / 8] });
            }
        },
        config: { duration: 800 }, // Durée d'une boucle complète en millisecondes
    });
    const springConfig = {
        mass: 1,       // Mass of the object
        tension: 100,  // Tension (stiffness) of the spring
        friction: 12,  // Friction (damping) of the spring
        precision: 0.01, // Precision of the animation
        duration : 1000, // Precision of the animation
        velocity : 0.043
    };
    const scaleSpring = useSpring({
        from: { scale: [0.3, 0.3, 0.3] },
        to: { scale: [1, 1, 1] },
        config: springConfig,
        
    });

    const positionSpring = useSpring({
        from: { position: [0, 0, -10] },
        to: async (next) => {
            while (true) {
                const t = Date.now() * 0.001; // Obtenir le temps actuel en secondes
                await next({ position: [0, (0.5 + Math.cos(t / 2)) / 7, 0] });
            }
        },
        config: { duration: 800 }, // Durée d'une boucle complète en millisecondes
    });
    
    
    const handleCameraChange = () => {
         const { target, object } = controlsRef.current;
        console.log('Position de la caméra :', object.position.toArray());
        console.log('Cible de la caméra :', target.toArray());
    
    };



    return (
        <Canvas onPointerUp={handleCameraChange} camera={{ position:[0, 0, 30] , fov: 30 }}>
            <ambientLight intensity={0.7} />
            <pointLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, -5]} castShadow />

            <ModelPrimitive   position={positionSpring.position} rotation={rotationSpring.rotation}
                
            />

            <OrbitControls ref={controlsRef} enableDamping dampingFactor={0.05} target={[0, 0, 0]} />
        </Canvas>
    );
}

function ModelPrimitive({ rotation,scale, position }) {

    const hero = useRef();
    const gltf = useGLTF('/ekkos_sword.glb');

    const animateHero = () => {
        gsap.to(hero.current.position, {
          y: -100,
          x: -10,
           // Position de départ (par exemple, depuis le haut)
           // Position de départ (par exemple, depuis le haut)
          duration: .8, // Durée de l'animation en secondes
          ease: 'power2.inOut', // Fonction d'animation (facultatif, ajustez selon vos besoins)
        });
      };
    
    

    useEffect(() => {

        animateHero() 
         
        

    }, [])

    return (
        <a.primitive ref = {hero} object={gltf.scene} scale={scale} rotation={rotation} position={position} />
    );
}


export default ModelViewer;
