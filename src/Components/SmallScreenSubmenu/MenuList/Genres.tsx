import * as React from "react";
import first from "./Genres.module.scss";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IApplicationState } from "../../../Store/Store";
import { getData } from "../../../Actions/MainStateActions";
import { connect } from "react-redux";
import fairy from "../../../Media/Images/fairytales.jpg";

export interface IFirstProps {
  data: any | null;
  isLoading: boolean;
  getData: typeof getData;
  genres: string[];
}

export interface IFirstState {
  isClose: boolean;
}

class Genres extends React.Component<IFirstProps, IFirstState> {
  item: React.RefObject<HTMLDivElement>;
  constructor(props: IFirstProps) {
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
      ? (node!.style.height = "20rem")
      : (node!.style.height = "0rem");
  };

  componentDidMount() {
    if (this.props.data === null) {
      this.props.getData();
    }
  }

  render() {
    const { isClose } = this.state;
    const { genres, data } = this.props;

    return (
      <>
        <div className={first.item}>
          <span onClick={this.toggleBtn}>
            {isClose ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
          </span>
          <NavLink to="#">{genres[0]}</NavLink>
        </div>
        <div className={first.item_more_info} ref={this.item}>
          {data !== null && (
            <>
              <div className={first.item_more_info_img}>
                <img src={fairy} alt="img" />
              </div>
              <div className={first.item_more_info_list}>
                {data.items.map((book: any, i: number) => (
                  <span key={i}>
                    {book.volumeInfo.title}
                  </span>
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
  data: state.data.data,
  isLoading: state.data.isLoading,
  genres: state.data.genres,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    getData: () => dispatch(getData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Genres);
