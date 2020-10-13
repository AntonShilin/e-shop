import * as React from "react";
import { FaBars, FaRegUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import header from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import HeaderSearchPanel from "./HeaderSearchPanel/HeaderSearchPanel";
import { IApplicationState } from "../../Store/Store";
import { connect } from "react-redux";
import {
  closeSelectedGenre,
  openHeaderSearchPanel,
  toggleSmallScreenSubmenu,
} from "../../Actions/HeaderPanelActions";
import SmallScreenSubmenu from "../SmallScreenSubmenu/SmallScreenSubmenu";
import LargeScreenSubmenu from "../LargeScreenSubmenu/LargeScreenSubmenu";

export interface IHeaderProps {
  isToggle: boolean;
  openHeaderSearchPanel: typeof openHeaderSearchPanel;
  toggleSmallScreenSubmenu: typeof toggleSmallScreenSubmenu;
  closeSelectedGenre: typeof closeSelectedGenre;
}

export interface IHeaderState {}

class Header extends React.Component<IHeaderProps, IHeaderState> {
  render() {
    const {isToggle } = this.props;
    return (
      <div className={`${header.main_menu_bg} ${isToggle?'':header.fixed_menu}`}>
        <div className="container-xl">
          <nav className={`row ${header.main_menu}`} onClick={()=>this.props.closeSelectedGenre(false)}>
            <div className="col-6">
              <NavLink
                to="/home"
                className={`${header.logo_lg_deivices} d-none d-lg-block`}
              >
                Books Store
              </NavLink>
              <NavLink
                to="/home"
                className={`${header.logo_small_devices} d-lg-none d-block`}
              >
                B
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
        <LargeScreenSubmenu />
        <SmallScreenSubmenu />
      </div>
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
    closeSelectedGenre: (value:boolean) => dispatch(closeSelectedGenre(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
