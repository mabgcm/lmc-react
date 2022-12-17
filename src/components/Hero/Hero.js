import React from 'react'
import logo from '../../img/logo.png'

const Hero = () => {
    return (
        <div>
            <section id="hero" className="hero">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-12">
                            <a className="hero-brand" href="index.html" title="Home"><img alt="Bell Logo" src={logo} /></a>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <h1>
                            A theme with personality
                        </h1>

                        <p className="tagline">
                            This is a powerful theme with some great features that you can use in your future projects.
                        </p>
                        <a className="btn btn-full scrollto" href="#about">Get Started Now</a>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Hero