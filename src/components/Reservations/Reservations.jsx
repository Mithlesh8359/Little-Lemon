import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from '../../utilities/API';
import React, { useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Initial state for time slots
const initialState = { morning: [], afternoon: [], evening: [] };

// Reducer function to manage available time slots
const timeSlotsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TIME_SLOTS':
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

const Reservations = () => {
    const navigate = useNavigate();
    const [availableTimeSlots, dispatchTimeSlots] = useReducer(timeSlotsReducer, initialState);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchAPI(new Date());
                dispatchTimeSlots({ type: 'SET_TIME_SLOTS', payload: response });
            } catch (error) {
                console.error("Error fetching time slots:", error);
                alert("Failed to fetch available time slots.");
            }
        };
        fetchData();
    }, []);

    // Function to submit reservation data to the server
    const submitReservation = async (reservation) => {
        console.log("Reservation Form Data: ", reservation);
        try {
            const response = await submitAPI(reservation);
            if (response) {
                navigate('/ConfirmedBooking'); // Navigate on successful submission
            } else {
                alert("Data Submission Failed");
            }
        } catch (error) {
            console.error("Error submitting reservation:", error);
            alert("Data Submission Failed due to an error.");
        }
    };

    return (
        <>
            <BookingForm 
                submitReservation={submitReservation} 
                availableTimeSlots={availableTimeSlots} 
                dispatchTimeslotsOnDateChange={dispatchTimeSlots}
            />
        </>
    );
};

export default Reservations;
