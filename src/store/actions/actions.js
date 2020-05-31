import { NUM_MIN_ALTERADO, NUM_MAX_ALTERADO } from './actionsTypes';

export const changeMinNumber = (number) => {
    return {
        type: NUM_MIN_ALTERADO,
        payload: number
    }
}

export const changeMaxNumber = (number) => {
    return {
        type: NUM_MAX_ALTERADO,
        payload: number
    }
}