import * as React from "react";
import searchpanel from "./HeaderSearchPanel.module.scss";
import { MdClose } from "react-icons/md";
import { IApplicationState } from "../../../Store/Store";
import { connect } from "react-redux";
import { closeHeaderSearchPanel } from "../../../Actions/HeaderPanelActions";

export interface IHeaderSearchPanelProps {
  closeHeaderSearchPanel: typeof closeHeaderSearchPanel;
  isOpen: boolean;
}

export interface IHeaderSearchPanelState {}

class HeaderSearchPanel extends React.Component<
  IHeaderSearchPanelProps,
  IHeaderSearchPanelState
> {
  render() {
    return (
      this.props.isOpen && (
        <div className={searchpanel.header_search_panel_item}>
          <div className={searchpanel.header_search_panel_bg}>
            <input autoFocus={true} type="text" />
            <span onClick={this.props.closeHeaderSearchPanel}>
              <MdClose />
            </span>
          </div>
        </div>
      )
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  isOpen: state.headerSearchPanel.isOpen,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    closeHeaderSearchPanel: () => dispatch(closeHeaderSearchPanel()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSearchPanel);
