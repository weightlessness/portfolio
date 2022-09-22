import styled, {css, keyframes} from "styled-components";
import {Colors} from "../../../constants/colors";
import {BREAKPOINTS} from "../../../constants/breakpoints";
import {Fonts} from "../../../constants/fonts";
import {ModalButton} from "../../__sc/Buttons/ModalButton.sc";


const show = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - 110px))
  }
`

const hide = keyframes`
  from {
    transform: translateX(calc(-100% - 110px));
  }
  to {
    transform: translateX(0);
  }
`

const showMobile = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-610px)
  }
`

const hideMobile = keyframes`
  from {
    transform: translateX(-610px);
  }
  to {
    transform: translateX(0);
  }
`


const Default = keyframes`

`

export const ModalFormBLock = styled.div<{ active: boolean, touched: boolean, width: string }>`
  position: fixed;
  z-index: 1000001;
  right:  ${p=>'calc(-1 * calc('+p.width+' + 110px))'};
  top: 0;
  min-height: 100%;
  height: 100%;
  width: ${p=>p.width};
  max-width: calc(100% - 80px);
  display: flex !important;
  flex-wrap: nowrap;
  flex-direction: column;
  background: #fff;
  overscroll-behavior-y: contain;
  animation: 0.3s ${p => !p.touched ? Default : p.active ? show : hide} ease-in-out forwards;
  @media (${BREAKPOINTS.TILL_MD}) {
    z-index: 19001;
    width: 500px;
    right: -611px;
    animation: 0.3s ${p => !p.touched ? Default : p.active ? showMobile : hideMobile} ease-in-out forwards;
  }
`

export const ModalClose = styled(ModalButton)`
  position: absolute;
  top: 30px;
  left: -81px;

  @media (${BREAKPOINTS.TILL_MD}) {
    position: absolute;
    top: unset;
    bottom: 15px;
    left: -66px;
  }
`

export const ModalSubtitle = styled.div`
  margin-top: 12px;
  color: ${Colors.TEXT_SECONDARY};
  font: ${Fonts.PN_400_14_21};

  @media (${BREAKPOINTS.TILL_MD}) {
    font: ${Fonts.PN_400_14_21};
  }
`
export const ModalTitle = styled.div`
  color: ${Colors.TEXT_PRIMARY};
  font: ${Fonts.SF_600_24_24};

  @media (${BREAKPOINTS.TILL_MD}) {
    font: ${Fonts.SF_600_24_24};
  }
`

export const ModalHead = styled.div`
  border-bottom: 1px solid ${Colors.BORDER_PRIMARY};
  padding: 30px;

  @media (${BREAKPOINTS.TILL_MD}) {
    border: none;
    height: auto;
    padding: 40px 15px 15px;
  }
`

const ScrollViewHidden = css`
  transform: translateY(100px);
  opacity: 0;
  transition-delay: 0s;
  pointer-events: none;
`

export const ModalContent = styled.div<{ hide: boolean }>`
  transition: .35s;
  transition-delay: .35s;
  transform: translateY(0);
  opacity: 1;
  overflow-y: scroll;
  overscroll-behavior: contain;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  &::-webkit-scrollbar-track-piece {
    background-color: transparent;
  }

  ${p => p.hide && ScrollViewHidden}
`


export const ScrollView = styled.div`
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden auto;
  //scrollbar-color: transparent transparent;
  position: relative;

  //&::-webkit-scrollbar {
  //  width: 0;
  //  height: 0;
  //}

  &::-webkit-scrollbar-track-piece {
    background-color: transparent;
  }

`

const SuccessNotificationActive = css`
  transform: translateY(0);
  transition-delay: .35s;
  opacity: 1;
  pointer-events: all;
`
export const SuccessNotification = styled.div<{ active: boolean; }>`
  position: absolute;
  z-index: 8;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  transition: .35s;
  transition-delay: .0s;
  transform: translateY(100px);
  opacity: 0;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 30px;

  @media (${BREAKPOINTS.TILL_MD}) {
    padding: 0 15px;
  }

  ${p => p.active && SuccessNotificationActive}
`

const LoaderIconRotate = keyframes`
  from {
    transform: scale(3, 3) rotate(0deg);
  }
  to {
    transform: scale(3, 3) rotate(360deg);
  }
`

export const LoaderIcon = styled.div`
  //transform: scale(3,3);
  animation: ${LoaderIconRotate} 1s linear infinite;
`

export const SuccessIcon = styled.div``
export const SuccessTitle = styled.div`
  margin-top: 24px;
  font: ${Fonts.SF_600_18_27};
  color: ${Colors.TEXT_PRIMARY};
`

const fadeIn = (notOnlyOpenModal: boolean) => keyframes`
  from {
    transform: translateX(0);
    opacity: 0;
  }
  0.01% {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(-100%);
    opacity: 0.5;
  }
`

const fadeOut = (notOnlyOpenModal: boolean) => keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0.5;
  }
  99.99% {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 0;

`

const CoverDefault = keyframes`
  to {

  }
`

export const ButtonWrapper = styled.div`
  flex: 1;
  padding-bottom: 40px;
  margin: 0 30px;
  @media (${BREAKPOINTS.TILL_MD}) {
    margin: 0 15px;
    padding-bottom: 15px;
  }
`

export const TransparentCover = styled.div<{ active: boolean, notOnlyOpenModal: boolean, touched: boolean }>`
  position: fixed;
  z-index: 1000001;
  top: 0;
  bottom: 0;
  left: 100%;
  height: 100%;
  width: 100%;
  background: rgb(53, 50, 56);
  display: block;
  animation: 0.4s ${p => !p.touched ? CoverDefault : p.active ? fadeIn(p.notOnlyOpenModal) : fadeOut(p.notOnlyOpenModal)} ease-in-out forwards;
  @media (${BREAKPOINTS.TILL_MD}) {
    z-index: 19001;
  }
`