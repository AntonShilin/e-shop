import * as React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { IApplicationState } from "../../../Store/Store";
import cb from "./CategoryBooks.module.scss";

export interface ICategoryBooksProps {
  shopName: string;
  allGenresData: any[];
}

export interface State {}

class CategoryBooks extends React.Component<ICategoryBooksProps, State> {
  render() {
    const { shopName, allGenresData } = this.props;
    return (
      <div className={`row ${cb.book_info}`}>
        {allGenresData[0] !== undefined &&
          allGenresData[0].items.map((book: any, k: number) => (
            <div className="col-lg-4 col-md-4 col-sm-6" key={k}>
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoryBooks);
