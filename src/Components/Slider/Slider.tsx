import * as React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { setInterval } from "timers";
import { getShopID, selectShopName } from "../../Actions/ShopActions";
import { IApplicationState } from "../../Store/Store";
import s from "./Slider.module.scss";

export interface Props {
  genresName: string[];
  isHiddenContainer: boolean;
  getShopID: typeof getShopID;
  selectShopName: typeof selectShopName;
}

export interface State {
  genres: string[];
}

class Slider extends React.Component<Props, State> {
  slides: any[];
  slider: React.RefObject<HTMLDivElement>;
  sliderLine: React.RefObject<HTMLDivElement>;
  constructor(props: Props) {
    super(props);
    this.state = {
      genres: ["biography", "fairytales", "lifestyle"],
    };
    this.slides = [];
    this.slider = React.createRef();
    this.sliderLine = React.createRef();
  }

  delete = () => {
    setInterval(() => {
      const newItems = this.state.genres;
      let removed = [];
      removed = newItems.splice(1);
      this.setState({ genres: [...removed, ...newItems] });
    }, 5000);
  };


  componentDidMount() {
    this.delete();
  }

  render() {
    const { genres } = this.state;

    return (
      <div className={`container-xl ${s.slider}`} ref={this.slider}>
        <div className={`row `}>
          {genres.map(
            (name: string, k: number) =>
              k === 0 && (
                <div
                  className="col"
                  key={k}
                  ref={(ref) => (this.slides[k] = ref)}
                >
                  <h1>{name}</h1>
                  <img
                    src={require(`../../Media/Images/${name}.png`)}
                    alt="name"
                  />
                  <NavLink
                    to="/shop"
                    onClick={() => {
                      this.props.getShopID(k);
                      this.props.selectShopName(name);
                    }}
                  >
                    Shop now
                  </NavLink>
                </div>
              )
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  genresName: state.data.genresName,
  isHiddenContainer: state.shopContainer.isHiddenContainer,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    getShopID: (id: number) => dispatch(getShopID(id)),
    selectShopName: (name: string) => dispatch(selectShopName(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
