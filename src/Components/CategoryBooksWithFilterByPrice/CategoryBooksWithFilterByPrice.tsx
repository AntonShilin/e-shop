import * as React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { viewBookID } from "../../Actions/ShopActions";
import { IApplicationState } from "../../Store/Store";
import NoBooksByFilter from "../NoBooksByFilter/NoBooksByFilter";
import SelectBox from "../ShopFilter/SelectBox/SelectBox";
import cbwf from "./CategoryBooksWithFilterByPrice.module.scss";

export interface ICategoryBooksWithFilterProps {
  shopName: string;
  allGenresData: any[];
  filterByValue: string;
  shopID: number;
  maxPrice: number;
  minPrice: number;
  viewBookID: typeof viewBookID;
  filterByPriceOn: {
    max: number;
    min: number;
  };
}

export interface ICategoryBooksWithFilterState {
  numbersOfBooks: number;
}

class CategoryBooksWithFilterByPrice extends React.Component<
  ICategoryBooksWithFilterProps,
  ICategoryBooksWithFilterState
> {
  constructor(props: ICategoryBooksWithFilterProps) {
    super(props);
    this.state = {
      numbersOfBooks: 0,
    };
  }

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

  filterRange = (arrOfBooks: any[], max: number, min: number) => {
    return arrOfBooks.filter(
      (book) =>
        "retailPrice" in book.saleInfo &&
        book.saleInfo.retailPrice !== undefined &&
        book.saleInfo.retailPrice.amount / 28 < max &&
        book.saleInfo.retailPrice.amount / 28 > min
    );
  };

  countingBooks = () => {
    const { shopID, allGenresData } = this.props;
    let filtered: any[] = [];
    if (allGenresData[shopID] !== undefined) {
      filtered = this.filterRange(
        allGenresData[shopID].items,
        this.props.filterByPriceOn.max,
        this.props.filterByPriceOn.min
      );

      this.setState({ numbersOfBooks: filtered.length });
    }
  };

  componentDidUpdate(prevProps: {
    filterByPriceOn: { min: number; max: number };
  }) {
    if (
      this.props.filterByPriceOn.min !== prevProps.filterByPriceOn.min ||
      this.props.filterByPriceOn.max !== prevProps.filterByPriceOn.max
    ) {
      this.countingBooks();
    }
  }

  componentDidMount() {
    this.countingBooks();
  }

  render() {
    const { filterByValue, shopName, shopID, allGenresData } = this.props;
    const { max, min } = this.props.filterByPriceOn;
    const { numbersOfBooks } = this.state;

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
          <div className={`row ${cbwf.category_books_with_filter_title}`}>
            <div className="col-8">
              <h3>
                {shopName.trim().length > 0 ? shopName : "fairytales"} (
                {numbersOfBooks})
              </h3>
            </div>
            <div className="col-4">
              <SelectBox />
            </div>
          </div>
          <div className={`row ${cbwf.book_info}`}>
            {allGenresData[shopID].items.map(
              (
                book: {
                  saleInfo: { retailPrice: { amount: number } };
                  id: string;
                  volumeInfo: {
                    imageLinks: { thumbnail: string | undefined };
                    title:
                      | boolean
                      | React.ReactChild
                      | React.ReactFragment
                      | React.ReactPortal
                      | null
                      | undefined;
                    pageCount:
                      | string
                      | number
                      | boolean
                      | {}
                      | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                      | React.ReactNodeArray
                      | React.ReactPortal
                      | null
                      | undefined;
                    publishedDate:
                      | string
                      | number
                      | boolean
                      | {}
                      | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                      | React.ReactNodeArray
                      | React.ReactPortal
                      | null
                      | undefined;
                  };
                },
                k: number
              ) =>
                typeof book.saleInfo.retailPrice !== "undefined" &&
                book.saleInfo.retailPrice.amount / 28 < max &&
                book.saleInfo.retailPrice.amount / 28 > min && (
                  <div className="col-lg-4 col-md-4 col-sm-6" key={k}>
                    <NavLink
                      to="/book-view"
                      onClick={() => this.props.viewBookID(book.id)}
                    >
                      <img
                        src={book.volumeInfo.imageLinks.thumbnail}
                        alt={`img_${k}`}
                      />
                    </NavLink>
                    <p>{shopName}</p>
                    <NavLink
                      to="/book-view"
                      onClick={() => this.props.viewBookID(book.id)}
                    >
                      {book.volumeInfo.title}
                    </NavLink>
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
  filterByPriceOn: state.filterByPrice.filterByPriceOn,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    viewBookID: (id: string) => dispatch(viewBookID(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryBooksWithFilterByPrice);
