import React, { Component } from "react";

class Button extends Component {
    _isMounted = false;
    
    constructor(props) {
        super(props);
        this.state = {"inProgess": false};
        this.buttonClick = this.buttonClick.bind(this);
    }

    buttonClick() {
        // using setTimeout to make it appear like a real REST call is being made
        this.setState({"inProgess": true});
        setTimeout(
            function() {
                if(this.props.onClick) {
                    this.props.onClick();
                }
                if(this._isMounted) {
                    this.setState({"inProgess": false});
                }
            }
            .bind(this),
            1000
        );
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        let btnValue = this.props.btnTxt;
        const btnType = this.props.type;
        if(this.state.inProgess) {
            btnValue = 'Loading...';
        }
        if(btnType === 'submit') {
            return (
                <input 
                    type="submit" 
                    value={btnValue} 
                    disabled={this.props.disabled || this.state.inProgess}  
                    className={"btn task-action-btn " + this.props.btnClass} 
                />
            );
        }
        return (
            <button type="button"
                disabled={this.props.disabled || this.state.inProgess} 
                className={"btn task-action-btn " + this.props.btnClass} 
                onClick={this.buttonClick}>{btnValue}</button>
        );
    }
}

export default Button;