import * as React from "react";
import { connect } from "react-redux";
import { IApplicationState } from "../../../../Store/Store";
import GetOnlyYears from "../../../HOC/GetOnlyYears";
import sy from "./SortByYear.module.scss";

export interface ISortByYearProps {
  allGenresData: any[];
  uniqueYears: any[];
}

export interface ISortByYearState {
  showYearFilter: boolean;
}

class SortByYear extends React.Component<ISortByYearProps, ISortByYearState> {
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
    const { uniqueYears } = this.props;
    const { showYearFilter } = this.state;

    return (
      <div className={sy.sort_by_year_main_sm}>
        <p onClick={this.toggleFilterYear}>Year</p>
        {showYearFilter && 
        <div>
          {uniqueYears.length>0 &&
            uniqueYears.map((year: any, k: number) => (
              <span key={k}>
                <label>
                  <input type="checkbox" value={year}/>
                  {year}
                </label>
              </span>
            ))}
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  allGenresData: state.data.allGenresData,
});

const mapDispatchToProps = (dispatch: any) => {
  return {};
};


const withOnlyYears = GetOnlyYears(SortByYear);
export default connect(mapStateToProps,mapDispatchToProps)(withOnlyYears);
