import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pricingitem.module.css';

const PricingItem = ({ label, alt, icon, capacity, price, description }) => {
  const pricingitemClass = [styles.item];
  const iconClass = [styles.icon];
  const labelClass = [styles.label];
  const capacityClass = [styles.capacity];
  const descriptionClass = [styles.description];
  const priceClass = [styles.price];
  const buttonClass = [styles.button];

  return (
    <div className={pricingitemClass}>
      <img src={icon} alt={alt} className={iconClass} />
      <h2 className={labelClass}>{label}</h2>
      <p className={capacityClass}>{capacity} STORAGE</p>
      <p className={descriptionClass}>{description}</p>
      <p className={priceClass}>{price}$ / MONTH</p>
      <button className={buttonClass} type="button">
        Get Started
      </button>
    </div>
  );
};

PricingItem.defaultProps = {
  alt: 'product image',
};

PricingItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string,
  capacity: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default PricingItem;
