import React from 'react';
import PropTypes from 'prop-types';

export default function Star(props) {
    const {className = "", value, height = 10, width = 10, spacing = 10} = props;
    const decimal = Number(value) % 1;
    const star = [];
    
    var leftPos = 0;
    for (let index = 0; index < 5 && index < value - 1; index++) {
        leftPos = leftPos + width;
        star.push(
            (<div 
                className="star"
                key={`star-${index}`}
                style={{
                    left: index * width,
                    width,
                    marginRight: spacing
                }}
            ></div>)
        );
    }

    const starPlaceholder = [...Array(5).keys()].map(index => (
        <div 
            className="star placeholder"
            key={`starPlaceholder-${index}`}
            style={{
                left: index * width,
                width: width,
                marginRight: spacing
            }}
        ></div>)
    );
     

    return (
         <div
            className={className && ['stars',className].join(' '), 'stars'}
            style={{height: height}}
         >{starPlaceholder}</div>
    )
}

Star.propTypes = {
    className: PropTypes.string,
    value: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    spacing: PropTypes.number
}