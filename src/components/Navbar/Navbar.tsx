import * as React from 'react';
import Button from "../Button/Button";
import "./Navbar.css";

class Navbar extends React.Component {
    public render () {
        return(
            <ul id="navbar">
                <li><Button link="#" text="Deployment"/></li>
                <li><Button link="#" text="Development"/></li>
                <li><Button link="#" text="Capacity"/></li>
                <li><Button link="#" text="Maintenance"/></li>
                <li><Button link="#" text="Sustainability"/></li>
            </ul>
        )
    }
}

export default Navbar;