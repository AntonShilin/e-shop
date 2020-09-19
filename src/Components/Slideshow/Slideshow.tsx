import * as React from "react";
import s from "./Slideshow.module.scss";
import { IApplicationState } from "../../Store/Store";
import { connect } from "react-redux";

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
          [1, 1, -1],
          [-105, 0, 105],
        ],
        [
          [-1, 1, 1],
          [105, -105, 0],
        ],
        [
          [1, -1, 1],
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
      this.images[i].style.zIndex = arr0[i].toString();
      this.images[i].style.left = `${arr1[i]}%`;
    });
  };

  public movingImages = () => {
    const { matrix } = this.state;
    setTimeout(() => {
      this.settingSliderValues(matrix[0][0], matrix[0][1]);
    }, 3000);
    setTimeout(() => {
      this.settingSliderValues(matrix[1][0], matrix[1][1]);
    }, 6000);
    setTimeout(() => {
      this.settingSliderValues(matrix[2][0], matrix[2][1]);
    }, 9000);
    setTimeout(() => {
      this.movingImages();
    }, 9100);
  };

  componentDidMount() {
    this.movingImages();
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
                  <img
                    key={k}
                    ref={this.getArrayOfImages}
                    src={require(`../../Media/Images/${name}.jpg`)}
                    alt="name"
                  />
                )
            )}
          </div>
        </div>
        <div className="row">dsadsadss</div>
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
