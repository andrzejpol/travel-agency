import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderOption.scss';


const OrderOptionText = ({ setOptionValue, currentValue }) => (
  <div className={styles.date}>
    <input
      type="text"
      className={styles.input}
      onChange={event => setOptionValue(event.currentTarget.value)}
      value={currentValue}
      required
      placeholder="Click heare"
      dateFormat="yyyy/MM/dd"
    />
  </div>
);

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
};

export default OrderOptionText;