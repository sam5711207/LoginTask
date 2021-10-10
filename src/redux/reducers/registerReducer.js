import produce from 'immer';
import createReducer from "./reducerUtils";

const initialState = {
    isUserRegister: false,
    userDetails: {},
    isRequired:false
}

const register = {
    setIsUserRegister(state, action) {
        state.isUserRegister = action.payload;
    },
    setSaveNewUser(state, action) {
        state.userDetails = action.payload;
    },
    setResetStore(state, action) {
        state.isUserRegister = false;
        state.userDetails = {}
    },
    setIsRequired(state, action) {
        state.isRequired = action.payload;
    },
}
export default produce((state, action) => createReducer(state, action, register), initialState);