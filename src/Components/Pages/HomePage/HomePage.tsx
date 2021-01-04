import * as React from "react";
import { connect } from "react-redux";
import { IApplicationState } from "../../../Store/Store";
import Centerband from "../../Centerband/Centerband";
import Contact from "../../Contact/Contact";
import Loading from "../../Loading/Loading";
import Slideshow from "../../Slideshow/Slideshow";

export interface IHomePageProps {
  allGenresData: any[];
}

export interface State {}

class HomePage extends React.Component<IHomePageProps, State> {
  render() {
    const { allGenresData } = this.props;
  

    return (
      <>
        {allGenresData.length !== 7 && <Loading/>}
        <Slideshow />
        <Centerband />
        <Contact />
        </>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  allGenresData: state.data.allGenresData,
 
});

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
