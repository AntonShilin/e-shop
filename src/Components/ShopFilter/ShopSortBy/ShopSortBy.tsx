import * as React from "react";
import { MdClose } from "react-icons/md";
import sbt from "./ShopSortBy.module.scss";
import SortByPrice from "./SortByPrice/SortByPrice";

export interface IShopSortByProps {}

export interface IShopSortByState {
  showAllFilters: boolean;
}

class ShopSortBy extends React.Component<IShopSortByProps, IShopSortByState> {
  constructor(props: IShopSortByProps) {
    super(props);
    this.state = {
      showAllFilters: true,
    };
  }
  public showAllFilters = () => {
    this.setState({ showAllFilters: true });
  };

  public hideAllFilters = () => {
    this.setState({ showAllFilters: false });
  };

  render() {
    return (
      <>
        <div className={`row ${sbt.sort_by_title}`}>
          <div className="col-2">
            <span
              className={this.state.showAllFilters ? "d-block" : "d-none"}
              onClick={this.hideAllFilters}
            >
              <MdClose />
            </span>
          </div>
          <div className="col-10" onClick={this.showAllFilters}>
            <span>Filter</span>
          </div>
        </div>
        <div
          className={`row ${this.state.showAllFilters ? "d-block" : "d-none"}`}
        >
          <div className="col">
            <SortByPrice />
          </div>
        </div>
      </>
    );
  }
}

export default ShopSortBy;
