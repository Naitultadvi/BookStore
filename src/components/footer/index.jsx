import React from "react";
import { Link } from "react-router-dom";
import { footerStyle } from "./style";
import siteLogo from "../../assets/images/logo.png";
import facebook from "../../assets/images/facebook.png";
import Email from "../../assets/images/email.png";
import Linkedin from "../../assets/images/linkedin.png";
import YouTube from "../../assets/images/youtube.png";
import android from "../../assets/images/android.png";
import appstore from "../../assets/images/appstore.png";

const Footer = () => {
  const classes = footerStyle();
  return (
    <div className={classes.footerWrapper}>
      <footer className="site-footer" id="footer">
        <div className="bottom-footer">
          <div className="container">
            <div >
              <div className="footer-logo" style={{padding:20}}>
              
                <Link to="/" title="logo">
                  <img src={siteLogo} alt="sitelogo" style={{height:100,width:220, paddingRight:20}} />
                </Link>
                <Link to="/" title="logo">
                  <img src={facebook} alt="sitelogo" style={{ paddingRight:20,paddingLeft:620}} />
                </Link>
                <Link to="/" title="logo">
                  <img src={Email} alt="sitelogo" style={{ paddingRight:20,paddingLeft:20}} />
                </Link>
                <Link to="/" title="logo">
                  <img src={Linkedin} alt="sitelogo" style={{ paddingRight:20,paddingLeft:20}} />
                </Link>
                <Link to="/" title="logo">
                  <img src={YouTube} alt="sitelogo"  style={{ paddingRight:20,paddingLeft:20}}/>
                </Link>
               
              </div>
              <div>
                <center>
                <Link to="/" title="logo">
                  <img src={android} alt="sitelogo" style={{ paddingRight:20,paddingLeft:20}} />
                </Link>
                <Link to="/" title="logo">
                  <img src={appstore} alt="sitelogo"  style={{ paddingRight:20,paddingLeft:20}}/>
                </Link>
                </center>
              </div>
              <p className="copyright-text" style={{textAlign:"center",paddingTop:40}}>
                © 2023 ApnaBookStore.com. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
