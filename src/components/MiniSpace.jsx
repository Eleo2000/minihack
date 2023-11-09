import { useState,useEffect,useRef } from "react"
import { fabric } from "fabric";


const MiniSpace =()=>{

    const canvasRef = useRef(null);

    const [sizeH,setSizeH] = useState(0)
    const [canvas,setCanvas] = useState(null)
    const [canvasInited,setCanvasInited] = useState(false)

    useEffect(() => {
        console.log("Use effect 1");
        const cc = document.querySelector('#Header')
        console.log(`sizeH : ${window.innerHeight - cc.offsetHeight}`);
        setSizeH(window.innerHeight - cc.offsetHeight)
    }, []);

    useEffect(()=>{
        
        if(!canvasInited){

            console.log(`sizeH initCanvas : ${sizeH}`)
            const cc = document.querySelector('#Header')
            setCanvas(new fabric.Canvas('fabricC',{
                width:window.innerWidth,
                height:window.innerHeight - cc.offsetHeight
            }))

            setCanvasInited(true)
        }
    },[sizeH])


    let timeout;
    window.addEventListener('resize',()=>{

        clearTimeout(timeout);
        // Définissez un délai pour exécuter la fonction de gestionnaire après un court délai (par exemple, 200 ms)

        timeout = setTimeout(() => {
            // Votre logique de gestion du redimensionnement ici
            const cc = document.querySelector('#Header')
            setSizeH(window.innerHeight - cc.offsetHeight)
    
            console.log("resize canvas")
    
            if(canvas){
                canvas.setWidth(window.innerWidth)
                canvas.setHeight(window.innerHeight - cc.innerHeight)

                canvasRef.current.style.width = window.innerWidth + 'px';
                canvasRef.current.style.height = (window.innerHeight - cc.innerHeight) + 'px';

                canvas.renderAll()
            }
        }, 300);
        
    })

    function initFabric(){

        console.log(`Init Fabric : ${sizeH}`)
        

        // create a rectangle object
        var rect = new fabric.Rect({
            left: 100,
            top: 100,
            fill: 'blue',
            width: 50,
            height: 50

        });

        // "add" rectangle onto canvas
        canvas.add(rect);
    }

    return(
        <div  style={{ height: `${sizeH}px`,maxHeight:`${sizeH}px` }}  className="text-xs MiniSpace bg-red-500 h-screen relative">

            
        
            <canvas ref={canvasRef} id="fabricC"></canvas>

            {!canvasInited && 
            <div className="absolute top-2 left-2 p-2"> Canvas non initialisé </div>}

            {canvasInited && 
            <div className="absolute top-2 left-2 bg-white text-gray-600 rounded flex items-center">
                
                <button className="flex items-center justify-center rounded-l hover:bg-gray-100 p-1"> <span className="material-icons">crop_square</span> </button>
                <button className="flex items-center justify-center rounded-l hover:bg-gray-100 p-1"> <span className="material-icons">edit</span> </button>

            </div>}

        </div>
    )
}



export default MiniSpace