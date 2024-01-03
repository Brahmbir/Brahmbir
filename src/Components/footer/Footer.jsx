import { AiOutlineGithub } from "react-icons/ai"
import { BiLogoLinkedin } from "react-icons/bi"
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="foot" >
            <ul className="">
                <li>
                    <a href="https://linkedin.com/in/brahm-bir-singh-6a9115245" target="blank" >
                        {/* Linkedin */}
                        <BiLogoLinkedin />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Brahmbir" target="blank">
                        {/* Github */}
                        <AiOutlineGithub />
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
