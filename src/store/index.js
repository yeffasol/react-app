import { createStore, applyMiddleware } from "redux";
import loggingMiddleware from "../middleware/loggingMiddleware";
import reducer from "../reducers";

const initialState = { tech: "React " };
export const store = createStore(reducer, initialState,applyMiddleware(loggingMiddleware));
