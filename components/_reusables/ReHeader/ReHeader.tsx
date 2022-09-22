import * as React from "react"
import styled from "styled-components";
import {Fonts} from "../../../constants/fonts";
import {Colors} from "../../../constants/colors";
import {BREAKPOINTS} from "../../../constants/breakpoints";
import {memo, ReactNode} from "react";

type ReHeaderProps = {
    sup?: string | number
    children: ReactNode
}
const ReHeader = memo(({children, sup}: ReHeaderProps) => {
    return (
        <Header>
            <Heading>{children}</Heading>
            {sup && <sup>{sup}</sup>}
        </Header>
    )
})

const Header = styled.header`
  display: flex;

  & sup {
    margin-left: 8px;
    margin-top: 7px;
    font: ${Fonts.SF_400_12_12};
    color: ${Colors.TEXT_SUP};
    @media (${BREAKPOINTS.TILL_MD}) {
      margin-left: 5px;
      margin-top: 1px;
    }
  }
`


const Heading = styled.h1`
  font: ${Fonts.SF_600_36_36};
  color: ${Colors.TEXT_PRIMARY};
  margin: 0;

  @media (${BREAKPOINTS.TILL_MD}) {
    font: ${Fonts.SF_600_24_24};
  }
`


export default ReHeader;
