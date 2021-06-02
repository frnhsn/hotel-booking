import React, { useState } from 'react';
import propTypes from 'prop-types';
import pluralize from 'pluralize';

import "./index.scss";

// Extract number from a string
const extractNumber = (string) => {
    const numericPattern = new RegExp(/\d+/);

    if (typeof string === 'string') {
        let number = string && string.match(numericPattern);
        if (number) return Number(number);
    } else if (typeof string === 'number') {
        return string;
    }

    return undefined;
}

const makeUpValue = (prefix, suffix, number) => {
    if (number) {
        if (typeof prefix === 'string') {
            var p = prefix.trim();
        }
        if (typeof suffix === 'string') {
            var s = pluralize(suffix.trim(), number);
        }
        return `${(p && p.concat(" ")) || ""}${number}${(s && " ".concat(s)) || ""}`
    }
    return "";
}

export default function InputNumber(props) {
    const { value, placeholder, name, min, max, prefix, suffix } = props;
    const [ numberValue, setNumberValue ] = useState((extractNumber(value) && extractNumber(value)) || extractNumber(min));
    const [ inputValue, setInputValue ] = useState(makeUpValue(prefix,suffix,numberValue));

    const onChange = e => {
        let number = extractNumber(e.target.value);

        if (number) {
            setNumberValue(number);
            setInputValue(makeUpValue(prefix,suffix,number));
        }

    }

    const minus = () => {
        if (numberValue > min) {
            setNumberValue(numberValue-1);
            setInputValue(makeUpValue(prefix,suffix,numberValue-1));
        }
    }

    const plus = () => {
        if (numberValue < max) {
            setNumberValue(numberValue+1);
            setInputValue(makeUpValue(prefix,suffix,numberValue+1));
        }
    }

    return (
        <div className={["input-number mb-3",props.outerClassName].join(" ")}>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text minus" onClick={minus}>
                        -
                    </span>
                </div>
                <input 
                    min={min}
                    max={max}
                    name={name}
                    className="form-control"
                    placeholder={placeholder ? placeholder : "0"}
                    value={inputValue}
                    onClick={e => e.target.value = ""}
                    onChange={onChange}
                />
                <div className="input-group-append">
                    <span className="input-group-text plus" onClick={plus}>
                        +
                    </span>
                </div>
            </div>
        </div>
    )
}


InputNumber.defaultProps = {
    min: 1,
    max: Math.pow(10, 1000),
    value: 1,
    prefix: "",
    suffix: "",
}

InputNumber.propTypes = {
    value: propTypes.number,
    onchange: propTypes.func,
    placeholder: propTypes.string,
    outerClassName: propTypes.string,
}