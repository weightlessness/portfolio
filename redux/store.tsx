import modalsReducer from "./reducers/modalsReducer";
import {AnyAction, combineReducers, configureStore} from "@reduxjs/toolkit";
import {createWrapper, HYDRATE} from "next-redux-wrapper";


const combinedReducer = combineReducers(
    {
        modals: modalsReducer,
    })

const reducer = (state: ReturnType<typeof combinedReducer>, action: AnyAction): ReturnType<typeof combinedReducer> => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, 
            ...action.payload,
        };
        return nextState;
    } else {
        return combinedReducer(state, action);
    }
};
export const makeStore = () => configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
})

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export const wrapper = createWrapper<AppStore>(makeStore)

export type AppDispatch = AppStore['dispatch']