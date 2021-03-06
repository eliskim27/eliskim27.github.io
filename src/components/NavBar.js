import React, { Component } from 'react';
import Navitem from './Navitem';
import Social from '../components/Social'


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'NavItemActive':''
        }
    }

    activeitem = (x) => {
        if(this.state.NavItemActive.length>0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive':x}, () => {
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };

    render() {
        return (
            <nav>
                <ul>
                    <Navitem item="Home"         tolink="/"              activec={this.activeitem}></Navitem>
                    <Navitem item="About"        tolink="/about"         activec={this.activeitem}></Navitem>
                    <Navitem item="Education"    tolink="/education"     activec={this.activeitem}></Navitem>
                    {/* maybe remove skills. whats the purpose? */}
                    <Navitem item="Skills"       tolink="/skills"        activec={this.activeitem}></Navitem>
                    <Navitem item="Work History" tolink="/workhistory"   activec={this.activeitem}></Navitem>
                    <a href="https://drive.google.com/file/d/1RyUGXk5Q9ACYKXa6EAawmA1qTHGPh95j/view?usp=sharing" target="_blank">Resume</a>
                </ul>
                <Social />
            </nav>
        )
    }
}
    
export default NavBar