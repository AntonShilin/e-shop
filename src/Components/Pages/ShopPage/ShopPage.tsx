import * as React from "react";
import Loading from "../../Loading/Loading";
import ShopAll from "../../ShopAll/ShopAll";
import ShopFilter from "../../ShopFilter/ShopFilter";

export interface Props {}

export interface State {
  isLoading: boolean;
}

class ShopPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1500);
  }
  render() {
    const { isLoading } = this.state;

    return (
      <>
        {isLoading && <Loading />}
        <ShopAll />
        <ShopFilter />
      </>
    );
  }
}

export default ShopPage;
