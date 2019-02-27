import React, { Component } from "react";
import Button from "./Button";
import { persistor } from "../store";
import { connect } from "react-redux";
import { clearState } from "../actions/clearstate";

const mapStateToProps = state => {
    return { 
        user: state.userReducer.user 
    };
  };

class ClearStateConnected extends Component {
    constructor() {
        super();
        this.clearState = this.clearState.bind(this);
    }

    clearState() {
        this.props.dispatch(clearState());
        persistor.purge();
    }

    render() {
        let visible = (this.props.user && this.props.user.name) ? true : false;
        if(!visible) {
            // only show if any state is saved
            return null;
        }
        return (
            <Button btnTxt="Clear State" btnClass="btn-danger btn-lg" onClick={this.clearState} />
        );
    }
}

const ClearState = connect(mapStateToProps, null)(ClearStateConnected);
export default ClearState;