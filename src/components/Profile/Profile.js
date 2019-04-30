import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ user }) => {
  const avatarProfile = [styles.profile];
  const avatarDescription = [styles.description];
  const avatarClasses = [styles.avatar];
  const nameClasses = [styles.name];
  const tagClasses = [styles.tag];
  const locationClasses = [styles.location];
  const statsClasses = [styles.stats];
  const labelClasses = [styles.label];
  const quantityClasses = [styles.quantity];

  return (
    <div className={avatarProfile}>
      <div className={avatarDescription}>
        <img src={user.avatar} alt={user.alt} className={avatarClasses} />
        <p className={nameClasses}>{user.name}</p>
        <p className={tagClasses}> {user.tag}</p>
        <p className={locationClasses}>{user.location}</p>
      </div>
      <ul className={statsClasses}>
        <li>
          <span className={labelClasses}>Followers</span>
          <span className={quantityClasses}>{user.stats.followers}</span>
        </li>
        <li>
          <span className={labelClasses}>Views</span>
          <span className={quantityClasses}>{user.stats.views}</span>
        </li>
        <li>
          <span className={labelClasses}>Likes</span>
          <span className={quantityClasses}>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      alt: PropTypes.string,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Profile;
