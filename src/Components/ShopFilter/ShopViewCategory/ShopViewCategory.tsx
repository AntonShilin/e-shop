import * as React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { IApplicationState } from "../../../Store/Store";
import SelectBox from "../SelectBox/SelectBox";
import cw from "./ShopViewCategory.module.scss";

export interface IShopViewCategoryProps {
  shopName: string;
  allGenresData: any[];
}

export interface State {}

class ShopViewCategory extends React.Component<IShopViewCategoryProps, State> {
  render() {
    const { shopName, allGenresData } = this.props;
    return (
      <>
        <div className={`row ${cw.category_title}`}>
          <div className="col-lg-12 d-lg-block d-none" />
          <div className="col-6">
            <h2>
              {shopName} ({allGenresData[0].items.length})
            </h2>
          </div>
          <div className="col-6 d-lg-block d-none">
            <SelectBox />
          </div>
        </div>
        <div className={`row ${cw.book_info}`}>
          {allGenresData[0] !== undefined &&
            allGenresData[0].items.map((book: any, k: number) => (
              <div className="col-lg-4 col-6" key={k}>
                <NavLink to="#">
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={`Card image_${k}`}
                  />
                </NavLink>
                <p>{shopName}</p>
                <NavLink to="#">{book.volumeInfo.title}</NavLink>
                <p>
                  {book.saleInfo.retailPrice.currencyCode}{" "}
                  {book.saleInfo.retailPrice.amount}
                </p>
                <p> {book.volumeInfo.publishedDate}</p>
                <p> {book.volumeInfo.pageCount}</p>
              </div>
            ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  shopName: state.shopContainer.shopName,
  allGenresData: state.data.allGenresData,
});

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopViewCategory);
