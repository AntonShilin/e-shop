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
  shopID: number;
}

export interface ICategoryBooksState {}

class CategoryBooks extends React.Component<
  ICategoryBooksProps,
  ICategoryBooksState
> {
  filteredByName = () => {
    const { shopID, allGenresData } = this.props;
    if (allGenresData[shopID] !== undefined) {
      allGenresData[
        shopID
      ].items.sort(
        (
          a: { volumeInfo: { title: string } },
          b: { volumeInfo: { title: string } }
        ) => a.volumeInfo.title.localeCompare(b.volumeInfo.title)
      );
    }
  };

  filteredByPrice = () => {
    const { shopID, allGenresData } = this.props;
    if (allGenresData[shopID] !== undefined) {
      allGenresData[shopID].items.sort(
        (
          a: { saleInfo: { listPrice: { amount: number } } },
          b: { saleInfo: { listPrice: { amount: number } } }
        ) => a.saleInfo.listPrice.amount - b.saleInfo.listPrice.amount
      );
    }
  };

  filterByNewest = () => {
    const { shopID, allGenresData } = this.props;
    if (allGenresData[shopID] !== undefined) {
      allGenresData[shopID].items.sort(
        (
          a: {
            volumeInfo: {
              publishedDate: { match: (arg0: RegExp) => number[] };
            };
          },
          b: {
            volumeInfo: {
              publishedDate: { match: (arg0: RegExp) => number[] };
            };
          }
        ) => {
          if (
            "publishedDate" in b.volumeInfo &&
            "publishedDate" in a.volumeInfo
          ) {
            if (
              b.volumeInfo.publishedDate !== undefined &&
              a.volumeInfo.publishedDate !== undefined
            ) {
              return (
                b.volumeInfo.publishedDate.match(/\d+/)[0] -
                a.volumeInfo.publishedDate.match(/\d+/)[0]
              );
            }
          }
        }
      );
    }
  };

  render() {
    const { filterByValue, shopName, shopID, allGenresData } = this.props;

    if (filterByValue === "name") {
      this.filteredByName();
    } else if (filterByValue === "price") {
      this.filteredByPrice();
    } else if (filterByValue === "newest") {
      this.filterByNewest();
    }

    return (
      allGenresData[shopID] !== undefined && (
        <>
          <div className={`row ${cb.category_books_title}`}>
            <div className="col-8">
              <h2>
                {shopName} ({allGenresData[shopID].items.length})
              </h2>
            </div>
            <div className="col-4">
              <SelectBox />
            </div>
          </div>
          <div className={`row ${cb.book_info}`}>
            {allGenresData[shopID].items.map((book: any, k: number) => (
              <div className="col-lg-4 col-md-4 col-sm-6" key={k}>
                <NavLink to="#">
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={`img_${k}`}
                  />
                </NavLink>
                <p>{shopName}</p>
                <NavLink to="#">{book.volumeInfo.title}</NavLink>
                <p>{book.volumeInfo.pageCount} pages</p>
                <p>Published: {book.volumeInfo.publishedDate}</p>
                <p>{(book.saleInfo.retailPrice.amount / 28).toFixed(2)} $</p>
              </div>
            ))}
          </div>
        </>
      )
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  shopName: state.shopContainer.shopName,
  allGenresData: state.data.allGenresData,
  filterByValue: state.shopContainer.filterByValue,
  shopID: state.shopContainer.shopID,
});

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryBooks);
