import React from 'react';
import PropTypes from 'prop-types';

import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';

import styles from './OrderSummary.scss';
// import {Row, Col} from 'react-flexbox-grid';

const OrderSummary = ({ tripCost, options }) => {
  const price = calculateTotal(formatPrice(tripCost), options);

  return (
    <h2 className={styles.component} >
      Total:
      <strong>${price}</strong>
    </h2>
  );
};

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;