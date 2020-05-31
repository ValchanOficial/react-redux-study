import React from 'react';

import Card from '../Card';

const Sum = ({min, max}) => {
    return (
        <Card title="Soma dos Números" blue>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{min+max}</strong>
                </span>
            </div>
        </Card>
    )
}

export default Sum;