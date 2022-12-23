import React from 'react';
import { BiCheckDouble } from 'react-icons/bi';
import translate from "../components/i18n/translate";

const About = () => {
    const style = { color: '#d79904', fontSize: '2em' };
    const imgstyle = { width: '800px' }
    return (
        <div>
            <section id="about-video" className="about-video">
                <div className="container" data-aos="fade-up">

                    <div className="row">

                        <div className="col-lg-8 video-box align-self-baseline" data-aos="fade-right" data-aos-delay="100">
                            <img src="https://i.pinimg.com/originals/7e/7c/b4/7e7cb4a78d4ef953f45c26405c3d4ff7.jpg" className="img-fluid" style={imgstyle} alt="Colon Free Zone" />

                        </div>

                        <div className="col-lg-4 pt-3 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
                            <h3>{translate("Link7")}</h3>
                            <p className="fst-italic">
                                {translate("about1")}
                            </p>
                            <ul>
                                <li>< BiCheckDouble style={style} />{translate("about2")}</li>
                                <li>< BiCheckDouble style={style} />{translate("about3")}</li>
                                <li>< BiCheckDouble style={style} />{translate("about4")}</li>
                                <li>< BiCheckDouble style={style} />{translate("about5")}</li>
                                <li>< BiCheckDouble style={style} />{translate("about6")}</li>
                                <li>< BiCheckDouble style={style} />{translate("about7")}</li>
                                <li>< BiCheckDouble style={style} />{translate("about8")}</li>
                                <li>< BiCheckDouble style={style} />{translate("about9")}</li>
                                <li>< BiCheckDouble style={style} />{translate("about10")}</li>
                            </ul>
                            <p>
                                {translate("about11")}
                            </p>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default About