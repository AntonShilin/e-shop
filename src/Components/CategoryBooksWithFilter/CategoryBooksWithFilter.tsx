import { render } from "@testing-library/react";
import * as React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { IApplicationState } from "../../Store/Store";
import SelectBox from "../ShopFilter/SelectBox/SelectBox";
import cbwf from "./CategoryBooksWithFilter.module.scss";

export interface ICategoryBooksWithFilterProps {
  shopName: string;
  allGenresData: any[];
  filterByValue: string;
  shopID: number;
  maxPrice: number;
  minPrice: number;
}

export interface ICategoryBooksWithFilterState {
  numberOfBooks: number;
}

class CategoryBooksWithFilter extends React.Component<
  ICategoryBooksWithFilterProps,
  ICategoryBooksWithFilterState
> {
  constructor(props: ICategoryBooksWithFilterProps) {
    super(props);
    this.state = {
      numberOfBooks: 0,
    };
  }

  countingFilteredBooks = () => {
    let x = 0;
    this.props.allGenresData[this.props.shopID].items.map(
      (book: any, k: number) => {
        if (
          book.saleInfo.retailPrice.amount / 28 < this.props.maxPrice &&
          book.saleInfo.retailPrice.amount / 28 > this.props.minPrice
        ) {
          this.setState({ numberOfBooks: ++x });
        }
      }
    );
  };

  render() {
    const {
      filterByValue,
      shopName,
      shopID,
      allGenresData,
      maxPrice,
      minPrice,
    } = this.props;

    return (
      allGenresData[shopID] !== undefined && (
        <>
          <div className={`row ${cbwf.category_books_with_filter_title}`}>
            <div className="col-8">
              <h2>
                {shopName.trim().length > 0 ? shopName : "fairytales"} (
                {this.state.numberOfBooks})
              </h2>
            </div>
            <div className="col-4">
              <SelectBox />
            </div>
          </div>
          <div className={`row ${cbwf.book_info}`}>
            {allGenresData[shopID].items.map(
              (book: any, k: number) =>
                book.saleInfo.retailPrice.amount / 28 < maxPrice &&
                book.saleInfo.retailPrice.amount / 28 > minPrice && (
                  <div className="col-lg-4 col-md-4 col-sm-6" key={k}>
                    <NavLink to="#">
                      <img
                        src={book.volumeInfo.imageLinks.thumbnail}
                        alt={`img_${k}`}
                        onLoad={this.countingFilteredBooks}
                      />
                    </NavLink>
                    <p>{shopName}</p>
                    <NavLink to="#">{book.volumeInfo.title}</NavLink>
                    <p>{book.volumeInfo.pageCount} pages</p>
                    <p>Published: {book.volumeInfo.publishedDate}</p>
                    <p>
                      {(book.saleInfo.retailPrice.amount / 28).toFixed(2)} $
                    </p>
                  </div>
                )
            )}
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
  maxPrice: state.filterByPrice.maxPrice,
  minPrice: state.filterByPrice.minPrice,
});

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryBooksWithFilter);
