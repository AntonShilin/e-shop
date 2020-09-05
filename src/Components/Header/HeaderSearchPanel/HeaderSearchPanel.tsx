import * as React from "react";
import searchpanel from "./HeaderSearchPanel.module.scss";
import { MdClose } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { IApplicationState } from "../../../Store/Store";
import { connect } from "react-redux";

export interface IHeaderSearchPanelProps {}

export interface IHeaderSearchPanelState {}

class HeaderSearchPanel extends React.Component<
  IHeaderSearchPanelProps,
  IHeaderSearchPanelState
> {
  searchInput: React.RefObject<HTMLDivElement>;
  constructor(props: IHeaderSearchPanelProps) {
    super(props);
    this.searchInput = React.createRef();
  }

  render() {
    return (
      <div
        className={searchpanel.header_search_panel_bg}
        ref={this.searchInput}
      >
        <input autoFocus={false} type="text" />
        <span>
          <MdClose />
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
});

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSearchPanel);
