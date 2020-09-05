import * as React from "react";
import first from "./First.module.scss";
import { MdKeyboardArrowDown } from "react-icons/md";
import { NavLink } from "react-router-dom";

export interface Props {}

export interface State {}

class First extends React.Component<Props, State> {
  render() {
    return (
      <div  className={first.item}>
            <span><MdKeyboardArrowDown /></span>
            <NavLink to="#">A</NavLink>
      </div>
    );
  }
}

export default First;
