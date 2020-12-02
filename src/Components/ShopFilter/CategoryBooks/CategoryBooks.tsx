import * as React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { IApplicationState } from "../../../Store/Store";
import SelectBox from "../SelectBox/SelectBox";
import cb from "./CategoryBooks.module.scss";

export interface ICategoryBooksProps {
  shopName: string;
  allGenresData: any[];
  filterByValue: string;
}

export interface ICategoryBooksState {
  allGenresData: any[];
}

class CategoryBooks extends React.Component<
  ICategoryBooksProps,
  ICategoryBooksState
> {
  constructor(props: ICategoryBooksProps) {
    super(props);
    this.state = {
      allGenresData: this.props.allGenresData,
    };
  }

  render() {
    const { filterByValue } = this.props;
    const { shopName } = this.props;
    const { allGenresData } = this.state;

    if (filterByValue === "name") {
      allGenresData[0].items.sort(
        (
          a: { volumeInfo: { title: any } },
          b: { volumeInfo: { title: any } }
        ) => a.volumeInfo.title.localeCompare(b.volumeInfo.title)
      );
    } else if (filterByValue === "price") {
      allGenresData[0].items.sort(
        (
          a: { saleInfo: { listPrice: { amount: number } } },
          b: { saleInfo: { listPrice: { amount: number } } }
        ) => a.saleInfo.listPrice.amount - b.saleInfo.listPrice.amount
      );
    } else if (filterByValue === "newest") {
      allGenresData[0].items.sort(
        (a: any, b: any) =>
          b.volumeInfo.publishedDate.match(/\d+/)[0] -
          a.volumeInfo.publishedDate.match(/\d+/)[0]
      );
    }

    return (
      <>
        <div className={`row ${cb.category_books_title}`}>
          <div className="col-8">
            <h2>
              {shopName} ({allGenresData[0].items.length})
            </h2>
          </div>
          <div className="col-4">
            <SelectBox />
          </div>
        </div>
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
                <p>{book.volumeInfo.pageCount} pages</p>
                <p>Published: {book.volumeInfo.publishedDate}</p>
                <p>
                  {book.saleInfo.retailPrice.amount}{" "}
                  {book.saleInfo.retailPrice.currencyCode}
                </p>
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
  filterByValue: state.shopContainer.filterByValue,
});

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryBooks);
