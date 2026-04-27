const initialState = {
    makeups: []
}

function reducer(state, action) {
switch (action.type) {
case "ADD_MAKEUP":
return { ...state, makeups: [...state.makeups, action.payload] };
case "DELETE_MAKEUP":
return { ...state, makeups: state.makeups.filter(m => m.id
!== action.payload) };
case "UPDATE_MAKEUP":
return {
...state,makeups: state.makeups.map(m => m.id === action.payload.id ? action.payload : m)
};
default:
return state;
}
}
export { initialState, reducer };