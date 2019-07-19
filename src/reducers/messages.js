import {getMessages} from "../static-data";
import {SEND_MESSAGE} from "../constants/action-types";
import {DELETE_MESSAGE} from "../constants/action-types";
import _ from 'lodash';

export default function messages(state = getMessages(10), action) {
    switch (action.type) {
        case SEND_MESSAGE:
            const {message, userId} = action.payload;
            const allUserMsgs = state[userId];
            const number = +_.keys(allUserMsgs).pop() + 1;

            return {
                ...state,
                [userId]: {
                    ...allUserMsgs,
                    [number]: {
                        number,
                        text: message,
                        is_user_msg: true
                    }
                }
            };
        case DELETE_MESSAGE:
            const {numb, activeUserId} = action.payload;
            const activeUserMessages = {...state[activeUserId]};
            delete activeUserMessages[numb];

            return ({
                ...state,
                [activeUserId]: {...activeUserMessages},

            });

        default:
            return state;
    }
}
