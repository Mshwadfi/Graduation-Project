import { Link } from "react-router-dom";
import { hero_img } from "../utils/constants";



const Hero = () =>{

    
    return(
        <div className="landing-section" id="landing">
        <div className="container landing-container">
            <div className="landing-content">
                <h1 className="landing-heading"><span className="text-highlight">Studying</span> Online is now much easier</h1>
                <p className="landing-description">Acadmix is an interesting platform that will teach you in a more interactive way.</p>
                <div className="landing-buttons">
                    <Link to='/login'><button className="login-button" >Log In</button></Link>
                    <Link to='/signup'><button className="signup-button">Sign Up</button></Link>
                </div>
            </div>
            <img src={hero_img} alt="" className="landing-image" />
        </div>
    </div>

    )
}

export default Hero;