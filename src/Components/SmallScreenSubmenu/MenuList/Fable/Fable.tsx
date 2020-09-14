import * as React from "react";
import f from "./Fable.module.scss";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IApplicationState } from "../../../../Store/Store";
import { getData } from "../../../../Actions/MainStateActions";
import { connect } from "react-redux";
import fableImg from "../../../../Media/Images/fable.jpg";

export interface IFableProps {
  fable: any | null;
  isLoading: boolean;
  getData: typeof getData;
  genres: string[];
}

export interface IFableState {
  isClose: boolean;
}

class Fable extends React.Component<IFableProps, IFableState> {
  item: React.RefObject<HTMLDivElement>;
  constructor(props: IFableProps) {
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
    if (this.props.fable === null) {
      this.props.getData();
    }
  }

  render() {
    const { isClose } = this.state;
    const { genres, fable } = this.props;
    return (
      <>
        <div className={f.item} onClick={this.toggleBtn}>
          <span>
            {isClose ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
          </span>
          <NavLink to="#">{genres[0]}</NavLink>
        </div>
        <div className={f.item_more_info} ref={this.item}>
          {fable !== null && (
            <>
              <div className={f.item_more_info_img}>
                <img src={fableImg} alt="img" />
                <span>{`Shop ${genres[0]}`}</span>
                <NavLink to="#">Shop All</NavLink>
              </div>
              <div className={f.item_more_info_list}>
                {fable.items.map((book: any, i: number) => (
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
  fable: state.allData.fable,
  isLoading: state.allData.isLoading,
  genres: state.allData.genres,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    getData: () => dispatch(getData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Fable);
