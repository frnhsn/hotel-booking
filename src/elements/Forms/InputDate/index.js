import React, { useState, useRef, useEffect } from 'react';
import propTypes from 'prop-types';
import { DateRange } from 'react-date-range';
import { format, startOfDay } from 'date-fns';

import "./index.scss";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import iconCalendar from 'assets/images/icons/icon-calendar.svg';

export default function InputDate(props) {
    const { placeholder, name } = props;
    const [ isShowed, setIsShowed ] = useState(false);
    const [ dateRangeState, setDateRangeState ] = useState([
        {
          startDate: startOfDay(new Date()),
          endDate: startOfDay(new Date()),
          key: 'selection'
        }
    ]);
    const node = useRef();

    const handleClickOutside = e => {
        if ( isShowed && !node.current.contains(e.target)) {
            setIsShowed(false);
        }
    }

    useEffect(() => {
        console.log(displayDate);

        // Call handleClickOutside if mouse clicked over document
        document.addEventListener('mousedown', handleClickOutside);

        // Cleaning up the effect after unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    })

    // To display input value
    const displayDate = (dateRangeState[0].startDate && dateRangeState[0].endDate) ? 
        `${format(dateRangeState[0].startDate, 'd MMM yyyy')} - ${format(dateRangeState[0].endDate, 'd MMM yyyy')}` : "";
    
    return (
        <div className={["input-date mb-3", props.className].join(" ")} ref={node}>
            <div className="group-input">
                <div className="input-group-prepend bg-gray-900">
                    <span className="input-group-text">
                        <img src={iconCalendar} alt="icon calendar"/>
                    </span>
                    <input 
                        type="text" 
                        className="form-control text-center"
                        readOnly
                        value={displayDate}
                        placeholder={placeholder}
                        onClick={() => setIsShowed(!isShowed)}
                    />
                </div>

                { isShowed && <div className="date-range-wrapper">
                    <DateRange
                        name={name}
                        editableDateInputs={true}
                        onChange={item => {setDateRangeState([item.selection]);console.log(dateRangeState)}}
                        moveRangeOnFirstSelection={false}
                        ranges={dateRangeState}/>
                </div> }   
            </div>
        </div>
    )
}

InputDate.propTypes = {
    value: propTypes.object,
    onChange: propTypes.func,
    placeholder: propTypes.string,
    outerClassName: propTypes.string,
}