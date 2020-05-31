import React from 'react';
import { connect } from 'react-redux';

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
    );
}

const mapStateToProps = state => {
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    }
}

export default connect(mapStateToProps)(Sum);