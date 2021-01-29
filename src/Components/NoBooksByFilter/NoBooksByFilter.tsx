import * as React from 'react';
import nbbf from "./NoBooksByFilter.module.scss";

export interface Props {
    
}
 
export interface State {
    
}
 
class NoBooksByFilter extends React.Component<Props, State> {
    render() { 
        return (<div className="container-xl">
            <div className="row">
                <div className="col">
                    <div className={nbbf.note_msg}>
                        <h2>
                        There are no products matching the selection.
                        </h2>
                    </div>
                </div>
            </div>
        </div> );
    }
}
 
export default NoBooksByFilter;