import * as React from "react";
import b from "./Genres.module.scss";
import { NavLink } from "react-router-dom";
import { IApplicationState } from "../../../../Store/Store";
import { connect } from "react-redux";
import Arrow from "../../../Arrow/Arrow";

export interface IGenresProps {
  allGenresData: null | any;
  isLoading: boolean;
  genresName: string[];
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
      : (node.style.height = "auto")
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

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Genres);
