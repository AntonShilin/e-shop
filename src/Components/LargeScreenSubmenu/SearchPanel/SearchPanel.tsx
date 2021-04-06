import * as React from "react";
import searchpanel from "./SearchPanel.module.scss";
import { MdClose } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { IApplicationState } from "../../../Store/Store";
import { connect } from "react-redux";
import {
  closeSearchPanelLarge,
  getSearchPanelElement,
  getSearchValue,
  openSearchPanelLarge,
} from "../../../Actions/SearchMenuActions";
import SearchMenuResults from "../../SearchMenuResults/SearchMenuResults";

export interface ISearchPanelProps {
  allGenresData: null | any;
  getSearchValue: typeof getSearchValue;
  value: string;
  isOpenSearchPanelLarge: boolean;
  openSearchPanelLarge: typeof openSearchPanelLarge;
  closeSearchPanelLarge: typeof closeSearchPanelLarge;
  getSearchPanelElement: typeof getSearchPanelElement;
}

export interface ISearchPanelState {}

class SearchPanel extends React.Component<
  ISearchPanelProps,
  ISearchPanelState
> {
  searchInput: React.RefObject<HTMLDivElement>;
  constructor(props: ISearchPanelProps) {
    super(props);
    this.searchInput = React.createRef();
  }

  componentDidMount() {
    this.props.getSearchPanelElement(this.searchInput.current!)
  }

 
  
  render() {
    const { value, isOpenSearchPanelLarge } = this.props;

    return (
      <>
        <div className={searchpanel.search_sm_devices} ref={this.searchInput}>
          <span
            className={isOpenSearchPanelLarge ? "d-block" : "d-none"}
            onClick={(e) => {
              console.log(e);
              this.props.getSearchValue("");
              this.props.closeSearchPanelLarge(
                false,
                this.searchInput.current!,
                4,
                "transparent"
              );
            }}
          >
            <MdClose />
          </span>
          <input
            value={value}
            type="text"
            onChange={(e) => this.props.getSearchValue(e.currentTarget.value)}
          />
          <span
            onClick={() => {
              this.props.openSearchPanelLarge(
                true,
                this.searchInput.current!,
                28,
                "#494949"
              );
            }}
          >
            <FiSearch />
          </span>
        </div>
        <SearchMenuResults />
      </>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  allGenresData: state.data.allGenresData,
  value: state.searchMenu.value,
  isOpenSearchPanelLarge: state.searchMenu.isOpenSearchPanelLarge,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    getSearchValue: (name: string) => dispatch(getSearchValue(name)),
    getSearchPanelElement: (node: HTMLDivElement) => dispatch(getSearchPanelElement(node)),
    openSearchPanelLarge: (
      value: boolean,
      elem: HTMLDivElement,
      width: number,
      color: string
    ) => dispatch(openSearchPanelLarge(value, elem, width, color)),
    closeSearchPanelLarge: (
      value: boolean,
      elem: HTMLDivElement,
      width: number,
      color: string
    ) => dispatch(closeSearchPanelLarge(value, elem, width, color)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);
