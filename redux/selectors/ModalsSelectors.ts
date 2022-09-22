import {RootState} from "../store";
import {ModalTargetType} from "../reducers/modalsReducer";


const selectModalState = (target: string) => (state: RootState) => state.modals[target]
const selectModalShown = (target: ModalTargetType) => (state: RootState) => state.modals[target].shown
const selectModalData = (target: ModalTargetType) => (state: RootState) => state.modals[target].data
const selectFsLightBox = (state: RootState) => state.modals.fsLightBox


export default {
    selectModalState,
    selectModalShown,
    selectFsLightBox,
    selectModalData,
}