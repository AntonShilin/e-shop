import * as React from "react";
import { connect } from "react-redux";
import { IApplicationState } from "../../Store/Store";

const GetOnlyYears = (Component: typeof React.Component) => {
  interface IGetOnlyYearsProps {
    allGenresData: any[];
    id: number;
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
      const { id } = this.props;
      if(this.props.allGenresData[id] !== undefined) {
        this.filterByUniqueYear(this.props.allGenresData[id].items);
      }
    }

    render() {
      return <Component uniqueYears={this.state.uniqueYears} {...this.props} />;
    }
  }

  const mapStateToProps = (state: IApplicationState) => {
    return {
      allGenresData: state.data.allGenresData,
      id: state.headerSearchPanel.id
    };
  };

  return connect(mapStateToProps, null)(YearsArray);
};

export default GetOnlyYears;
