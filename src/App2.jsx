import { gsap } from "gsap-trial";
import SplitText from "gsap-trial/SplitText";

import { useEffect, useRef, useState } from "react";

import Scroller from "./comp/Scroller";
import About from "./comp/About";
import ScrollAnimation from "./comp/ScrollAnimation";
import Transition from "./comp/Transition";

import ModelViewer from "./comp/ThreeD";

/* The following plugin is a Club GSAP perk */
gsap.registerPlugin(SplitText)


function App() {

    const  [isLoadd, setisLoadd] = useState(true)

    const textRef = useRef(null);

    //randomize text xD
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_";
    let interval = null;

    const handleMouseOver = (event) => {
        const target = event.target;
        const initialValue = target.getAttribute('data-value');
        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
            const currentValue = initialValue
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return initialValue[index];
                    }

                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            target.innerText = currentValue;

            if (iteration >= initialValue.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);
    };



    //fin randomize text xD

    useEffect(() => {
        // Sélectionnez l'élément texte avec la référence
        const textElement = textRef.current;

        // Créez une instance SplitText
        const split = new SplitText(textElement, { type: 'lines,words,chars' });

        // Créez une animation avec GSAP
        gsap.from(split.chars, {
            duration: .8,
            ease: 'back.out',
            y: 20,
            opacity: 0,
            stagger: 0.05,
        });
    }, []);

    const hovera = ({ currentTarget }) => {
        gsap.to(currentTarget, {

        })
    }
    const leava = ({ currentTarget }) => {
        gsap.to(currentTarget, {

        })

        const target = event.target;
        const initialValue = target.getAttribute('data-value');
        target.innerText = initialValue;
        clearInterval(interval);
    }
    const change =()=>{
        setisLoadd(!isLoadd)
    }


    return (
        <>
            
            {isLoadd && <Transition change={change} />}

            <h1 className="flex justify-center items-center font-semibold text-4xl pt-8 mb-8"
                onMouseEnter={handleMouseOver}
                onMouseLeave={leava}
                data-value="MINIHACK"
            >
                MINIHACK
            </h1>

            <div className="toi_d flex justify-center ">
                test 3D ito xD

                <ModelViewer/>
            </div>

            <h1 onMouseEnter={handleMouseOver}
                onMouseLeave={leava}
                data-value="HYPER STYLISH XD"
            >
                HYPER STYLISH XD
            </h1>

            <div ref={textRef} className="text_splita semi-bold truncate text-2xl">
                Vous avez vu cette animation?
            </div>

            <Scroller />

            <About/>

            <ScrollAnimation/>



        </>
    )
}

export default App
