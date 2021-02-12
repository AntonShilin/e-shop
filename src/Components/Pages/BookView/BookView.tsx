import * as React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { addBookToCart } from "../../../Actions/CartActions";
import { IApplicationState } from "../../../Store/Store";
import pw from "./BookView.module.scss";

export interface IBookViewProps {
  shopName: string;
  allGenresData: any[];
  shopID: number;
  viewBookID: string;
  addBookToCart: typeof addBookToCart;
}

export interface IBookViewState {
  quantityToPurchase: number;
}

class BookView extends React.Component<IBookViewProps, IBookViewState> {
  constructor(props: IBookViewProps) {
    super(props);
    this.state = {
      quantityToPurchase: 1,
    };
  }

  increment = () => {
    this.setState({ quantityToPurchase: this.state.quantityToPurchase + 1 });
  };

  decrement = () => {
    if (this.state.quantityToPurchase > 1) {
      this.setState({ quantityToPurchase: this.state.quantityToPurchase - 1 });
    }
  };


  render() {
    const { shopName, shopID, allGenresData, viewBookID } = this.props;
    const { quantityToPurchase } = this.state;

    return (
      <div className={`container-xl ${pw.book_view_bg}`}>
        <div className="row">
          <div className="col">
            <div>
              <NavLink to="/shop">{shopName}</NavLink>
            </div>
          </div>
        </div>
        {allGenresData[shopID] !== undefined &&
          allGenresData[shopID].items.map(
            (
              book: {
                id: string;
                volumeInfo: {
                  imageLinks: { thumbnail: string | undefined };
                  title: React.ReactNode;
                  pageCount: React.ReactNode;
                  publishedDate: React.ReactNode;
                };
                saleInfo: { retailPrice: { amount: number } };
              },
              i: any
            ) => {
              return (
                book.id === viewBookID && (
                  <div className="row" key={i}>
                    <div className="col-lg-7 col-md-7 col-sm-12">
                      <img
                        src={book.volumeInfo.imageLinks.thumbnail}
                        alt="img"
                      />
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12">
                      <p>{shopName}</p>
                      <h3>{book.volumeInfo.title}</h3>
                      <p>
                        $ {(book.saleInfo.retailPrice.amount / 28).toFixed(2)}
                      </p>
                      <p>{book.volumeInfo.pageCount} pages</p>
                      <p>Published: {book.volumeInfo.publishedDate}</p>
                      <div>
                        <span>Qty</span>
                        <span onClick={this.decrement}>-</span>
                        <span>{quantityToPurchase}</span>
                        <span onClick={this.increment}>+</span>
                      </div>
                      <button
                        onClick={() =>
                          this.props.addBookToCart(
                            book.volumeInfo.imageLinks.thumbnail,
                            shopName,
                           book.volumeInfo.title,
                            (
                              book.saleInfo.retailPrice.amount / 28
                            ).toFixed(2),
                           book.volumeInfo.pageCount,
                           book.volumeInfo.publishedDate,
                            this.state.quantityToPurchase,
                          )
                        }
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                )
              );
            }
          )}
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  shopName: state.shopContainer.shopName,
  allGenresData: state.data.allGenresData,
  shopID: state.shopContainer.shopID,
  viewBookID: state.shopContainer.viewBookID,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    addBookToCart: (...arg: any) => dispatch(addBookToCart(...arg)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookView);
