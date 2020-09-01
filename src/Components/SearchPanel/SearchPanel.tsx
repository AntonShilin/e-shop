import * as React from "react";

export interface ISearchPanelProps {}

export interface State {}

class SearchPanel extends React.Component<ISearchPanelProps, State> {
    
  render() {
    return (
      <div className="row">
        <div id="search_on_sm_devices" className="col-12 d-none d-lg-none">
          <input
            autoFocus={true}
            type="text"
            className="d-none d-lg-none search_on_sm_devices_input"
          />
          <button
            className="d-none d-lg-none  search_on_sm_devices_btn"
          >
            &times;
          </button>
        </div>
      </div>
    );
  }
}

export default SearchPanel;
