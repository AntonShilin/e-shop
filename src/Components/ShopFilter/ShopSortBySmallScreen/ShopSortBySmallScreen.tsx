import * as React from "react";
import { MdClose } from "react-icons/md";
import ClearFilter from "../../ClearFilter/ClearFilter";
import SelectBox from "../SelectBox/SelectBox";
import sbt from "./ShopSortBy.module.scss";
import SortByPrice from "./SortByPrice/SortByPrice";
import SortByYear from "./SortByYear/SortByYear";

export interface IShopSortBySmallScreenProps {}

export interface IShopSortBySmallScreenState {
  showAllFilters: boolean;
}

class ShopSortBySmallScreen extends React.Component<
  IShopSortBySmallScreenProps,
  IShopSortBySmallScreenState
> {
  constructor(props: IShopSortBySmallScreenProps) {
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
          <div className={`${this.state.showAllFilters ? "col-12" : "col-6"}`}>
            <p onClick={this.showAllFilters}>Filter</p>
            <b
              className={this.state.showAllFilters ? "d-block" : "d-none"}
              onClick={this.hideAllFilters}
            >
              <MdClose />
            </b>
          </div>
          {this.state.showAllFilters ? null : (
            <div className="col-6">
              <SelectBox />
            </div>
          )}
        </div>
        <div
          className={`row ${this.state.showAllFilters ? "d-block" : "d-none"}`}
        >
          <div className="col">
            <SortByPrice />
          </div>
          <div className="col">
            <SortByYear />
          </div>
          <div className="col">
            <ClearFilter/>
          </div>
        </div>
      </>
    );
  }
}

export default ShopSortBySmallScreen;
