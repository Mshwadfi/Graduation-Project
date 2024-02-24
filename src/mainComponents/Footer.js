import { logo_url,facebook_icon,x_icon,insta_icon,linkedin_icon } from "../utils/constants";

const Footer = () =>{

    return (
        <div>
            <div class="footer">
                <div class="footer-img">
                    <img src={logo_url} alt=""/>
                </div>
                <div class="footer-logo">
                    <img src={facebook_icon} alt=""/>
                    <img src={insta_icon} alt=""/>
                    <img src={x_icon} alt=""/>
                    <img src={linkedin_icon} alt=""/>
                </div>
                <div class="footer-text">&copy; 2024 Acadmix . All rights reserved  </div>
              </div>

        </div>
    )
}

export default Footer;