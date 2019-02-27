import React, { Component } from "react";
import { ValidatorForm } from 'react-form-validator-core';
import { connect } from "react-redux";
import { addSessionUser } from "../actions/user";
import InputTextValidator from "./InputTextValidator";
//import TextBox from "./TextBox";
import Button from "./Button";
import ClearState from "./ClearState";

const mapStateToProps = state => {
    return { user: state.userReducer.user };
}

const mapDispatchToProps = (dispatch) => {
    return {
      addSessionUser: user => dispatch(addSessionUser(user))
    };
}

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            formSubmitInProgress: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({formSubmitInProgress: true});

        this.props.addSessionUser({"name": this.state.userName});
        this.setState({ userName: "", formSubmitInProgress: false });
        
        // this does not produce the warning. comment above 2 lines and uncomment setTimeout function and refresh the page
        /*setTimeout(
            function() {
                this.props.addSessionUser({"name": this.state.userName});
                this.setState({ userName: "", formSubmitInProgress: false });
            }
            .bind(this),
            1000
        );*/ 
    }

    render() {
        if(this.props.user && this.props.user.name) {
            return (
                <div>
                    <h1>Hello {this.props.user.name}</h1>
                    <ClearState />
                </div>
            );
        }

        return (
            <ValidatorForm ref="form" onSubmit={this.handleSubmit} >
            
                {/* TextBox component works fine, even without setTimeout in handleSubmit function. 
                To confirm this, uncomment TextBox component and comment out InputTextValidator.
                Don't forget to uncomment import TextBox from "./TextBox"; at the top of the page  */}
                
                {/* <TextBox id="userName" onChange={this.handleChange} value={this.state.userName} /> */}
                
                {/* This throws a warning onSubmit */}
                <InputTextValidator 
                    id="userName"
                    onChange={this.handleChange}
                    value={this.state.userName}
                    validators={['required']}
                    errorMessages={['This field is required']} 
                    labeltext="Enter your name"
                />
                
                <Button type="submit" btnClass="btn-success" btnTxt="Submit" disabled={this.state.formSubmitInProgress} />
            </ValidatorForm>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);