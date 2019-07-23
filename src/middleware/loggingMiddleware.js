const loggingMiddleware = ({ getState, dispatch }) => next => action =>
{
    next(action);

};
export default loggingMiddleware;
