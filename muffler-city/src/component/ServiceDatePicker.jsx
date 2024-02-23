/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function ServiceDatePicker() {

const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
      <DatePicker
        selected = {selectedDate}
        onChange = {date => setSelectedDate(date)}
        dateFormat = "yyyy/MM/dd"
        minDate={new Date()}
        filterDate={date => date.getDay() != 0}
      
      />
      
    </div>
  )
}

export default ServiceDatePicker
