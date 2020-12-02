import * as React from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { connect } from "react-redux";
import { filterByValue } from "../../../Actions/ShopActions";
import { IApplicationState } from "../../../Store/Store";
import sb from "./SelectBox.module.scss";

export interface ISelectBoxProps {
  allGenresData: any[];
  filterByValue: typeof filterByValue;
}

export interface State {
  names: string[];
  isOpen: boolean;
}

class SelectBox extends React.Component<ISelectBoxProps, State> {
  constructor(props: ISelectBoxProps) {
    super(props);
    this.state = { names: ["name", "price", "newest"], isOpen: false };
  }

  public toggleSelectBox() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div className={sb.select_box_main}>
        <div
          className={sb.select_box_title}
          onClick={() => this.toggleSelectBox()}
        >
          <span>{this.state.names[0]}</span>
            {this.state.isOpen ? (
              <MdKeyboardArrowUp />
            ) : (
              <MdKeyboardArrowDown />
            )}
        </div>
        {this.state.isOpen && (
          <div className={sb.select_box_names}>
            {this.state.names.map((value, i) => (
              <span
                key={i}
                onClick={() => this.props.filterByValue(value)}
              >
                {value}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  allGenresData: state.data.allGenresData,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    filterByValue:(name:string)=>dispatch(filterByValue(name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectBox);
