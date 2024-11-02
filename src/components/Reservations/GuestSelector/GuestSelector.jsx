import './GuestSelector.css';
import React, { useState } from "react";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";

const style =  {
    fontSize: '16px',
    color: 'red',
}

const GuestSelector = ({ chooseGuest }) => {
    const [guest, setGuest] = useState(1);
    const [warning, setWarning] = useState('');

    const increment = () => {
        if (guest < 10) {
            const newGuestCount = guest + 1; // Increment guest count
            setGuest(newGuestCount);
            setWarning('');
            chooseGuest(newGuestCount); // Pass new count to parent
        } else {
            setWarning(`* Max 10 guests`);
        }
    };

    const decrement = () => {
        if (guest > 1) {
            const newGuestCount = guest - 1; // Decrement guest count
            setGuest(newGuestCount);
            setWarning('');
            chooseGuest(newGuestCount); // Pass new count to parent
        } else {
            setWarning('* Min 1 guest');
        }
    };

    return (
        <div className='app__reservation-guest'>
            <h1 className='guest-title'>Guest</h1>
            <div className='app__reservation-guest-counter-box'>
                <div className="app__reservation-guest-counter">
                    <CgMathMinus className='guest-decrement' onClick={decrement} />
                    <pre>{guest}</pre>
                    <CgMathPlus className='guest-increment' onClick={increment} />
                </div>
                { (guest <= 1 || guest >= 6) && <span style={style}>{warning}</span> }
            </div>
        </div>
    );
};

export default GuestSelector;
