import * as React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { IApplicationState } from "../../Store/Store";
import mr from "./SearchMenuResults.module.scss";

export interface ISeachMenuResultsProps {
  value: string;
  allGenresData: null | any;
  isOpenSearchPanelLarge: boolean;
  isOpenSearchPanelSmall: boolean;
}

export interface ISeachMenuResultsState {}

class SeachMenuResults extends React.Component<
  ISeachMenuResultsProps,
  ISeachMenuResultsState
> {
  render() {
    const {
      allGenresData,
      value,
      isOpenSearchPanelLarge,
      isOpenSearchPanelSmall,
    } = this.props;
    const patt = new RegExp(value, "i");

    return (
      <>
        {value.length > 0 && isOpenSearchPanelLarge && (
          <div className={mr.search_menu_large_results_bg}>
            {allGenresData.map((genre: any | null, i: number) =>
              genre.items.map(
                (book: any | null, k: number) =>
                  book.volumeInfo.title.match(patt) && (
                    <NavLink to={`/shop`} key={k}>
                      {book.volumeInfo.title}
                    </NavLink>
                  )
              )
            )}
          </div>
        )}
        {value.length > 0 && isOpenSearchPanelSmall && (
          <div className={mr.search_menu_small_results_bg}>
            {allGenresData.map((genre: any | null, i: number) =>
              genre.items.map(
                (book: any | null, k: number) =>
                  book.volumeInfo.title.match(patt) && (
                    <NavLink to={`/shop`} key={k}>{book.volumeInfo.title}</NavLink>
                  )
              )
            )}
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  value: state.searchMenu.value,
  allGenresData: state.data.allGenresData,
  isOpenSearchPanelLarge: state.searchMenu.isOpenSearchPanelLarge,
  isOpenSearchPanelSmall: state.headerSearchPanel.isOpen,
});

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SeachMenuResults);
