import styled from "styled-components";
import {BREAKPOINTS} from "../../constants/breakpoints";


export const BreadcrumbsWrapper = styled.div`
  margin-bottom: 40px;
  @media (${BREAKPOINTS.TILL_MD}) {
    margin-bottom: 12px;
  }
`