import * as React from "react";
import b from "./Genres.module.scss";
import { NavLink } from "react-router-dom";
import { IApplicationState } from "../../../../Store/Store";
import { connect } from "react-redux";
import {
  getBiographyBooks,
  getFableBooks,
  getStoryBooks,
  getBestSellersBooks,
  getFictionBooks,
  getArtBooks,
  getLifestyleBooks,
} from "../../../../Actions/MainStateActions";
import Arrow from "../../../Arrow/Arrow";

export interface IGenresProps {
  allGenresData: null | any;
  isLoading: boolean;
  genresName: string[];
  getBiographyBooks: typeof getBiographyBooks;
  getFableBooks: typeof getFableBooks;
  getStoryBooks: typeof getStoryBooks;
  getBestSellersBooks: typeof getBestSellersBooks;
  getFictionBooks: typeof getFictionBooks;
  getArtBooks: typeof getArtBooks;
  getLifestyleBooks: typeof getLifestyleBooks;
}

export interface IGenresState {
}

class Genres extends React.Component<IGenresProps, IGenresState> {
  arrItem: HTMLDivElement[];
  constructor(props: IGenresProps) {
    super(props);
    this.arrItem = [];
  }

  toggleGenreBooks = (i: number) => {
    const node = this.arrItem[i];
    if (node.style.height === "auto") {
      node.style.height = "0rem";
    } else {
      node.style.height = "auto";
    }
  };

  private setArrElem = (node: HTMLDivElement) => {
    this.arrItem.push(node);
  };

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
    const { allGenresData, genresName } = this.props;

    return (
      <>
        {genresName.map((item, i: number) => (
          <div key={i}>
            <div className={b.item} onClick={() => this.toggleGenreBooks(i)}>
             <Arrow />
              <NavLink to="#">{genresName[i]}</NavLink>
            </div>
            <div className={b.item_more_info} ref={this.setArrElem}>
              <div className={b.item_more_info_img}>
                <img
                  src={require(`../../../../Media/Images/${genresName[i]}.jpg`)}
                  alt="img"
                />
                <span>Shop {genresName[i]}</span>
                <NavLink to="#">Shop All</NavLink>
              </div>
              <div className={b.item_more_info_list}>
                {allGenresData[i] !== undefined &&
                  allGenresData[i].items.map((book: any, k: number) => (
                    <span key={k}>{book.volumeInfo.title}</span>
                  ))}
              </div>
            </div>
          </div>
        ))}
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
    getBiographyBooks: () => dispatch(getBiographyBooks()),
    getFableBooks: () => dispatch(getFableBooks()),
    getStoryBooks: () => dispatch(getStoryBooks()),
    getBestSellersBooks: () => dispatch(getBestSellersBooks()),
    getFictionBooks: () => dispatch(getFictionBooks()),
    getArtBooks: () => dispatch(getArtBooks()),
    getLifestyleBooks: () => dispatch(getLifestyleBooks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Genres);
