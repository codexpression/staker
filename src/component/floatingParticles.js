import React from 'react';

// Importing the background shapes
import shape1 from './resource/shapez/Shape.svg'
import shape2 from './resource/shapez/Shape (1).svg'
import shape3 from './resource/shapez/Shape (2).svg'
import shape4 from './resource/shapez/Shape (3).svg'
import shape5 from './resource/shapez/Shape (4).svg'
import shape6 from './resource/shapez/Shape (5).svg'
import shape7 from './resource/shapez/Shape (6).svg'
import shape8 from './resource/shapez/Shape (7).svg'
import shape9 from './resource/shapez/Shape (8).svg'
import shape10 from './resource/shapez/Shape (9).svg'
import shape11 from './resource/shapez/Shape (10).svg'
import shape12 from './resource/shapez/Shape (11).svg'
import shape13 from './resource/shapez/Shape (12).svg'
import shape14 from './resource/shapez/Shape (13).svg'
import shape15 from './resource/shapez/Shape (14).svg'
import shape16 from './resource/shapez/Shape (15).svg'
import shape17 from './resource/shapez/Shape (16).svg'
import shape18 from './resource/shapez/Shape (17).svg'
import shape19 from './resource/shapez/Shape (18).svg'

// Importing the particles.css file
import './particles.css';

// Creating a functional Component to return the particles
const FloatingParticles = () => {
    return (
        <div id="particle-container">
		<div className="particle">
			<img src={shape1} alt="" />
		</div>
		<div className="particle">
			<img src={shape2} alt="" />
		</div>
		<div className="particle">
			<img src={shape3} alt="" />
		</div>
		<div className="particle">
			<img src={shape4} alt="" />
		</div>
		<div className="particle">
			<img src={shape5} alt="" />
		</div>
		<div className="particle">
			<img src={shape6} alt="" />
		</div>
		<div className="particle">
			<img src={shape7} alt="" />
		</div>
		<div className="particle">
			<img src={shape8} alt="" />
		</div>
		<div className="particle">
			<img src={shape9} alt="" />
		</div>
		<div className="particle">
			<img src={shape10} alt="" />
		</div>
		<div className="particle">
			<img src={shape11} alt="" />
		</div>
		<div className="particle">
			<img src={shape12} alt="" />
		</div>
		<div className="particle">
			<img src={shape13} alt="" />
		</div>
		<div className="particle">
			<img src={shape14} alt="" />
		</div>
		<div className="particle">
			<img src={shape15} alt="" />
		</div>
		<div className="particle">
			<img src={shape16} alt="" />
		</div>
		<div className="particle">
			<img src={shape17} alt="" />
		</div>
		<div className="particle">
			<img src={shape18} alt="" />
		</div>
		<div className="particle">
			<img src={shape19} alt="" />
		</div>
	</div>
    )
}

export default FloatingParticles