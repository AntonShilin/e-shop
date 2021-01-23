import * as React from "react";
import l from "./Loading.module.scss";

export interface Props {}

export interface State {}

class Loading extends React.Component<Props, State> {
  render() {
    return (
      <div className={l.loading_page_bg}>
        <div>
          <div />
          <div />
          <div>
          <span>B</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Loading;
