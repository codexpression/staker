import React, { Component } from "react";
import FloatingParticles from './floatingParticles';
import NavBar from './Navbar'

class Header extends Component {
    render() {
        return (
             <header>
                 <FloatingParticles />
                 <NavBar />

                 <div id="hero">
                     <p>We're your best business partner</p>
                     <h2>Hello, we are Staker. We create engaging experiences. 
                         Nice to meet you.
                     </h2>
                 </div>
             </header>
        );
    }
}

export default Header