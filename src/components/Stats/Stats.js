import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';

const Stats = ({ title, stats }) => {
  const statsSection = [styles.section];
  const titleClass = [styles.title];
  const statList = [styles.list];
  const itemClass = [styles.item];
  const labelClass = [styles.label];
  const percentageClass = [styles.percentage];

  return (
    <section className={statsSection}>
      <h2 className={titleClass}>{title}</h2>
      <ul className={statList}>
        {stats.map(stat => (
          <li className={itemClass} key={stat.id}>
            <span className={labelClass}>{stat.label}</span>
            <span className={percentageClass}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Stats.defaultProps = {
  title: ' ',
};

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default Stats;
