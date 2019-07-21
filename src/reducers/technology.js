export default function technology(state = "React", action) {
    switch (action.type) {
        case "SET_TECHNOLOGY":
            return action.technology;

        default:
            return state;
    }
}
