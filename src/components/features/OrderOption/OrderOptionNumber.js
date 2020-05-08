import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderOption.scss';



const OrderOptionNumber = ({ limits, price, currentValue, setOptionValue }) => (
  <div className={styles.number}>
    <input
      type='number'
      className={styles.inputSmall}
      value={currentValue}
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
    <p>{price} price</p>
  </div>
);

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.number,
  setOptionValue: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  limits: PropTypes.object,
  price: PropTypes.string,
};

export default OrderOptionNumber;