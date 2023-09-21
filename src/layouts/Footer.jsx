import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import css from './Footer.module.css'

function Footer(){

    return(
        <>
            <footer className={css.footer}>
            <ul className={css.social_list}>
                <li>
                <FaFacebook/>
                </li>
                <li>
                <FaInstagram/>
                </li>
                <li>
                <FaLinkedin/>
                </li>
                <li>
                <FaWhatsapp/>
                </li>
            </ul>
           <p className={css.copy_right}>
           <span>
               osvaldocanhama
            </span>
            &copy;2023
           </p>
        </footer>
        </>
    )
}

export default Footer