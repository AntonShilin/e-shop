import * as React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { IApplicationState } from "../../../Store/Store";
import pw from "./BookView.module.scss";

export interface IBookViewProps {
  shopName: string;
  allGenresData: any[];
  shopID: number;
}

export interface IBookViewState {}

class BookView extends React.Component<IBookViewProps, IBookViewState> {
  render() {
    const { shopName, shopID, allGenresData } = this.props;

    return (
      allGenresData[shopID] !== undefined && (
        <div className={`container-xl ${pw.book_view_bg}`}>
          <div className="row">
            <div className="col">
              <div>
                <NavLink to="/shop">{shopName}</NavLink>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-12">
              <img
                src={
                  allGenresData[shopID].items[0].volumeInfo.imageLinks.thumbnail
                }
                alt="img"
              />
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12">
              <p>{shopName}</p>
              <h3>{allGenresData[shopID].items[0].volumeInfo.title}</h3>
              <p>
                ${" "}
                {(
                  allGenresData[shopID].items[0].saleInfo.retailPrice.amount /
                  28
                ).toFixed(2)}
              </p>
              <p>{allGenresData[shopID].items[0].volumeInfo.pageCount} pages</p>
              <p>
                Published:{" "}
                {allGenresData[shopID].items[0].volumeInfo.publishedDate}
              </p>
              <div>
                <span>Qty</span>
                <span>-</span>
                <span>0</span>
                <span>+</span>
              </div>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      )
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  shopName: state.shopContainer.shopName,
  allGenresData: state.data.allGenresData,
  shopID: state.shopContainer.shopID,
});

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BookView);
