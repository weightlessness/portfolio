import styled from "styled-components";
import {BREAKPOINTS} from "../../constants/breakpoints";



export const PageContainer = styled.div`
  margin-top: 45px;
  margin-bottom: 60px;

  @media (${BREAKPOINTS.TILL_MD}) {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`
