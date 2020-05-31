import React from 'react';

import Card from '../Card';

const Sort = ({min, max}) => {
    const sortedNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return (
        <Card title="Sorteio de um número" purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{sortedNumber}</strong>
                </span>
            </div>
        </Card>
    )
}

export default Sort;