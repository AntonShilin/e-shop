import * as React from "react";
import c from "./Centerband.module.scss";
import { IApplicationState } from "../../Store/Store";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

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
          <div className="col-lg-5 col-md-5 col-sm-12">
            <h1>Find your book</h1>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12">
            <div className="row">
              {genresName.map(
                (name: any, k: number) =>
                  k>4 && k< 7  && (
                    <div  key={k} className="col-lg-6 col-md-6 col-sm-12">
                      <img
                        src={require(`../../Media/Images/${name}.png`)}
                        alt="name"
                      />
                      <NavLink to="#">Shop {name}</NavLink>
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
