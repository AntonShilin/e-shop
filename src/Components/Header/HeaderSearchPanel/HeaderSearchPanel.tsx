import * as React from "react";
import searchpanel from "./HeaderSearchPanel.module.scss";
import { MdClose } from "react-icons/md";
import { IApplicationState } from "../../../Store/Store";
import { connect } from "react-redux";
import { closeHeaderSearchPanel } from "../../../Actions/HeaderPanelActions";
import { getSearchValue } from "../../../Actions/SearchMenuActions";
import SearchMenuResults from "../../SearchMenuResults/SearchMenuResults";

export interface IHeaderSearchPanelProps {
  closeHeaderSearchPanel: typeof closeHeaderSearchPanel;
  isOpen: boolean;
  value: string;
  getSearchValue: typeof getSearchValue;
}

export interface IHeaderSearchPanelState {}

class HeaderSearchPanel extends React.Component<
  IHeaderSearchPanelProps,
  IHeaderSearchPanelState
> {
  render() {
    const { value, isOpen } = this.props;

    return (
      isOpen && (
        <div className={searchpanel.header_search_panel_item}>
          <div className={searchpanel.header_search_panel_bg}>
            <input
              autoFocus={true}
              type="text"
              value={value}
              onChange={(e) => this.props.getSearchValue(e.currentTarget.value)}
            />
            <span
              onClick={() => {
                this.props.closeHeaderSearchPanel();
                this.props.getSearchValue("");
              }}
            >
              <MdClose />
            </span>
          </div>
          <SearchMenuResults />
        </div>
      )
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  isOpen: state.headerSearchPanel.isOpen,
  value: state.searchMenu.value,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    closeHeaderSearchPanel: () => dispatch(closeHeaderSearchPanel()),
    getSearchValue: (name: string) => dispatch(getSearchValue(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSearchPanel);
