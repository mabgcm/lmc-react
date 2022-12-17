import React from 'react';
import { GrLanguage } from 'react-icons/gr';
import uk from '../../img/uk.png';
import sp from '../../img/sp.png';


const Language = () => {
    return (
        <div className="lang-menu">
            <div className="selected-lang">
                <img src={uk} alt="Spanish" />
            </div>
            <ul>
                <li><a href="/"><img src={sp} alt="Spanish" /></a></li>
            </ul>
        </div>

    )
}

export default Language