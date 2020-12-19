import * as React from "react";
import s from "./Slideshow.module.scss";
import { IApplicationState } from "../../Store/Store";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

export interface ISlideshowProps {
  genresName: string[];
  isHiddenContainer: boolean;
}

export interface ISlideshowState {
  matrix: number[][][];
  dots_number: number;
}

class Slideshow extends React.Component<ISlideshowProps, ISlideshowState> {
  images: any[];
  constructor(props: ISlideshowProps) {
    super(props);
    this.images = [];
    this.state = {
      matrix: [
        [
          [0, 0, -1],
          [-105, 0, 105],
        ],
        [
          [-1, 0, 0],
          [105, -105, 0],
        ],
        [
          [0, -1, 0],
          [0, 105, -105],
        ],
      ],
      dots_number: 0,
    };
  }

  public settingSliderValues = (
    position: { toString: () => string }[],
    step: number[],
    n: number
  ) => {
    this.images.map((img, i) => {
      if (img !== null) {
        img.style.left = step[i] + "%";
        img.style.zIndex = position[i].toString();
      }
    });

    this.setState({ dots_number: n });
  };

  public movingImages = () => {
    const { matrix } = this.state;

    setTimeout(() => {
      this.settingSliderValues(matrix[0][0], matrix[0][1], 1);
    }, 3000);

    setTimeout(() => {
      this.settingSliderValues(matrix[1][0], matrix[1][1], 2);
    }, 8000);

    setTimeout(() => {
      this.settingSliderValues(matrix[2][0], matrix[2][1], 0);
    }, 12000);

    setTimeout(() => {
      this.movingImages();
    }, 12100);
  };

  componentDidMount() {
    this.movingImages();
  }

  render() {
    const { genresName, isHiddenContainer } = this.props;

    return (
      isHiddenContainer && (
        <>
          <div className={`container-xl ${s.slider_bg}`}>
            <div className="row">
              <div className="col">
                {genresName.map(
                  (name: any, k: number) =>
                    k < 3 && (
                      <div
                        key={k}
                        ref={(ref) => {
                          this.images[k] = ref;
                          return true;
                        }}
                      >
                        <img
                          src={require(`../../Media/Images/${name}.png`)}
                          alt="name"
                        />
                        <h1>{`${name} books`}</h1>
                        <NavLink to="#">Shop now</NavLink>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
          <div className={`container-xl ${s.slider_dots}`}>
            <div className="row">
              <div className="col">
                <div className="slider_dots">
                  {this.state.matrix.map((dot, i) => (
                    <span
                      key={i}
                      className={
                        this.state.dots_number === i ? `${s.active_dot}` : ``
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  genresName: state.data.genresName,
  isHiddenContainer: state.shopContainer.isHiddenContainer,
});

export default connect(mapStateToProps, {})(Slideshow);
