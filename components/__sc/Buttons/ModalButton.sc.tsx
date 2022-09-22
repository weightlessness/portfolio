import styled from "styled-components";
import {BORDER_RADIUS, BOX_SHADOW} from "../../../constants/cssConstants";

export const ModalButton = styled.div`
  height: 50px;
  width: 50px;
  border-radius: ${BORDER_RADIUS.SMALL};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
	box-shadow: ${BOX_SHADOW.OFFSET5_BlUR20_OP014};
`

