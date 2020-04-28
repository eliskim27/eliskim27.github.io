// This component is the sidebar and will hold a set of “NavItems” components(Home, About, Education, Skills, Contact). It’s just the pink and blue gradient box.

import React, {Component} from 'react';
import Navitem from './NavItem';

class Navbar extends Component {

    render(){
        return (
            <nav>
            <ul>
                <Navitem item="Home" tolink="/" ></Navitem>
                <Navitem item="About" tolink="/about" ></Navitem>
                <Navitem item="Education" tolink="/education"></Navitem>
                <Navitem item="Skills" tolink="/skills"></Navitem>
                <Navitem item="Contact" tolink="/contact"></Navitem>
            </ul>
            </nav>
        )
    }
}

export default Navbar