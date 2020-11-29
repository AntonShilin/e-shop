import * as React from 'react';
import large from "./SortByYearLargeScreen.module.scss";

export interface Props {
    
}
 
export interface State {
    
}
 
class  SortByYearLargeScreen extends React.Component<Props, State> {
    render() { 
        return (    <div className={large.sort_by_year_main_lg}>
            <p>Year</p>
            <div className="form-check">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input" value="" />
                2017
              </label>
            </div>
          </div> );
    }
}
 
export default SortByYearLargeScreen ;