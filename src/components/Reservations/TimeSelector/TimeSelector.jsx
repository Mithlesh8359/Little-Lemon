import './TimeSelector.css';
import React from 'react';

const TimeCapsule = (props) => {
    const handleRadioChange = (e) => {
        props.chooseTime(e.target.value);
    };

    return (
        <div>
            <h1>{props.morning}</h1>
            <div className='timeslots-capsules'>
                {props.slots.map((item) => (
                    <span className='radio-label-box' key={item}>
                        <label htmlFor={item} className='radio-btn-label'>
                            <input 
                                type="radio" 
                                name="timeslots-m" 
                                id={item} 
                                value={item} 
                                onChange={handleRadioChange} // Changed to onChange for better semantics
                            />
                            {item}
                        </label>
                    </span>
                ))}
            </div>
        </div>
    );
};

const TimeSelector = (props) => {
    const hour = new Date().getHours(); // Get the current hour as an integer

    let timeOfDay = '';
    if (hour >= 9 && hour < 12) {
        timeOfDay = 'morning';
    } else if (hour >= 12 && hour < 16) {
        timeOfDay = 'afternoon';
    } else if (hour >= 16 && hour < 21) {
        timeOfDay = 'evening';
    }

    return (
        <div className="reservation__time-selector">
            {timeOfDay && (
                <TimeCapsule 
                    chooseTime={props.chooseTime} 
                    morning={timeOfDay.charAt(0).toUpperCase() + timeOfDay.slice(1)} 
                    slots={props.availableTimeSlots[timeOfDay]} 
                />
            )}
        </div>
    );
};

export default TimeSelector;
