import React, { Component }  from 'react';
import img1 from './resource/gallery-section/01.png';
import img2 from './resource/gallery-section/02.png';
import img3 from './resource/gallery-section/03.png';
import img4 from './resource/gallery-section/04.png';
import img5 from './resource/gallery-section/05.png';
import img6 from './resource/gallery-section/06.png';
import img7 from './resource/gallery-section/07.png';
import img8 from './resource/gallery-section/08.png';
import img9 from './resource/gallery-section/09.png';

class Portfolio extends Component {
    render() {
        return (
             <section className="portfolio">
                <h1>Portfolio</h1>
                <p className="text">
                    A desire to help and empower others between community contributors in 
                    technology began to grow in 2016.
                </p>
                <div className="gallery">
                    <ul id="tabs">
                        <li className="active">ALL CATEGORIES</li>
                        <li>AGENCY</li>
                        <li>ADVERTISING</li>
                        <li>BRANDING</li>
                        <li>DESIGN</li>
                        <li>PHOTOGRAPHY</li>
                    </ul>
                    <div className="gallery-grid">
                        <div className="item">
                            <img src={ img1 } />
                        </div>
                        <div className="item">
                            <img src={ img2 } />
                        </div>
                        <div className="item">
                            <img src={ img3 } />
                        </div>
                        <div className="item">
                            <img src={ img4 } />
                        </div>
                        <div className="item">
                            <img src={ img5 } />
                        </div>
                        <div className="item">
                            <img src={ img6 } />
                        </div>
                        <div className="item">
                            <img src={ img7 } />
                        </div>
                        <div className="item">
                            <img src={ img8 } />
                        </div>
                        <div className="item">
                            <img src={ img9 } />
                        </div>
                    </div>
                </div>
             </section>
        );
    }
}

export default Portfolio