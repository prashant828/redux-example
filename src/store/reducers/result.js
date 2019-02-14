let initialState = {
    result: []
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case ('STORE_RESULT'):
            return {
                ...state,
                result: state.result.concat({id: new Date(), value: action.payload.res})
            }
        case('DELETE'):
            let newResult = state.result.filter(res=> res.id !== action.payload.id);
            return{
                ...state,
                result: newResult
            }
    }
    return state;
};

export default  reducer;
