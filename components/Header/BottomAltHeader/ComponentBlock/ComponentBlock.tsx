import * as React from "react"
import styled from "styled-components";
import GeneratedComponent from "../generatedComponent";
import { MenuItemType } from "../MenuItem/MenuItem";

const ComponentBlock = ({menu}: {menu: MenuItemType[]}) => {
  return (
    <BlockWrapper>
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
    </BlockWrapper>
  )
}


const BlockWrapper = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`


export default ComponentBlock