import styles from './field.module.css'
import { useState } from 'react';
import PropTypes from 'prop-types';

function FieldContainer({field, onCellClick}) {



  return (
    <>
      <FieldLayout field={field} onCellClick={onCellClick}/>
    </>
  )
}

FieldContainer.propTypes = {
  field: PropTypes.arrayOf(PropTypes.string),
  onCellClick: PropTypes.func,
};



const FieldLayout = ({field, onCellClick}) => (
  <div className={styles.board}>{field.map((item, index) => (
    <button key={index} className={styles.cell} onClick={() => onCellClick(index)}>{item}</button>
  ))}</div>
);

FieldLayout.propTypes = {
  field: PropTypes.arrayOf(PropTypes.string),
  onCellClick: PropTypes.func,
};

export default FieldContainer
