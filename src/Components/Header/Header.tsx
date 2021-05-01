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
  selectIdGenreInSubmenu,
  toggleSmallScreenSubmenu,
} from "../../Actions/HeaderPanelActions";
import SmallScreenSubmenu from "../SmallScreenSubmenu/SmallScreenSubmenu";
import LargeScreenSubmenu from "../LargeScreenSubmenu/LargeScreenSubmenu";
import { closeShop, showContainer } from "../../Actions/ShopActions";
import {
  getArtBooks,
  getBestSellersBooks,
  getBiographyBooks,
  getFableBooks,
  getFictionBooks,
  getLifestyleBooks,
  getStoryBooks,
} from "../../Actions/MainStateActions";
import { toggleLoggedBox } from "../../Actions/LoggedBoxActions";
import LoggedBox from "../LoggedBox/LoggedBox";
import {
  applyDefaultPrice,
  toggleEnableFilter,
} from "../../Actions/FilterByPriceActions";
import {
  deleteAllYearFromFilter,
  offYearEnableFilter,
} from "../../Actions/FilterByYearActions";
import { IBookInfo } from "../../Types/CartTypes";
import { MdStar } from "react-icons/md";
import firebase from "firebase";

export interface IHeaderProps {
  isToggle: boolean;
  openHeaderSearchPanel: typeof openHeaderSearchPanel;
  toggleSmallScreenSubmenu: typeof toggleSmallScreenSubmenu;
  closeSelectedGenre: typeof closeSelectedGenre;
  showContainer: typeof showContainer;
  closeShop: typeof closeShop;
  getBiographyBooks: typeof getBiographyBooks;
  getFableBooks: typeof getFableBooks;
  getStoryBooks: typeof getStoryBooks;
  getBestSellersBooks: typeof getBestSellersBooks;
  getFictionBooks: typeof getFictionBooks;
  getArtBooks: typeof getArtBooks;
  getLifestyleBooks: typeof getLifestyleBooks;
  selectIdGenreInSubmenu: typeof selectIdGenreInSubmenu;
  toggleLoggedBox: typeof toggleLoggedBox;
  toggleEnableFilter: typeof toggleEnableFilter;
  applyDefaultPrice: typeof applyDefaultPrice;
  offYearEnableFilter: typeof offYearEnableFilter;
  deleteAllYearFromFilter: typeof deleteAllYearFromFilter;
  cart: IBookInfo[];
  isAccountCreated: boolean;
  isLoggedBoxOpen: boolean;
}

export interface IHeaderState {
  isSignIn: boolean;
  userName: string | null;
}

class Header extends React.Component<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props);
    this.state = {
      isSignIn: false,
      userName: null,
    };
  }

  componentDidMount() {
    this.props.getFableBooks();
    this.props.getBiographyBooks();
    this.props.getStoryBooks();
    this.props.getBestSellersBooks();
    this.props.getFictionBooks();
    this.props.getArtBooks();
    this.props.getLifestyleBooks();

    firebase.auth().onAuthStateChanged((profile) => {
      if (profile) {
        console.log("profile", profile);
        this.setState({
          isSignIn: true,
          userName: profile.displayName,
        });
      }
    });
  }

  render() {
    const { isToggle, cart, isAccountCreated, isLoggedBoxOpen } = this.props;
    const { isSignIn, userName } = this.state;

    return (
      <div
        className={`${header.main_menu_bg} ${
          isToggle ? "" : header.fixed_menu
        }`}
      >
        <div className="container-xl">
          <nav
            className={`row ${header.main_menu}`}
            onClick={() => this.props.closeSelectedGenre(false)}
          >
            <div className="col-6">
              <NavLink
                to="/home"
                className="d-none d-lg-block"
                onClick={() => {
                  this.props.showContainer();
                  this.props.closeShop();
                  this.props.toggleEnableFilter(false);
                  this.props.applyDefaultPrice();
                  this.props.offYearEnableFilter(false);
                  this.props.deleteAllYearFromFilter();
                }}
              >
                Books Store <MdStar />
              </NavLink>
              <NavLink
                to="/home"
                className="d-lg-none d-block"
                onClick={() => {
                  this.props.showContainer();
                  this.props.closeShop();
                  this.props.applyDefaultPrice();
                  this.props.offYearEnableFilter(false);
                  this.props.toggleEnableFilter(false);
                  this.props.deleteAllYearFromFilter();
                }}
              >
                B <MdStar />
              </NavLink>
              <FaBars
                className="d-lg-none"
                onClick={() => {
                  this.props.toggleSmallScreenSubmenu(isToggle);
                  this.props.applyDefaultPrice();
                  this.props.offYearEnableFilter(false);
                  this.props.toggleEnableFilter(false);
                  this.props.deleteAllYearFromFilter();
                }}
              />
            </div>
            <div className="col-2">
              <FiSearch
                className="d-lg-none d-block"
                onClick={this.props.openHeaderSearchPanel}
              />
            </div>
            <div className="col-2">
              {isSignIn ? (
                <NavLink
                  to="/my-account"
                  className="d-none d-lg-block"
                  onClick={() => this.props.toggleLoggedBox(false)}
                >
                  {`Welcome, ${userName}`}
                </NavLink>
              ) : (
                <NavLink
                  to="#"
                  className="d-none d-lg-block"
                  onClick={() => this.props.toggleLoggedBox(true)}
                >
                  Login | Sign Up
                </NavLink>
              )}
              <NavLink to={isSignIn ? `/my-account` : `/login`}>
                <FaRegUserCircle className="d-lg-none d-block" />
              </NavLink>
            </div>
            <div className="col-2">
              <NavLink to="/cart" className="d-block">
                Cart
                {cart.length > 0 && (
                  <span className="cart_view">{cart.length}</span>
                )}
              </NavLink>
            </div>
          </nav>
        </div>
        <LoggedBox />
        <HeaderSearchPanel />
        <LargeScreenSubmenu />
        <SmallScreenSubmenu />
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  isToggle: state.headerSearchPanel.isToggle,
  cart: state.cartContainer.cart,
  isAccountCreated: state.loggedBox.isAccountCreated,
  isLoggedBoxOpen: state.loggedBox.isLoggedBoxOpen,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    openHeaderSearchPanel: () => dispatch(openHeaderSearchPanel()),
    toggleSmallScreenSubmenu: (value: boolean) =>
      dispatch(toggleSmallScreenSubmenu(value)),
    closeSelectedGenre: (value: boolean) => dispatch(closeSelectedGenre(value)),
    showContainer: () => dispatch(showContainer()),
    closeShop: () => dispatch(closeShop()),
    getBiographyBooks: () => dispatch(getBiographyBooks()),
    getFableBooks: () => dispatch(getFableBooks()),
    getStoryBooks: () => dispatch(getStoryBooks()),
    getBestSellersBooks: () => dispatch(getBestSellersBooks()),
    getFictionBooks: () => dispatch(getFictionBooks()),
    getArtBooks: () => dispatch(getArtBooks()),
    getLifestyleBooks: () => dispatch(getLifestyleBooks()),
    selectIdGenreInSubmenu: (n: number) => dispatch(selectIdGenreInSubmenu(n)),
    toggleLoggedBox: (value: boolean) => dispatch(toggleLoggedBox(value)),
    toggleEnableFilter: (value: boolean) => dispatch(toggleEnableFilter(value)),
    applyDefaultPrice: () => dispatch(applyDefaultPrice()),
    offYearEnableFilter: (value: boolean) =>
      dispatch(offYearEnableFilter(value)),
    deleteAllYearFromFilter: () => dispatch(deleteAllYearFromFilter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
