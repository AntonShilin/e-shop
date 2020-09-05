import * as React from "react";
import searchpanel from "./SearchPanel.module.scss";
import { MdClose } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

export interface ISearchPanelProps {}

export interface ISearchPanelState {
  isOpen: boolean;
}

class SearchPanel extends React.Component<
  ISearchPanelProps,
  ISearchPanelState
> {
  searchInput: React.RefObject<HTMLDivElement>;
  constructor(props: ISearchPanelProps) {
    super(props);
    this.state = {
      isOpen: false,
    };
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
    this.setState({ isOpen: true });
  };

  public closeSearchInput = () => {
    this.toggleSearchInput(this.searchInput.current!, 4, "transparent");
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <div className={searchpanel.search_sm_devices} ref={this.searchInput}>
        <span
          className={this.state.isOpen ? "d-block" : "d-none"}
          onClick={this.closeSearchInput}
        >
          <MdClose />
        </span>
        <input
          autoFocus={false}
          type="text"
          className="search_sm_devices_input"
        />
        <span onClick={this.openSearchInput}>
          <FiSearch />
        </span>
      </div>
    );
  }
}

export default SearchPanel;
