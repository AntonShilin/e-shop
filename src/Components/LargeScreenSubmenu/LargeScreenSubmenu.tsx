import * as React from "react";
import submenu from "./LargeScreenSubmenu.module.scss";
import { NavLink } from "react-router-dom";
import SearchPanel from "./SearchPanel/SearchPanel";
import { IApplicationState } from "../../Store/Store";
import { connect } from "react-redux";
import { getBiographyBooks, getFableBooks, getStoryBooks, getBestSellersBooks, getFictionBooks, getArtBooks, getLifestyleBooks } from "../../Actions/MainStateActions";

export interface ISubmenuProps {
  genresName: string[];
  getBiographyBooks: typeof getBiographyBooks;
  getFableBooks: typeof getFableBooks;
  getStoryBooks: typeof getStoryBooks;
  getBestSellersBooks: typeof getBestSellersBooks;
  getFictionBooks: typeof getFictionBooks;
  getArtBooks: typeof getArtBooks;
  getLifestyleBooks: typeof getLifestyleBooks;
}

export interface State {}

class LargeScreenSubmenu extends React.Component<ISubmenuProps, State> {
  componentDidMount() {
    this.props.getBiographyBooks();
    this.props.getFableBooks();
    this.props.getStoryBooks();
    this.props.getBestSellersBooks();
    this.props.getFictionBooks();
    this.props.getArtBooks();
    this.props.getLifestyleBooks();
  }
  render() {
    const { genresName } = this.props;
    
    return (
      <div className={`container-xl ${submenu.rootmenu} d-none d-lg-block`}>
        <div className="row">
          {genresName.map((name, i) => 
          <div className="col" key={i}>
              <NavLink to="#">{name}</NavLink>
          </div>
          )}
          <div className="col">
            <NavLink to="#">shop all</NavLink>
          </div>
          <div className="col">
            <SearchPanel />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  genresName: state.data.genresName,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    getBiographyBooks: () => dispatch(getBiographyBooks()),
    getFableBooks: () => dispatch(getFableBooks()),
    getStoryBooks: () => dispatch(getStoryBooks()),
    getBestSellersBooks: () => dispatch(getBestSellersBooks()),
    getFictionBooks: () => dispatch(getFictionBooks()),
    getArtBooks: () => dispatch(getArtBooks()),
    getLifestyleBooks: () => dispatch(getLifestyleBooks()),
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(LargeScreenSubmenu);
