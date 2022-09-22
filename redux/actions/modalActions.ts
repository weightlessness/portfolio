import {AModal} from "../../constants/actions";
import {ModalTargetType} from "../reducers/modalsReducer";
import {EntityId} from "@reduxjs/toolkit";


function open(target: ModalTargetType, data = null) {
    return {
        type: AModal.OPEN,
        payload: {target, data}
    }
}

function close(target: ModalTargetType) {
    return {
        type: AModal.CLOSE,
        payload: {target}
    }
}

function openModalFabric(item, clickEvent, productCollections?) {
    return {
        type: AModal.OPEN,
        payload: {target: 'modalFabric', clickEvent, productCollections}
    }
}

type OpenFabricOptionsType = {
    currentFabric: any
    changedItem:  'product' | 'modalProduct' | {type: string, id: string}
    productCollectionIds?: Array<EntityId>
}

function openFabric(options: OpenFabricOptionsType) {
    return {
        type: AModal.OPEN_FABRIC,
        payload: options
    }
}

function closeFabric() {
    return {
        type: AModal.CLOSE_FABRIC
    }
}


const openLightBox = (sources: Array<string>, slide: number) => ({
    type: AModal.TOGGLER_LIGHT_BOX,
    payload: {
        toggler: true,
        sources,
        slide
    }
})

const closeAll = () => ({
    type: AModal.CLOSE_ALL
})



const modalActions = {
    open,
    close,
    closeAll,
    openModalFabric,
    openLightBox,
    openFabric,
    closeFabric
}

export default modalActions