import * as React from "react";
import l from "./Loading.module.scss";

export interface Props {}

export interface State {
  dots: number[];
}

class Loading extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      dots: [1, 2, 3],
    };
  }

  render() {
    const { dots } = this.state;

    return (
      <div className={l.loading_page_bg}>
        <div>
          {dots.map((el, i) => (
            <div key={i} />
          ))}
        </div>
      </div>
    );
  }
}

export default Loading;
