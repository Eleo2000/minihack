import ModelViewer from "../comp/ThreeD"
import './css/Home.css'
import Cercla from "./svg/Cercla"

const Home =()=>{
    return(
        <div className="home text-2xl text-center">
            <div className="3d_content ">
                <ModelViewer />
            </div>
            <div className="texte_content  uppercase ">Explorez les etoiles avec miniSpace<br/>
                Votre voyage vers la connaissance commence ici</div>

                <button className="btn-home "> <Cercla/> <div className="txt-btn-home">Explorer</div></button>
        </div>
    )
}

export default Home