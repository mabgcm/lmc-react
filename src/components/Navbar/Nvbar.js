import React from 'react'
import logo from '../../img/logo1native.png'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'

const Nvbar = () => {
    return (
        <div className='m-auto' id='header' style={{ backgroundColor: "#19100b" }}>

            <nav className="d-flex align-items-center navbar navbar-expand-lg navbar-dark" >
                <a className="navbar-brand" href="#"><img id='logo' src={logo} alt="LMC Logo" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active" id='ntext' >
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item" id='ntext'>
                            <a className="nav-link ntext" href="#">Manufacturing</a>
                        </li>
                        <li className="nav-item" id='ntext'>
                            <a className="nav-link ntext" href="#">History</a>
                        </li>
                        <li className="nav-item dropdown" id='ntext'>
                            <a className="nav-link ntext dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false"><span>Products</span>

                            </a>
                            <div className="dropdown-menu" style={{ backgroundColor: "#19100b" }}>
                                <a className="dropdown-item" href="#">Product1</a>
                                <a className="dropdown-item" href="#">Product2</a>
                                <a className="dropdown-item" href="#">Product3</a>
                            </div>
                        </li>
                        <li className="nav-item" id='ntext'>
                            <a className="nav-link ntext" href="#">Contact</a>
                        </li>
                        <li className="nav-item" id='ntext'>
                            <a className="nav-link ntext" href="#">About Us</a>
                        </li>

                    </ul>
                    <div class="header-social-links d-flex align-items-center mr-auto">
                        <a href="#" class="facebook"><FaFacebook className='social' /></a>
                        <a href="#" class="linkedin"><FaLinkedin className='social' /></a>
                    </div>
                </div>
            </nav>



        </div >
    )
}

export default Nvbar