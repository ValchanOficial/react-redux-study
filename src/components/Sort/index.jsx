import React from 'react';
import { connect } from 'react-redux';

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
    );
}

const mapStateToProps = state => {
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    }
}

export default connect(mapStateToProps)(Sort);