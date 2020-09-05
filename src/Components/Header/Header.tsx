import * as React from "react";
import { FaBars, FaRegUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import header from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import HeaderSearchPanel from "./HeaderSearchPanel/HeaderSearchPanel";
import { IApplicationState } from "../../Store/Store";
import { connect } from "react-redux";
import { openHeaderSearchPanel } from "../../Actions/HeaderSearchPanelActions";

export interface IHeaderProps {
  isOpen: boolean;
}

export interface IHeaderState {}

class Header extends React.Component<IHeaderProps, IHeaderState> {
  render() {
    return (
      <>
        <div className="container-xl">
          <nav className={`row ${header.main_menu}`}>
            <div className="col-6">
              <NavLink
                to="/home"
                className={`${header.logo_lg_deivices} d-none d-lg-block`}
              >
                Restock
              </NavLink>
              <NavLink
                to="/home"
                className={`${header.logo_small_devices} d-lg-none d-block`}
              >
                R
                <FaBars className="d-lg-none" />
              </NavLink>
            </div>
            <div className="col-2">
              <FiSearch className="d-lg-none d-block " />
            </div>
            <div className="col-2">
              <NavLink to="#" className="d-none d-lg-block">
                Login | Sign Up
              </NavLink>
              <FaRegUserCircle className="d-lg-none d-block" />
            </div>
            <div className="col-2">
              <NavLink to="#" className="d-block">
                Cart
              </NavLink>
            </div>
          </nav>
        </div>
        <HeaderSearchPanel />
      </>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  isOpen: state.headerSearchPanel.isOpen
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    openHeaderSearchPanel: () => dispatch(openHeaderSearchPanel())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);
