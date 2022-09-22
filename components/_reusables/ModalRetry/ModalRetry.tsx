import * as React from "react";
import {memo} from "react";
import styled from "styled-components";
import {Colors} from "../../../constants/colors";


type ModalRetryPropsType = {
    onClick: () => void
}

const ModalRetry = memo((props: ModalRetryPropsType) => {

    const {
        onClick
    } = props
    return (
        <Container>
            <div>Что-то пошло не так...</div>
            <RetryText onClick={onClick}>Попробовать ещё раз</RetryText>
        </Container>
    )
})

const RetryText = styled.div`
  color: ${Colors.BRAND};
  border-bottom: 1px dashed #232323;
  line-height: 1.5em;
  cursor: pointer;
`

const Container = styled.div`
  position: absolute;
  background-color: white;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`


export default ModalRetry