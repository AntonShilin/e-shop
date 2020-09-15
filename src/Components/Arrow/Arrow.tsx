import * as React from "react";

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export interface IBiographyProps {}

export interface IBiographyState {
  isClose: boolean;
}

class Arrow extends React.Component<IBiographyProps, IBiographyState> {
  constructor(props: IBiographyProps) {
    super(props);
    this.state = { isClose: true };
  }

  toggleBtn = () => {
    this.setState({ isClose: !this.state.isClose });
  };

  render() {
    const { isClose } = this.state;
    return (
      <span onClick={this.toggleBtn}>
        {isClose ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
      </span>
    );
  }
}

export default Arrow;
