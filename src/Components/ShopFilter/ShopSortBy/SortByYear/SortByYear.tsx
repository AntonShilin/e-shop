import * as React from "react";
import sy from "./SortByYear.module.scss";

export interface ISortByYearProps {}

export interface State {
  showYearFilter: boolean;
}

class SortByYear extends React.Component<ISortByYearProps, State> {
  constructor(props: ISortByYearProps) {
    super(props);
    this.state = {
      showYearFilter: false,
    };
  }

  public toggleFilterYear = () => {
    this.setState({ showYearFilter: !this.state.showYearFilter });
  };

  render() {
    return (
      <div className={sy.sort_by_year_main}>
        <p onClick={this.toggleFilterYear}>Year</p>
        {this.state.showYearFilter && (
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox" className="form-check-input" value="" />
              2017
            </label>
          </div>
        )}
      </div>
    );
  }
}

export default SortByYear;
