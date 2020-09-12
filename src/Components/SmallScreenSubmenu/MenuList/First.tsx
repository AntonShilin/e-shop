import * as React from "react";
import first from "./First.module.scss";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { NavLink } from "react-router-dom";

export interface IFirstProps {}

export interface IFirstState {
  isClose: boolean;
}

class First extends React.Component<IFirstProps, IFirstState> {
  item: React.RefObject<HTMLDivElement>;
  constructor(props: IFirstProps) {
    super(props);
    this.state = { isClose: true };
    this.item = React.createRef();
  }

  toggleBtn = () => {
    this.setState({ isClose: !this.state.isClose });
    console.log(this.state.isClose);
    this.showMoreInfo();
  };

  showMoreInfo = () => {
    const node = this.item.current;
    this.state.isClose
      ? (node!.style.height = "20rem")
      : (node!.style.height = "0rem");
  };

  render() {
    const { isClose } = this.state;
    return (
      <>
        <div className={first.item}>
          <span onClick={this.toggleBtn}>
            {isClose ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
          </span>
          <NavLink to="#">Name</NavLink>
        </div>
        <div className={first.item_more_info} ref={this.item}>
          <div className={first.item_more_info_img}>
            <img src="#" alt="img" />
          </div>
          <div className={first.item_more_info_list}>List items</div>
        </div>
      </>
    );
  }
}

export default First;
