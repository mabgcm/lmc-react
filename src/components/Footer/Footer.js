import React from 'react';
import { Link } from 'react-router-dom';
import translate from "../i18n/translate";

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="bottom">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-xs-12 text-lg-start text-start">
                            <p className="copyright-text">
                                &copy; Copyright <strong>LM&C Panama</strong>. All Rights Reserved
                            </p>
                            <div className="credits">
                                Designed by <a href="https://www.linkedin.com/in/mattalibugucam/" target="_blank">M.A.Bugucam</a>
                            </div>
                        </div>

                        <div className="col-lg-6 col-xs-12 text-lg-right text-center">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <Link to='/'>{translate("Link1")}</Link>
                                </li>

                                <li className="list-inline-item">
                                    <Link to='products'>{translate("Link2")}</Link>
                                </li>

                                <li className="list-inline-item">
                                    <Link to='contact'>{translate("Link6")}</Link>
                                </li>

                                <li className="list-inline-item">
                                    <Link to='about'>{translate("Link7")}</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer