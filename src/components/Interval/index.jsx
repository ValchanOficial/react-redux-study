import React from 'react';
import { connect } from 'react-redux';

import Card from '../Card';
import { changeMinNumber, changeMaxNumber } from '../../store/actions/actions';

import './style.css';

const Interval = ({min, max, changeMin, changeMax}) => {
    return (
        <Card title="Intervalo de Números" red>
            <div className="Interval">
                <span>
                    <strong>Mínimo:</strong>
                    <input 
                        type="number" 
                        value={min} 
                        onChange={e => changeMin(Number(e.target.value))}
                    />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input 
                        type="number" 
                        value={max} 
                        onChange={e => changeMax(Number(e.target.value))}
                    />
                </span>
            </div>
        </Card>
    );
}

const mapStateToProps = state => {
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeMin(number) {
            dispatch(changeMinNumber(number));
        },
        changeMax(number) {
            dispatch(changeMaxNumber(number));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Interval);
