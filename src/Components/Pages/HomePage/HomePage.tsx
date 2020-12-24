import * as React from "react";
import Centerband from "../../Centerband/Centerband";
import Contact from "../../Contact/Contact";
import Slideshow from "../../Slideshow/Slideshow";

export interface Props {}

export interface State {}

class HomePage extends React.Component<Props, State> {
  render() {
    return (
      <>
        <Slideshow />
        <Centerband />
        <Contact />
      </>
    );
  }
}

export default HomePage;
