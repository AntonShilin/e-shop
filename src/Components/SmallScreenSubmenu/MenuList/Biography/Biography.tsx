import * as React from "react";
import b from "./Biography.module.scss";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IApplicationState } from "../../../../Store/Store";
import { getBiographyBooks } from "../../../../Actions/MainStateActions";
import { connect } from "react-redux";
import biographyImg from "../../../../Media/Images/biography.jpg";

export interface IBiographyProps {
    biography: any | null;
  isLoading: boolean;
  getBiographyBooks: typeof getBiographyBooks;
}

export interface IBiographyState {
  isClose: boolean;
}

class Biography extends React.Component<IBiographyProps, IBiographyState> {
  item: React.RefObject<HTMLDivElement>;
  constructor(props: IBiographyProps) {
    super(props);
    this.state = { isClose: true };
    this.item = React.createRef();
  }

  toggleBtn = () => {
    this.setState({ isClose: !this.state.isClose });
    this.showMoreInfo();
  };

  showMoreInfo = () => {
    const node = this.item.current;
    this.state.isClose
      ? (node!.style.height = "auto")
      : (node!.style.height = "0rem");
  };

  componentDidMount() {
    if (this.props.biography === null) {
      this.props.getBiographyBooks();
    }
  }

  render() {
    const { isClose } = this.state;
    const {  biography } = this.props;
    return (
      <>
        <div className={b.item} onClick={this.toggleBtn}>
          <span>
            {isClose ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
          </span>
          <NavLink to="#">Biography</NavLink>
        </div>
        <div className={b.item_more_info} ref={this.item}>
          {biography !== null && (
            <>
              <div className={b.item_more_info_img}>
                <img src={biographyImg} alt="img" />
                <span>Shop Biography</span>
                <NavLink to="#">Shop All</NavLink>
              </div>
              <div className={b.item_more_info_list}>
                {biography.items.map((book: any, i: number) => (
                  <span key={i}>{book.volumeInfo.title}</span>
                ))}
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  biography: state.allGenres.biography,
  isLoading: state.allGenres.isLoading,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    getBiographyBooks: () => dispatch(getBiographyBooks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Biography);