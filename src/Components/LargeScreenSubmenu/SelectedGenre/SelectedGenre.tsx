import * as React from "react";
import { FiArrowRight } from "react-icons/fi";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { closeSelectedGenre } from "../../../Actions/HeaderPanelActions";
import { isOpenShop } from "../../../Actions/ShopActions";
import { IApplicationState } from "../../../Store/Store";
import sg from "./SelectedGenre.module.scss";

export interface ISelectedGenreProps {
  allGenresData: null | any;
  genresName: string[];
  id: number | null;
  isOpenSelectedGenre: boolean;
  closeSelectedGenre: typeof closeSelectedGenre;
  isOpenShop: typeof isOpenShop;
}

export interface State {}

class SelectedGenre extends React.Component<ISelectedGenreProps, State> {
  render() {
    const { genresName, allGenresData, id, isOpenSelectedGenre } = this.props;

    return (
      id !== null &&
      isOpenSelectedGenre && (
        <>
          <div className={`row ${sg.selected_genre_bg}`}>
            <div className="col-5">
              <img
                src={require(`../../../Media/Images/${genresName[id]}.png`)}
                alt="img"
              />
              <h1>Shop {genresName[id]}</h1>
              <NavLink to="/shop" onClick={this.props.isOpenShop}>
                Shop All <FiArrowRight />
              </NavLink>
            </div>
            <div className="col-7">
              {allGenresData[id] !== undefined &&
                allGenresData[id].items.map((book: any, k: number) => (
                  <span key={k}>{book.volumeInfo.title}</span>
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
  genresName: state.data.genresName,
  id: state.headerSearchPanel.id,
  isOpenSelectedGenre: state.headerSearchPanel.isOpenSelectedGenre,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    closeSelectedGenre: (value: boolean) => dispatch(closeSelectedGenre(value)),
    isOpenShop: () => dispatch(isOpenShop()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedGenre);
