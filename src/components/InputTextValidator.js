import React from 'react';
import { ValidatorComponent } from 'react-form-validator-core';
 
class InputTextValidator extends ValidatorComponent {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
 
    render() {
        const { errorMessages, validators, requiredError, validatorListener, ...rest } = this.props;
 
        return (
            <div className="form-group">
                {rest.labeltext &&
                    <label htmlFor={rest.id}>{rest.labeltext}</label>
                }

                <input
                    {...rest}
                    ref={(r) => { this.input = r; }}
                    onChange={this.handleChange} 
                />
                {this.errorText()}
            </div>
        );
    }
 
    errorText() {
        const { isValid } = this.state;
 
        if (isValid) {
            return null;
        }
 
        return (
            <div style={{ color: 'red' }}>
                {this.getErrorMessage()}
            </div>
        );
    }

    handleChange(event) {
        this.props.onChange(event);
    }
}
 
export default InputTextValidator;