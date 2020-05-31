import React from 'react';

import Card from '../Card';

import './style.css';

const Interval = ({min, max, onMinChanged, onMaxChanged}) => {
    return (
        <Card title="Intervalo de Números" red>
            <div className="Interval">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min} onChange={e => onMinChanged(Number(e.target.value))}/>
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} onChange={e => onMaxChanged(Number(e.target.value))}/>
                </span>
            </div>
        </Card>
    );
}

export default Interval;