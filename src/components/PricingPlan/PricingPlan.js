import React from 'react';
import PropTypes from 'prop-types';
import styles from './PricingPlan.module.css';
import PricingItem from './PricingItem';

const PricingPlan = ({ items = [] }) => {
  const pricingplanClass = [styles.pricingplan];
  return (
    <ul className={pricingplanClass}>
      {items.map(price => (
        <li key={price.id}>
          <PricingItem {...price} />
        </li>
      ))}
    </ul>
  );
};

PricingPlan.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      alt: PropTypes.string,
      capacity: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default PricingPlan;
