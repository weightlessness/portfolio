import ReIcon from "../ReIcon";
import {Colors} from "../../../constants/colors";
import styled, {css} from "styled-components";
import {Fonts} from "../../../constants/fonts";
import {BREAKPOINTS} from "../../../constants/breakpoints";
import React from "react";

type SuccessNotificationPropsType = {
    /**
        Set true when request is success
     */
    show: boolean
    /**
     * Set false if you don't want to show Icon
     */
    showIcon?: boolean
    /**
     * title text. Can be JSX
     */
    title?: string | React.ReactNode
    /**
     * message text. Can be JSX
     */
    message?: string | React.ReactNode
}

const SuccessNotification: React.FC<SuccessNotificationPropsType> = (props) => {
    const {
        show = false,
        showIcon = true,
        title,
        message
    } = props;

    return (
        <SuccessNotificationBody active={show}>
            {showIcon&&<SuccessIcon><ReIcon type="success" size={{x: 40, y: 40}} color={Colors.BRAND}/></SuccessIcon>}
            <SuccessTitle>{title}</SuccessTitle>
            <SuccessMessage>{message}</SuccessMessage>
        </SuccessNotificationBody>
    )
}

const SuccessIcon = styled.div``
const SuccessTitle = styled.div`
  margin-top: 24px;
  font: ${Fonts.SF_600_18_27};
  color: ${Colors.TEXT_PRIMARY};
`

const SuccessNotificationActive = css`
  transform: translateY(0);
  transition-delay: .35s;
  opacity: 1;
  pointer-events: all;
`
const SuccessNotificationBody = styled.div<{ active: boolean; }>`
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
const SuccessMessage = styled.div`
  margin-top: 24px;
  font: ${Fonts.PN_400_14_21};
  color: ${Colors.TEXT_SECONDARY};
  text-align: center;

  b {
    font: ${Fonts.SF_600_14_21};
    color: ${Colors.TEXT_PRIMARY};
  }
`


export default React.memo(SuccessNotification)