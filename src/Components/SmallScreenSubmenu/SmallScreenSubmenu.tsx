import * as React from "react";
import { IApplicationState } from "../../Store/Store";
import { connect } from "react-redux";
import Genres from "./MenuList/Fable/Fable";
import rootmenu from "./SmallScreenSubmenu.module.scss";
import Biography from "./MenuList/Biography/Biography";

export interface ISmallScreenSubmenuProps {
  isToggle: boolean;
}

export interface State {}

class SmallScreenSubmenu extends React.Component<
  ISmallScreenSubmenuProps,
  State
> {
  render() {
    return (
      this.props.isToggle && (
        <div className={rootmenu.menu_list}>
          <Genres />
          <Biography />
        </div>
      )
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  isToggle: state.headerSearchPanel.isToggle,
});

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SmallScreenSubmenu);
