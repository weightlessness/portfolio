import {AModal} from "../../constants/actions";

export type ModalTargetType = 'fsLightBox' | 'modalDesignersForm'

const modalsInitialState = {
    fsLightBox: {
        toggler: false,
        sources: [],
        slide: 1,
    },
    modalDesignersForm: {
        data: {},
        shown: false
    }
}

const modalsReducer = (state = modalsInitialState, action) => {
    switch (action.type) {
        case AModal.OPEN: {
            const {payload: {target, clickEvent, data}} = action;

            if (data) {
                return {
                    ...state,
                    [target]: {
                        ...state[target],
                        data: {...data},
                        shown: true,
                        clickEvent: clickEvent,
                    }
                }
            }

            return {
                ...state,
                [target]: {
                    ...state[target],
                    shown: true,
                    clickEvent: clickEvent,
                }
            }
        }

        case AModal.CLOSE_ALL: {
            const newState = {...state}
            Object.keys(newState).map(key => {
                newState[key] = {
                    ...newState[key],
                    data: {},
                    shown: false,
                }
            })
            return newState;
        }

        case AModal.CLOSE: {
            const {payload: {target}} = action;

            return {
                ...state,
                [target]: {
                    ...state[target],
                    shown: false,
                }
            }
        }

        case "RESET_MODAL": {
            return {
                ...state,
            }
        }

        case AModal.TOGGLER_LIGHT_BOX: {
            return {
                ...state,
                fsLightBox: action.payload
            }
        }
        default:
            return state
    }
}

export default modalsReducer;