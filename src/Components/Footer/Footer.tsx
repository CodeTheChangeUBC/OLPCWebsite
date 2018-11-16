import * as React from 'react';
import './Footer.css';

export const Footer =() => {
 
    return (
      <div className="Footer">
        <footer className="bg-near-black white-80 pv5 pv6-l ph4">
          <p className="f6"><span className="dib mr4 mr5-ns">Made in collaboration with Code the Change UBC</span>
            <a className="link white-80 hover-light-purple" href="/terms">Terms</a> /
            <a className="link white-80 hover-gold" href="/privacy"> Privacy </a> /
            <a className="link white-80 hover-green" href="#">gaurav@codethechange.ca </a>
          </p>
        </footer>
      </div>
    );
  
}

export default Footer;
