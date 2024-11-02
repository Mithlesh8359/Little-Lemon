import './GuestSelector.css';
import React, { useState } from "react";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";

const style = {
    fontSize: '16px',
    color: 'red',
};

const GuestSelector = ({ chooseGuest }) => {
    const [guest, setGuest] = useState(1);
    const [warning, setWarning] = useState('');

    const updateGuestCount = (newCount) => {
        setGuest(newCount);
        chooseGuest(newCount); // Pass new count to parent
        setWarning(''); // Reset warning
    };

    const increment = () => {
        if (guest < 10) {
            updateGuestCount(guest + 1); // Increment guest count
        } else {
            setWarning('* Max 10 guests');
        }
    };

    const decrement = () => {
        if (guest > 1) {
            updateGuestCount(guest - 1); // Decrement guest count
        } else {
            setWarning('* Min 1 guest');
        }
    };

    return (
        <div className='app__reservation-guest'>
            <h1 className='guest-title'>Guest</h1>
            <div className='app__reservation-guest-counter-box'>
                <div className="app__reservation-guest-counter">
                    <button className='guest-decrement' onClick={decrement} aria-label="Decrease guest count">
                        <CgMathMinus />
                    </button>
                    <pre>{guest}</pre>
                    <button className='guest-increment' onClick={increment} aria-label="Increase guest count">
                        <CgMathPlus />
                    </button>
                </div>
                {warning && <span style={style}>{warning}</span>}
            </div>
        </div>
    );
};

export default GuestSelector;
