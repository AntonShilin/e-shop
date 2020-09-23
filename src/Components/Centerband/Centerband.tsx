import * as React from "react";
import c from "./Centerband.module.scss";
import { IApplicationState } from "../../Store/Store";
import { connect } from "react-redux";

export interface ICenterbandProps {
  genresName: string[];
}

export interface State {}

class Centerband extends React.Component<ICenterbandProps, State> {
  render() {
    const { genresName } = this.props;
    return (
      <div className="container-xl">
        <div className={`row ${c.center_band}`}>
          <div className="col-lg-5 col-md-12 col-sm-12">
            <h1>Find your book</h1>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12">
            <div className="row">
              {genresName.map(
                (name: any, k: number) =>
                  k>4 && k< 7  && (
                    <div className="col-6">
                      <img
                        key={k}
                        src={require(`../../Media/Images/${name}.png`)}
                        alt="name"
                      />
                    </div>
                  )
              )}
            </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(Centerband);
