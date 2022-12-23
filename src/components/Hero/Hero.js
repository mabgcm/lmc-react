import React from 'react'
import logo from '../../img/logo.png'
import translate from "../i18n/translate";


const Hero = () => {
    return (
        <div>
            <section id="hero" className="hero">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-12">
                            <a className="hero-brand" href="/" title="Home"><img alt="LM&C Logo" src={logo} /></a>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <h1>
                            {translate("home1")}
                        </h1>

                        <p className="tagline">
                            {translate("home2")}
                        </p>
                        <a className="btn btn-full scrollto" href="test">{translate('Link2')}</a>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Hero