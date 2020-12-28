import * as React from "react";
import { connect } from "react-redux";
import { toggleLoggedBox } from "../../Actions/LoggedBoxActions";
import { IApplicationState } from "../../Store/Store";
import lb from "./LoggedBox.module.scss";

export interface ILoggedBoxProps {
  isLoggedBoxOpen: boolean;
  toggleLoggedBox: typeof toggleLoggedBox;
}

export interface ILoggedBoxState {}

class LoggedBox extends React.Component<ILoggedBoxProps, ILoggedBoxState> {

    
  public stopBubblingAction(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
      event.stopPropagation();
  }

  render() {
    const { isLoggedBoxOpen } = this.props;

    return (
      isLoggedBoxOpen && (
        <div
          className={`${lb.logged_box_bg}`}
          onClick={() => this.props.toggleLoggedBox(false)}
        >
          <div onClick={this.stopBubblingAction}>
            <form action="#">
              <input type="text" placeholder="Enter your email" />
              <button>Continue</button>
            </form>
          </div>
        </div>
      )
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  isLoggedBoxOpen: state.loggedBox.isLoggedBoxOpen,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleLoggedBox: (value: boolean) => dispatch(toggleLoggedBox(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoggedBox);
