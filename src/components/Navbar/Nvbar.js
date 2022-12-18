import React from 'react';
import logo from '../../img/logo1native.png';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import uk from '../../img/uk.png';
// import sp from '../../img/sp.png';
// import { I18nPropvider, LOCALES } from '../i18n';
import translate from "../i18n/translate";



const Nvbar = () => {

    return (
        <div className='m-auto' id='header' style={{ backgroundColor: "#19100b" }}>

            <nav className="d-flex align-items-center navbar navbar-expand-lg navbar-dark" >
                <a className="navbar-brand" href="/"><img id='logo' src={logo} alt="LMC Logo" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item m-auto" id='ntext' >
                            <Link className="nav-link ntext" to='/'>{translate("Link1")}</Link>
                        </li>

                        <li className="nav-item dropdown" id='ntext'>
                            <Link className="nav-link ntext" to='/products'>{translate("Link2")}</Link>
                        </li>
                        <li className="nav-item" id='ntext'>
                            <Link className="nav-link ntext" to='contact'>{translate("Link6")}</Link>
                        </li>
                        <li className="nav-item" id='ntext'>
                            <Link className="nav-link ntext" to='about'>{translate("Link7")}</Link>
                        </li>

                    </ul>
                    <div className="header-social-links d-flex align-items-center mr-auto">
                        <Link className="facebook" to='/'><FaFacebook className='social' /></Link>
                        <Link className="linkedin" to='/'><FaLinkedin className='social' /></Link>
                    </div>
                </div>
            </nav>
        </div >
    )
}

export default Nvbar