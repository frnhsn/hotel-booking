import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputNumber from './index';

class TextInput extends React.Component {
    state = { value: "" };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    }

    render() {
        return <InputNumber 
            name="value"
            max={30}
            suffix=" nights"
            value={this.state.value}
            onChange={this.handleChange}
        />
    }
}

const setup = () => {
    const { container } = render(<TextInput/>);
    const input = container.querySelector("input.form-control");

    return { input };
}

test('Should be able to change value', () => {
    const { input } = setup();

    fireEvent.change(input, { target: {value: 23} });
    expect(input.value).toBe("23 nights");
});


test('Should not be able to change value if max value reached', () => {
    const { input } = setup();

    fireEvent.change(input, { target: {value: 33} });
    expect(input.value).toBe("");
});


// no max attribute
// no min attribute
// no value attribute
// min reached
// max reached
// non number input 
// only prefix
// only suffix
// prefix and suffix
