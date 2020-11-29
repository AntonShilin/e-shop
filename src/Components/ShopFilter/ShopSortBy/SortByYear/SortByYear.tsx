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
          <div>
            <label>
              <input type="checkbox" value="" />
              2017
            </label>
          </div>
        )}
      </div>
    );
  }
}

export default SortByYear;
