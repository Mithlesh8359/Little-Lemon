import React, { useState } from 'react';
import GuestSelector from './GuestSelector/GuestSelector';
import DateSelector from './DateSelector/DateSelector'; // Fixed typo from DateSelecotr
import TimeSelector from './TimeSelector/TimeSelector';
import Reserve from './Reserve/Reserve';

function BookingForm(props) {
  const [time, setTime] = useState('00:00');
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState('');
  const [occasion, setOccasion] = useState('birthday'); // Corrected spelling to 'occasion'

  const [reservation, setReservation] = useState({ guests, date, time, occasion });

  const chooseTime = (time) => {
    setTime(time);
    setReservation((prev) => ({ ...prev, time }));
  };

  const chooseGuest = (guests) => {
    setGuests(guests);
    setReservation((prev) => ({ ...prev, guests }));
  };

  const chooseDate = (date) => {
    setDate(date);
    setReservation((prev) => ({ ...prev, date }));
    props.dispatchTimeslotsOnDateChange(date);
  };

  const chooseOccasion = (occasion) => {
    setOccasion(occasion);
    setReservation((prev) => ({ ...prev, occasion }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.submitReservation(reservation);
  };

  const validateReservation = () => {
    return reservation.time && reservation.date && reservation.guests && reservation.occasion;
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <GuestSelector chooseGuest={chooseGuest} />
        <DateSelector chooseDate={chooseDate} chooseOccasion={chooseOccasion} occasion={occasion} />
        <TimeSelector chooseTime={chooseTime} availableTimeSlots={props.availableTimeSlots} />
        <Reserve value={validateReservation() ? 0 : 1} />
      </form>
    </div>
  );
}

export default BookingForm;
