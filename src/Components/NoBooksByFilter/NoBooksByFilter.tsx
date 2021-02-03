import * as React from "react";
import { connect } from "react-redux";
import { offYearEnableFilter } from "../../Actions/FilterByYearActions";
import { IApplicationState } from "../../Store/Store";
import nbbf from "./NoBooksByFilter.module.scss";

export interface INoBooksByFilterProps {
  offYearEnableFilter: typeof offYearEnableFilter;
}

export interface State {}

class NoBooksByFilter extends React.Component<INoBooksByFilterProps, State> {
  componentDidMount() {
    this.props.offYearEnableFilter(false);
  }

  render() {
    return (
      <div className="container-xl">
        <div className="row">
          <div className="col">
            <div className={nbbf.note_msg}>
              <h2>There are no products matching the selection.</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  checkedYears: state.filterByYear.checkedYears,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    offYearEnableFilter: (value: boolean) =>
      dispatch(offYearEnableFilter(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoBooksByFilter);
