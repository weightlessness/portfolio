import * as React from "react"
import styled from "styled-components";
import GeneratedComponent from "../generatedComponent";
import { MenuItemType } from "../MenuItem/MenuItem";

const ComponentContent = ({menu}: {menu: MenuItemType[]}) => {
  return (
    <ContentWrapper>
      {
        menu
          .sort((a, b) => +a.menu_order - +b.menu_order)
          .map(m => {
            const {classes, menu_order} = m
            return (
                <GeneratedComponent classes={classes} menu={m} key={menu_order} />
            )
          })
      }
    </ContentWrapper>
  )
}


const ContentWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`


export default ComponentContent