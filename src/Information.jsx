import styles from './information.module.css'
import { useState } from 'react';
import PropTypes from 'prop-types';



function InformationContainer({ currentPlayer, isDraw, isGameEnded }) {

  return (
    <>
      <InformationLayout currentPlayer={currentPlayer} isDraw={isDraw} isGameEnded={isGameEnded}/>
    </>
  )
}

InformationContainer.propTypes = {
  currentPlayer: PropTypes.string,
  isDraw: PropTypes.bool,
  isGameEnded: PropTypes.bool
};



const InformationLayout = ({currentPlayer, isDraw, isGameEnded}) => {

    let message = '';

    if(isDraw) {
        message = 'Ничья';
    } else if(isGameEnded) {
        message = `Победа: ${currentPlayer}`;
    } else {
        message = `Ходит: ${currentPlayer}`;
    }

    return (
        <div className={styles.information}>{message}</div>
    )
};

InformationLayout.propTypes = {
  currentPlayer: PropTypes.string,
  isDraw: PropTypes.bool,
  isGameEnded: PropTypes.bool,
};



export default InformationContainer
