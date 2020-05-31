import React from 'react';

import Card from '../Card';

const Average = ({min, max}) => {
    return (
        <Card title="Média dos Números" green>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{(max + min) / 2}</strong>
                </span>
            </div>
        </Card>
    )
}

export default Average;