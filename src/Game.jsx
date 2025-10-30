import { useState } from 'react'
import styles from './game.module.css'
import FieldContainer from './Field.jsx';
import InformationContainer from './Information.jsx';


function Game () {

    const [currentPlayer, setCurrentPlayer] = useState('X'); // кто ходит в данный момент
    const [isGameEnded, setIsGameEnded] = useState(false); //была-ли завершена игра
    const [isDraw, setIsDraw] = useState(false); // была-ли ничья
    const [field, setField] = useState(Array(9).fill('')); //создаем массив из 9 элементов, fill заполняем пустыми строчками.


    const handleCellClick = (index) => {
        if (field[index] !== '' || isGameEnded) return;

        const newField = [...field]; //копия массива

        newField[index] = currentPlayer; // записываем текущего игрока в выбранную ячейку

        setField(newField); //обновляем поле

        checkGameStatus(newField); //проверяем есть-ли победитель, или ничья
    };


    const checkGameStatus = (newField) => {
         const WIN_PATTERNS = [
            [0,1,2], [3,4,5], [6,7,8], // горизонталь
            [0,3,6], [1,4,7], [2,5,8], // вертикаль
            [0,4,8], [2,4,6]          // диагональ
        ];

        //Победитель
        const winner = WIN_PATTERNS.some(item => item.every(index => newField[index] === currentPlayer)); //возвращает true, если все элементы newField[index] равены currentPlayer

        //обновляем состояние isGameEnded, если есть победитель
        if (winner) {
            setIsGameEnded(true);
            return;
        }

        //ничья
        const isFull = newField.every(cell => cell !== ''); //если каждая ячейка заполнена
        if (isFull) {
            setIsDraw(true); //обновляем состояние
            setIsGameEnded(true); //обновляем состояние
            return;
        }

        //переключаем текущего игрока на другого при каждом ходе
        setCurrentPlayer(prev => (prev === 'X' ? '0' : 'X'));
    }

    //функция, чтобы начать игру заново
    const handleReset = () => {
        setField(Array(9).fill(''));
        setCurrentPlayer('X');
        setIsGameEnded(false);
        setIsDraw(false);
    };



    return (
        <>
            <div className={styles.btnCover}><button className={styles.btn} onClick={handleReset}>Начать заново</button></div>
            <InformationContainer currentPlayer={currentPlayer} isDraw={isDraw} isGameEnded={isGameEnded}/>
            <FieldContainer field={field} onCellClick={handleCellClick}/>
        </>
    )



}


export default Game
