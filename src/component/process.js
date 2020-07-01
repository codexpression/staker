import React from 'react';
import icon1 from './resource/work-process/icon1.svg';
import icon2 from './resource/work-process/Icon2.svg';
import icon3 from './resource/work-process/Icon3.svg';

const Process = () => {
    return (
        <section className="work-process">
            <h1>Work Process</h1>
            <p className="text">
                A desire to help and empower others between community contributors in 
                technology began to grow in 2016.
            </p>
            <div className="process-list">
                <div className="process">
                    <img src={ icon1 } alt="Process 1:Strategy and Planning" />
                    <h4>Strategy and Planning</h4>
                    <p>
                        Content Strategy, Research, Oppurtunity analysis and strategic planning, 
                        Branding Strategy, Production planning.
                    </p>
                </div>
                <div className="process">
                    <img src={ icon2 } alt="Process 2:UX Design and Prototyping" />
                    <h4>UX Design and Prototyping</h4>
                    <p>
                        Content Strategy, Research, Oppurtunity analysis and strategic planning, 
                        Branding Strategy, Production planning.
                    </p>
                </div>
                <div className="process">
                    <img src={ icon3 } alt="Process 1:Stategy and Planning" />
                    <h4>UI Design and Final Testing</h4>
                    <p>
                        Content Strategy, Research, Oppurtunity analysis and strategic planning, 
                        Branding Strategy, Production planning.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Process