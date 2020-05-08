import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

import styles from './OrderOption.scss';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const OrderOptionDate = ({ setOptionValue, currentValue }) => {

  const handleChange = (date) => {
    console.log(date);
    setOptionValue(`${date.toLocaleDateString()}`);
  };

  return (
    <div className={styles.text}>
      <DatePicker
        value={currentValue}
        onChange={date => handleChange(date)}
        placeholderText="Click to select a date"
      />
    </div>
  );
};

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
};

export default OrderOptionDate;