import * as React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { closeHeaderSearchPanel } from "../../Actions/HeaderPanelActions";
import {
  closeSearchPanelLarge,
  getSearchValue,
} from "../../Actions/SearchMenuActions";
import {
  getShopID,
  selectShopName,
  viewBookID,
} from "../../Actions/ShopActions";
import { IApplicationState } from "../../Store/Store";
import mr from "./SearchMenuResults.module.scss";

export interface ISeachMenuResultsProps {
  value: string;
  allGenresData: null | any;
  isOpenSearchPanelLarge: boolean;
  isOpenSearchPanelSmall: boolean;
  getShopID: typeof getShopID;
  selectShopName: typeof selectShopName;
  viewBookID: typeof viewBookID;
  closeSearchPanelLarge: typeof closeSearchPanelLarge;
  closeHeaderSearchPanel: typeof closeHeaderSearchPanel;
  getSearchValue: typeof getSearchValue;
  node: HTMLDivElement | null;
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
      node,
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
                    <NavLink
                      to={`/search-book-view`}
                      key={k}
                      onClick={() => {
                        this.props.viewBookID(book.id);
                        this.props.getSearchValue("");
                        this.props.closeSearchPanelLarge(
                          false,
                          node!,
                          4,
                          "transparent"
                        );
                      }}
                    >
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
                    <NavLink
                      to={`/search-book-view`}
                      key={k}
                      onClick={() => {
                        this.props.viewBookID(book.id);
                        this.props.closeHeaderSearchPanel();
                        this.props.getSearchValue("");
                      }}
                    >
                      {book.volumeInfo.title}
                    </NavLink>
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
  node: state.searchMenu.node,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    selectShopName: (name: string) => dispatch(selectShopName(name)),
    getShopID: (id: number) => dispatch(getShopID(id)),
    viewBookID: (id: string) => dispatch(viewBookID(id)),
    closeSearchPanelLarge: (
      value: boolean,
      elem: HTMLDivElement,
      width: number,
      color: string
    ) => dispatch(closeSearchPanelLarge(value, elem, width, color)),
    closeHeaderSearchPanel: () => dispatch(closeHeaderSearchPanel()),
    getSearchValue: (name: string) => dispatch(getSearchValue(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeachMenuResults);
