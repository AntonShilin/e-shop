import * as React from "react";
import b from "./Genres.module.scss";
import { NavLink } from "react-router-dom";
import { IApplicationState } from "../../../../Store/Store";
import { connect } from "react-redux";
import Arrow from "../../../Arrow/Arrow";
import { FiArrowRight } from "react-icons/fi";
import {
  getShopID,
  hiddenContainer,
  isOpenShop,
  selectShopName,
  viewBookID,
} from "../../../../Actions/ShopActions";
import {
  selectIdGenreInSubmenu,
  toggleSmallScreenSubmenu,
} from "../../../../Actions/HeaderPanelActions";

export interface IGenresProps {
  allGenresData: null | any;
  isLoading: boolean;
  genresName: string[];
  selectShopName: typeof selectShopName;
  isOpenShop: typeof isOpenShop;
  hiddenContainer: typeof hiddenContainer;
  getShopID: typeof getShopID;
  selectIdGenreInSubmenu: typeof selectIdGenreInSubmenu;
  toggleSmallScreenSubmenu: typeof toggleSmallScreenSubmenu;
  viewBookID: typeof viewBookID;
}

export interface IGenresState {}

class Genres extends React.Component<IGenresProps, IGenresState> {
  arrItem: HTMLDivElement[];
  constructor(props: IGenresProps) {
    super(props);
    this.arrItem = [];
  }

  toggleGenreBooks = (i: number) => {
    const node = this.arrItem[i];
    node.style.height === "auto"
      ? (node.style.height = "0rem")
      : (node.style.height = "auto");
  };

  private getArrayOfGenres = (node: HTMLDivElement) => {
    this.arrItem.push(node);
  };

  render() {
    const { allGenresData, genresName } = this.props;

    return (
      <>
        {genresName.map((item, i: number) => (
          <div key={i}>
            <div className={b.item} onClick={() => this.toggleGenreBooks(i)}>
              <Arrow />
              <NavLink to="#">{genresName[i]}</NavLink>
            </div>
            <div className={b.item_more_info} ref={this.getArrayOfGenres}>
              <div className={b.item_more_info_img}>
                <img
                  src={require(`../../../../Media/Images/${genresName[i]}.png`)}
                  alt="img"
                />
                <h3>
                  Shop <span>{genresName[i]}</span>
                </h3>
                <NavLink
                  to="/shop"
                  onClick={() => {
                    this.props.selectShopName(genresName[i]);
                    this.props.isOpenShop();
                    this.props.toggleSmallScreenSubmenu(true);
                    this.props.hiddenContainer();
                    this.props.getShopID(i);
                    this.props.selectIdGenreInSubmenu(i);
                  }}
                >
                  Shop All <FiArrowRight />
                </NavLink>
              </div>
              <div className={b.item_more_info_list}>
                {allGenresData[i] !== undefined &&
                  allGenresData[i].items.map((book: any, k: number) => (
                    <NavLink key={k}
                    to="/book-view"
                      onClick={() => {
                        this.props.getShopID(i);
                        this.props.viewBookID(book.id);
                        this.props.selectShopName(genresName[i]);
                        this.props.toggleSmallScreenSubmenu(true);
                      }}
                    >
                      {book.volumeInfo.title}
                    </NavLink>
                  ))}
              </div>
            </div>
          </div>
        ))}
        <div className={b.item}>
          <NavLink to="#">Shop all</NavLink>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  allGenresData: state.data.allGenresData,
  isLoading: state.data.isLoading,
  genresName: state.data.genresName,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    selectShopName: (name: string) => dispatch(selectShopName(name)),
    isOpenShop: () => dispatch(isOpenShop()),
    hiddenContainer: () => dispatch(hiddenContainer()),
    getShopID: (id: number) => dispatch(getShopID(id)),
    selectIdGenreInSubmenu: (n: number) => dispatch(selectIdGenreInSubmenu(n)),
    toggleSmallScreenSubmenu: (value: boolean) =>
      dispatch(toggleSmallScreenSubmenu(value)),
    viewBookID: (id: string) => dispatch(viewBookID(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Genres);
