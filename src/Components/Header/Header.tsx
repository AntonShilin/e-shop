import * as React from "react";
import { FaBars, FaRegUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import header from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import HeaderSearchPanel from "./HeaderSearchPanel/HeaderSearchPanel";
import { IApplicationState } from "../../Store/Store";
import { connect } from "react-redux";
import {
  openHeaderSearchPanel,
  toggleSmallScreenSubmenu,
} from "../../Actions/HeaderSearchPanelActions";
import SmallScreenSubmenu from "../SmallScreenSubmenu/SmallScreenSubmenu";

export interface IHeaderProps {
  isToggle: boolean;
  openHeaderSearchPanel: typeof openHeaderSearchPanel;
  toggleSmallScreenSubmenu: typeof toggleSmallScreenSubmenu;
}

export interface IHeaderState {}

class Header extends React.Component<IHeaderProps, IHeaderState> {
  render() {
    const {isToggle } = this.props;
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
              </NavLink>
              <FaBars
                className="d-lg-none"
                onClick={()=>this.props.toggleSmallScreenSubmenu(isToggle)}
              />
            </div>
            <div className="col-2">
              <FiSearch
                className="d-lg-none d-block"
                onClick={this.props.openHeaderSearchPanel}
              />
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
       <SmallScreenSubmenu />
      </>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  isToggle: state.headerSearchPanel.isToggle,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    openHeaderSearchPanel: () => dispatch(openHeaderSearchPanel()),
    toggleSmallScreenSubmenu: (value:boolean) => dispatch(toggleSmallScreenSubmenu(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
