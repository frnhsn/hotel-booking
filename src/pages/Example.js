import React, { useState } from 'react';
import InputDate from 'elements/Forms/InputDate';
import InputNumber from 'elements/Forms/InputNumber';

export default function Example(props) {
    const [ numberValue, setNumberValue ] = useState("");

    const handleChange = e => {
        setNumberValue({ [e.target.name]: e.target.value});
    }

    return (
        <div className="row m-5">
            <div className="col-4"><InputDate/></div>
            <div className="col-4">
                <InputNumber 
                    name="value"
                    max={20}
                    suffix=" nights"
                    value={numberValue}
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}
