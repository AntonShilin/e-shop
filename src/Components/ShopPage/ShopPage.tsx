import * as React from "react";
import ShopAll from "../ShopAll/ShopAll";
import ShopFilter from "../ShopFilter/ShopFilter";

export interface Props {}

export interface State {}

class ShopPage extends React.Component<Props, State> {
  render() {
    return (
      <>
        <ShopAll />
        <ShopFilter />
      </>
    );
  }
}

export default ShopPage;
