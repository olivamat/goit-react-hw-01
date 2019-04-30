import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionIhistory.module.css';

const TransactionHistory = ({ items = [] }) => {
  const tableClass = [styles.tab];
  const rowClass = [styles.row];
  const zxClass = [styles.zx];
  const zClass = [styles.z];
  return (
    <table className={tableClass}>
      <thead>
        <tr className={rowClass}>
          <th className={zClass}>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id} className={rowClass}>
            <td className={zxClass}>{item.type}</td>
            <td className={zxClass}>{item.amount}</td>
            <td className={zxClass}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
