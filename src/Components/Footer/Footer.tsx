import * as React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdStar } from "react-icons/md";
import { NavLink } from "react-router-dom";
import f from "./Footer.module.scss";
import SignUpForm from "./SignUpForm/SignUpForm";

export interface Props {}

export interface State {}

class Footer extends React.Component<Props, State> {
  render() {
    return (
      <footer className={`container-xl ${f.footer_bg}`}>
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-4 col">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <NavLink to="#">B<MdStar/></NavLink>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <NavLink to="#">Terms of Use</NavLink>
                <NavLink to="#">Privacy Policy</NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col">
            <span>Need help?</span>
            <NavLink to="#">Order Status</NavLink>
            <NavLink to="#">Consignment</NavLink>
            <NavLink to="#">Shipping and Returns </NavLink>
            <NavLink to="#">Contact Us</NavLink>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-8 col-sm-12 order-lg-1 order-md-1 order-sm-2">
                <SignUpForm />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 order-lg-2 order-md-2 order-sm-1">
                <span>
                  <NavLink to="#">
                    <FaInstagram />
                  </NavLink>
                  <NavLink to="#">
                    <FaFacebookF />
                  </NavLink>
                  <NavLink to="#">
                    <FaTwitter />
                  </NavLink>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
