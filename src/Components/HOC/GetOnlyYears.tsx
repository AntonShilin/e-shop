import * as React from "react";
import { connect } from "react-redux";
import { IApplicationState } from "../../Store/Store";

const GetOnlyYears = (Component: typeof React.Component) => {
  interface IGetOnlyYearsProps {
    allGenresData: any[];
  }

  interface IGetOnlyYearsState {
    uniqueYears: any[];
  }

  class YearsArray extends React.Component<
    IGetOnlyYearsProps,
    IGetOnlyYearsState
  > {
    constructor(props: IGetOnlyYearsProps) {
      super(props);
      this.state = { uniqueYears: [] };
    }

    filterByUniqueYear = (arr: any[]) => {
      let onlyYears: number[] = [];
      onlyYears = arr.map(
        (book: any, k: number) => book.volumeInfo.publishedDate.match(/\d+/)[0]
      );
      onlyYears = onlyYears.filter((item, i) => onlyYears.indexOf(item) === i);
      onlyYears.sort((a, b) => a - b);
      this.setState({ uniqueYears: [...onlyYears] });
    };

    componentDidMount() {
      this.filterByUniqueYear(this.props.allGenresData[0].items);
    }

    render() {
      return <Component uniqueYears={this.state.uniqueYears} {...this.props} />;
    }
  }

  const mapStateToProps = (state: IApplicationState) => {
    return {
      allGenresData: state.data.allGenresData,
    };
  };

  return connect(mapStateToProps, null)(YearsArray);
};

export default GetOnlyYears;
