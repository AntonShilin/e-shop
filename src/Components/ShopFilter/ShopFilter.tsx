import * as React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { IApplicationState } from "../../Store/Store";
import sf from "./ShopFilter.module.scss";

export interface IShopFilterProps {
  shopName: string;
  allGenresData: any[];
}

export interface IShopFilterState {}

class ShopFilter extends React.Component<IShopFilterProps, IShopFilterState> {
  render() {
    const { shopName, allGenresData } = this.props;
    return (
      <div className={`container-xl ${sf.filter_main_container}`}>
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <div>
              <span>Filter</span>
            </div>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div className="col-12">
                <h2>
                  {shopName} ({allGenresData[0].items.length})
                </h2>
              </div>
            </div>
            <div className="row">
              {allGenresData[0] !== undefined &&
                allGenresData[0].items.map((book: any, k: number) => (
                  <div className="col-4" key={k}>
                      <NavLink to="#">
                        <img
                          src={book.volumeInfo.imageLinks.thumbnail}
                          alt={`Card image_${k}`}
                        />
                      </NavLink>
                      <p>{shopName}</p>
                      <NavLink to="#">{book.volumeInfo.title}</NavLink>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  isShopOpen: state.shopContainer.isShopOpen,
  shopName: state.shopContainer.shopName,
  allGenresData: state.data.allGenresData,
});

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopFilter);
