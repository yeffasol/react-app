export default (state = 2500700, action) => {
    switch (action.type) {
        case "SET_AMOUNT":
            return state - action.amount;

        default:
            return state;
    }
}
