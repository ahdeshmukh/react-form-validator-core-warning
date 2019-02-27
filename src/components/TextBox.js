import React, { Component } from "react";

class TextBox extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onChange(event);
    }

    render() {
        return (
            <div>
            <label htmlFor={this.props.id}>{this.props.label}</label>
            <input type="text" 
                className="form-control" 
                id={this.props.id} 
                value={this.props.value} 
                onChange={this.handleChange}
            />
            </div>
        );
    }
}

export default TextBox;