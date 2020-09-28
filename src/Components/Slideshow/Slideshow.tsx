import * as React from "react";
import s from "./Slideshow.module.scss";
import { IApplicationState } from "../../Store/Store";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

export interface ISlideshowProps {
  genresName: string[];
}

export interface ISlideshowState {
  matrix: number[][][];
}

class Slideshow extends React.Component<ISlideshowProps, ISlideshowState> {
  images: HTMLImageElement[];
  constructor(props: ISlideshowProps) {
    super(props);
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
    };
    this.images = [];
  }

  private getArrayOfImages = (node: HTMLImageElement) => {
    this.images.push(node);
  };

  public settingSliderValues = (arr0: number[], arr1: number[]) => {
    this.images.map((img, i) => {
      img.style.zIndex = arr0[i].toString();
      img.style.left = `${arr1[i]}%`;
    });
  };

  public movingImages = () => {
    const { matrix } = this.state;
    setTimeout(() => {
      this.settingSliderValues(matrix[0][0], matrix[0][1]);
    }, 3000);
    setTimeout(() => {
      this.settingSliderValues(matrix[1][0], matrix[1][1]);
    }, 8000);
    setTimeout(() => {
      this.settingSliderValues(matrix[2][0], matrix[2][1]);
    }, 12000);
    setTimeout(() => {
      this.movingImages();
    }, 12100);
  };

  componentDidMount() {
    // this.movingImages();
  }

  render() {
    const { genresName } = this.props;

    return (
      <div className={`container-xl ${s.slider_bg}`}>
        <div className="row">
          <div className="col">
            {genresName.map(
              (name: any, k: number) =>
                k < 3 && (
                  <div key={k} ref={this.getArrayOfImages}>
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
