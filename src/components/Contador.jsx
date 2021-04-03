import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Contador.css';

export const Contador = () => {

    const dispatch = useDispatch();
    const contador = useSelector(state => state.contador);

    const handleSubstractClick = () => {
        dispatch({ type: 'substract' });
    }

    const handleAddClick = () => {
        dispatch({ type: 'add' });
    }

    const handleResetClick = () => {
        dispatch({ type: 'reset' })
    }
    return (
        <div className="contador no-select">
            <button
                className="boton"
                onClick={handleSubstractClick}
            >
                -
            </button>
            <span className="numero">{contador}</span>
            <button
                className="boton"
                onClick={handleAddClick}
            >
                +
            </button>

            <button
                className="boton reset"
                onClick={handleResetClick}
            >
                RESET
            </button>
        </div>
    )
}
