import * as React from 'react';
import './Footer.css';

export const Footer =() => {
 
    return (
      <div className="Footer">
        <footer className="pv4 ph3 ph5-m ph6-l mid-gray">
          <small className="f6 db tc"><b className="ttu">Code the Change UBC</b></small>
          <div className="tc mt3">
            <a href="mailto:gaurav@codethechange.ca" title="Language" className="f6 dib ph2 link mid-gray dim">Contact</a>
            <a href="/terms/" title="Terms" className="f6 dib ph2 link mid-gray dim">Terms of Use</a>
            <a href="/privacy/" title="Privacy" className="f6 dib ph2 link mid-gray dim">Privacy</a>
          </div>
        </footer>
      </div>
    );
  
}

export default Footer;
