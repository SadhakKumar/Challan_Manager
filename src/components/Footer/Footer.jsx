import React from 'react';
import './Footer.scss';


const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="operated-by">
          <div className='operated'>Operated By</div>
          <div>Additional Director General of Police (Traffic)</div>
          <div>Maharashtra State, Mumbai.</div>
        </div>
        <div className="division-line"></div> {/* Division line */}
        <div className="helpdesk">
          <div className='help'>eChallan Helpdesk Contact details</div>
          <div>
            <img src=''  className="phone-icon" />
            844 844 8960
          </div>
        </div>
      </footer>
      <div className='gutter-space'></div>
    </>
  );
};

export default Footer;
