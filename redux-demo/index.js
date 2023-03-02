const ORDERED_CAKE = "ORDERED_CAKE"

// actions: what happended
const orderCake = () => {
    return {
        type: ORDERED_CAKE,
        quantity: 1
    }
}

// store / state
const initialState = {
    numOfCakes: 10
}

// reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDERED_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        default:
            return state;
    }
}