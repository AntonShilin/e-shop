import * as React from "react";
import searchpanel from "./SearchPanel.module.scss";
import { MdClose } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { IApplicationState } from "../../../Store/Store";
import { connect } from "react-redux";
import {
  closeSearchPanelLarge,
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

  private toggleSearchInput = (
    elem: HTMLDivElement,
    w: number,
    color: string
  ) => {
    elem.style.transition = "width .7s";
    elem.style.width = w + "rem";
    if (color === "transparent") {
      setTimeout(() => {
        elem.style.backgroundColor = color;
      }, 1000);
    } else {
      elem.style.backgroundColor = color;
    }
  };

  public openSearchInput = () => {
    this.toggleSearchInput(this.searchInput.current!, 28, "#494949");
  };

  public closeSearchInput = () => {
    this.toggleSearchInput(this.searchInput.current!, 4, "transparent");
  };

  render() {
    const { value, isOpenSearchPanelLarge } = this.props;

    return (
      <>
        <div className={searchpanel.search_sm_devices} ref={this.searchInput}>
          <span
            className={isOpenSearchPanelLarge ? "d-block" : "d-none"}
            onClick={() => {
              this.closeSearchInput();
              this.props.getSearchValue("");
              this.props.closeSearchPanelLarge(false);
            }}
          >
            <MdClose />
          </span>
          <input
            value={value}
            autoFocus={true}
            type="text"
            className="search_sm_devices_input"
            onChange={(e) => this.props.getSearchValue(e.currentTarget.value)}
          />
          <span
            onClick={() => {
              this.openSearchInput();
              this.props.openSearchPanelLarge(true);
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
    openSearchPanelLarge: (value: boolean) =>
      dispatch(openSearchPanelLarge(value)),
    closeSearchPanelLarge: (value: boolean) =>
      dispatch(closeSearchPanelLarge(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);
