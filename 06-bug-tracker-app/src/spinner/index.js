import React from 'react';
import { connect } from 'react-redux';
import spinnerActionCreators from './actions';

const Spinner = ({ value, up, down, doubleUp, doubleDown }) => {
    const [delta, setDelta] = React.useState(0);
    return (
        <div>
            <label>Delta : </label>
            <input type="number" value={delta || 0} onChange={evt => setDelta(evt.target.valueAsNumber)} />
            <br />
            <input type="button" value="DOUBLE DOWN" onClick={doubleDown} />
            <input type="button" value="DOWN" onClick={_ => down(delta)} />
            <span> [ {value} ] </span>
            <input type="button" value="UP" onClick={_ => up(delta)} />
            <input type="button" value="DOUBLE UP" onClick={doubleUp} />
        </div>
    )
};

//extract the data from storeState and pass the data as props to the component
function mapStateToProps(storeState){
    const value = storeState.spinnerData;
    return { value : value };
}

//create action dispatchers
function mapDispatchToProps(dispatch){
    const spinnerActionDispatchers = bindActionCreators(spinnerActionCreators, dispatch);
    return spinnerActionDispatchers;
}

export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(Spinner);
