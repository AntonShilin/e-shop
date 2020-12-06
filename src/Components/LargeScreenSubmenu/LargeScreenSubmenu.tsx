import * as React from "react";
import submenu from "./LargeScreenSubmenu.module.scss";
import { NavLink } from "react-router-dom";
import SearchPanel from "./SearchPanel/SearchPanel";
import { IApplicationState } from "../../Store/Store";
import { connect } from "react-redux";
import SelectedGenre from "./SelectedGenre/SelectedGenre";
import {
  openSelectedGenre,
  selectIdGenreInSubmenu,
} from "../../Actions/HeaderPanelActions";

export interface ISubmenuProps {
  genresName: string[];
  selectIdGenreInSubmenu: typeof selectIdGenreInSubmenu;
  openSelectedGenre: typeof openSelectedGenre;
}

export interface State {}

class LargeScreenSubmenu extends React.Component<ISubmenuProps, State> {

  render() {
    const { genresName } = this.props;

    return (
      <div className={`container-xl ${submenu.rootmenu} d-none d-lg-block`}>
        <div className="row">
          {genresName.map((name, i) => (
            <div
              className="col"
              key={i}
              onClick={() => {
                this.props.selectIdGenreInSubmenu(i);
                this.props.openSelectedGenre(true);
              }}
            >
              <NavLink to="#">{name}</NavLink>
            </div>
          ))}
          <div className="col">
            <NavLink to="#">shop all</NavLink>
          </div>
          <div className="col">
            <SearchPanel />
          </div>
        </div>
        <SelectedGenre />
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  genresName: state.data.genresName,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    selectIdGenreInSubmenu: (n: number) => dispatch(selectIdGenreInSubmenu(n)),
    openSelectedGenre: (value: boolean) => dispatch(openSelectedGenre(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LargeScreenSubmenu);
