let initial = {text: 'Welcome to my React, Webpack and Redux clean slate!'};
const reducer = ( state = initial, action ) => {
    return state;
}

export default reducer;

export const someAction = (a) => dispatch => {
    dispatch({ text: 'update' });
};