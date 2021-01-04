import * as React from "react";
import l from "./Loading.module.scss";

export interface Props {}

export interface State {}

class Loading extends React.Component<Props, State> {
  render() {
    return (
      <div className={l.loading_bg}>
        <div>
          <span/>
          <span/>
          <p>Please wait ...</p>
        </div>
      </div>
    );
  }
}

export default Loading;
