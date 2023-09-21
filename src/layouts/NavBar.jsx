import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import css from './Navbar.module.css'

function Navbar(){

    return(
        <>
        
    <nav className="navbar navbar-expand-lg bg-body-tertiary w-auto p-3">
        <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src="logo.png" height={100} width={150} alt=""/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">A FARMÁCIA</a>
                    <hr/>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/sobre">PRODUTOS E SERVIÇOS</a>
                    <hr/>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/contacto">VIDA SAUDÁVEL</a>
                    <hr/>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/contacto">SUSTENTABILIDADE</a>
                    <hr/>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/contacto">ONDE ESTAMOS</a>
                    <hr/>
                </li>
                <li className="nav-item">
                    <FaFacebook/>
                </li>
                <li className="nav-item">
                    <FaInstagram/>
                </li>
                <li className="nav-item">
                    <FaLinkedin/>
                </li>
        </ul>
     </div>
  </div>
</nav>
        
        </>
    )
}

export default Navbar