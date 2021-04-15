import * as React from "react";
import { FiArrowRight } from "react-icons/fi";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { closeSelectedGenre } from "../../../Actions/HeaderPanelActions";
import {
  getShopID,
  hiddenContainer,
  isOpenShop,
  selectShopName,
  viewBookID,
} from "../../../Actions/ShopActions";
import { IApplicationState } from "../../../Store/Store";
import sg from "./SelectedGenre.module.scss";

export interface ISelectedGenreProps {
  allGenresData: null | any;
  genresName: string[];
  id: number;
  isOpenSelectedGenre: boolean;
  closeSelectedGenre: typeof closeSelectedGenre;
  isOpenShop: typeof isOpenShop;
  hiddenContainer: typeof hiddenContainer;
  selectShopName: typeof selectShopName;
  getShopID: typeof getShopID;
  viewBookID: typeof viewBookID;
}

export interface State {}

class SelectedGenre extends React.Component<ISelectedGenreProps, State> {
  render() {
    const { genresName, allGenresData, id, isOpenSelectedGenre } = this.props;

    return (
      isOpenSelectedGenre && (
        <>
          <div className={`row ${sg.selected_genre_bg}`}>
            <div className={`col-5 ${sg.selected_genre_name}`}>
              <div>
                <h2>
                  Shop <span>{genresName[id]}</span>
                </h2>
                <NavLink
                  to="/shop"
                  onClick={() => {
                    this.props.isOpenShop();
                    this.props.closeSelectedGenre(false);
                    this.props.hiddenContainer();
                    this.props.selectShopName(genresName[id]);
                    this.props.getShopID(id);
                  }}
                >
                  Shop All <FiArrowRight />
                </NavLink>
              </div>
              <div>
                <img
                  src={require(`../../../Media/Images/${genresName[id]}.png`)}
                  alt="img"
                />
              </div>
            </div>
            <div className="col-7">
              {allGenresData[id] !== undefined &&
                allGenresData[id].items.map((book: any, i: number) => (
                  <NavLink
                    key={i}
                    to="/book-view"
                    onClick={() => {
                      this.props.closeSelectedGenre(false);
                      this.props.hiddenContainer();
                      this.props.viewBookID(book.id);
                      this.props.selectShopName(genresName[id]);
                      this.props.getShopID(id);
                    }}
                  >
                    {book.volumeInfo.title}
                  </NavLink>
                ))}
            </div>
          </div>
          <div className="row">
            <div
              className={sg.empty}
              onClick={() => this.props.closeSelectedGenre(false)}
            />
          </div>
        </>
      )
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  allGenresData: state.data.allGenresData,
  id: state.headerSearchPanel.id,
  genresName: state.data.genresName,
  isOpenSelectedGenre: state.headerSearchPanel.isOpenSelectedGenre,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    closeSelectedGenre: (value: boolean) => dispatch(closeSelectedGenre(value)),
    isOpenShop: () => dispatch(isOpenShop()),
    hiddenContainer: () => dispatch(hiddenContainer()),
    selectShopName: (name: string) => dispatch(selectShopName(name)),
    getShopID: (id: number) => dispatch(getShopID(id)),
    viewBookID: (id: string) => dispatch(viewBookID(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedGenre);
