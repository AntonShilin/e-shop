import * as React from "react";
import { connect } from "react-redux";
import {
  addBookToCart,
  deleteBookFromCart,
} from "../../../../Actions/CartActions";
import { IApplicationState } from "../../../../Store/Store";
import { IBookInfo } from "../../../../Types/CartTypes";
import bfs from "./BookForSale.module.scss";

export interface IBookForSaleProps {
  cart: IBookInfo[];
  deleteBookFromCart: typeof deleteBookFromCart;
  addBookToCart: typeof addBookToCart;
}

export interface IBookForSaleState {}

class BookForSale extends React.Component<
  IBookForSaleProps,
  IBookForSaleState
> {
  getFromLocalStorage = () => {
    const { cart } = this.props;
    if (cart.length === 0) {
      for (const key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
          continue;
        }
        const item = JSON.parse(localStorage.getItem(key)!);
        this.props.addBookToCart(item);
      }
    }
  };

  deleteBookFromLocalStorageById = (id: any) => {
    localStorage.removeItem(id);
    console.log(id)
  };

  componentDidMount() {
    this.getFromLocalStorage();
  }

  render() {
    const { cart } = this.props;

    return (
      cart.length > 0 &&
      cart.map((book, i) => (
        <div className={bfs.book_for_sale_item} key={i}>
          <span
            onClick={() => {
              this.props.deleteBookFromCart(book.id);
              this.deleteBookFromLocalStorageById(book.id);
            }}
          >
            &#x2573;
          </span>
          <div>
            <div>
              <img src={book.url} alt={`img_${i}`} />
            </div>
            <div>
              <span>{book.shopName}</span>
              <span>{book.title}</span>
              <span>{book.publishedDate}</span>
              <span>{book.pageCount} pages</span>
              <div>
                <span>Qty</span>
                <span>{book.quantityToPurchase}</span>
              </div>
            </div>
            <div>
              <span>$ {book.price}</span>
            </div>
          </div>
        </div>
      ))
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  cart: state.cartContainer.cart,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    deleteBookFromCart: (id: string) => dispatch(deleteBookFromCart(id)),
    addBookToCart: (book: any) => dispatch(addBookToCart(book)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookForSale);
