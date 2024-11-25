import React from 'react';
import styles from './DoctorCard.module.css';

interface DoctorCardProps {
  name: string;
  title: string;
  imageSrc: string;
}

const DoctorCard:C<DoctorCardProps> = ({ name, title, imageSrc }) => {
  return (
    <div className={styles.doctorCard}>
      <img src={imageSrc} alt={name} className={styles.doctorImage} />
      <h3 className={styles.doctorName}>{name}</h3>
      <p className={styles.doctorTitle}>{title}</p>
    </div>
  );
};

export default DoctorCard;

