const initialState = { contador: 0 };

export const contadorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                contador: state.contador + 1
            }

        case 'substract':
            return {
                ...state,
                contador: state.contador - 1
            }

        case 'reset':
            return initialState;

        default:
            return state;
    }
}