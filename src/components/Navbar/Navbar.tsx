import * as React from 'react';
import "./Navbar.css";

class Navbar extends React.Component {
    public render () {
        return(
            <ul id="navbar">
                <li>Deployment</li>
                <li>Development</li>
                <li>Capacity</li>
                <li>Maintenance</li>
                <li>sustainability</li>
            </ul>
        )
    }
}

export default Navbar;