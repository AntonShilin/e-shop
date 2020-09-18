import * as React from "react";
import s from "./Slideshow.module.scss";
import letter from "../../Media/Images/letter.png";
import { IApplicationState } from "../../Store/Store";
import { connect } from "react-redux";

export interface ISlideshowProps {
  genresName: string[];
}

export interface State {}

class Slideshow extends React.Component<ISlideshowProps, State> {
  render() {
    const { genresName } = this.props;

    return (
      <div className={`container-xl ${s.slider_bg}`}>
        <div className="row">
          <div className="col">
              {genresName.map(
                (name: any, k: number) =>
                  k < 3 && (
                      <img key={k}
                        src={require(`../../Media/Images/${name}.jpg`)}
                        alt="name"
                      />
                  )
              )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  genresName: state.data.genresName,
});

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Slideshow);
