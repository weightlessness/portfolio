import * as React from "react"
import styled from "styled-components"
import { BORDER_RADIUS } from "../../../../constants/cssConstants"
import { Fonts } from "../../../../constants/fonts"
import { BREAKPOINTS } from "../../../../constants/breakpoints"
import GeneratedComponent from "../generatedComponent"
import withErrorBoundary from "../../../_hoc/withErrorBoundary"
import { MenuItemType } from "../MenuItem/MenuItem"

const DropdownMenu = withErrorBoundary(
  ({ menu, minWidth }: { menu: MenuItemType[]; minWidth: number }) => {
    return (
      <Block minWidth={minWidth}>
        {menu.map((m) => {
          const { classes, menu_order } = m
          return (
            <div key={menu_order}>
              <GeneratedComponent classes={classes} menu={m} key={menu_order} />
            </div>
          )
        })}
      </Block>
    )
  }
)

const Block = styled.div<{ minWidth: number }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: calc(100% + 1px);
  z-index: 1;
  min-width: ${(p) => `${p.minWidth + 30}px`};
  width: fit-content;
  font: ${Fonts.PN_400_14_14};
  border: none;
  border-radius: ${BORDER_RADIUS.SMALL_3_4};
  background: #ffffff;
  box-shadow: 0 5px 20px rgba(53, 50, 56, 0.14);
  //padding: 30px;
  padding: 0 30px;
  margin-left: -15px;
  transition: 0.1s;
  clip-path: inset(-1px -20px -20px -20px);

  @media (${BREAKPOINTS.TILL_MD}) {
    left: unset;
    right: 0;
  }

  &:after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: #fff;
    position: absolute;
    top: -2px;
    right: 0;
  }
`

export default DropdownMenu
