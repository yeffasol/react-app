export default (state, action) => {
    switch (action.type) {
        case "SET_AMOUNT":
            return {
                ...state,
                totalAmount: state.totalAmount + action.amount
            };

        default:
            return state;
    }
}
