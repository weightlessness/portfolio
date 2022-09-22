import * as React from "react"
import { useRef } from "react"
import DropdownMenu from "../DropdownMenu"
import styled from "styled-components"
import { Colors } from "../../../../constants/colors"
import { Fonts } from "../../../../constants/fonts"
import LargeMenu from "../LargeMenu"
import ReTag from "../../../_reusables/ReTag"
import withErrorBoundary from "../../../_hoc/withErrorBoundary"
import Link from "next/link"

export type MenuItemType = {
  classes: string[]
  id: number
  item_parent: string
  menu_order: string
  name: string
  object: string
  object_id: string
  slug: string
  type: string
  children?: MenuItemType[]
  top?: MenuItemType[]
  right?: MenuItemType[]
  bottom?: MenuItemType[]
}

const MenuItem = withErrorBoundary(
  ({ menuItem, visible, hoverItem, setHoverItem, accordionMode = true }) => {
    const ref = useRef(null)
    const overlay = useRef(null)

    const { slug, name, children, id, classes } = menuItem
    const isHovered = hoverItem === id

    const childrenCounter = children?.length || 0

    return (
      <Item
        onMouseEnter={() => {
          setHoverItem(id)
        }}
        onMouseMove={(e) => {
          if (e.target === overlay.current) {
            setHoverItem("")
          }
        }}
        onMouseLeave={() => {
          setHoverItem("")
        }}
        ref={ref}
        visible={visible}
        active={hoverItem ? isHovered : null}>
        <Link passHref href={slug}>
          <a itemProp={"url"}>
            <MenuItemLink>
              <span>{name}</span>
              {classes.includes("new") && <ReTag type='new'>NEW</ReTag>}
              {slug === "/actions" && <ReTag type='new'>%</ReTag>}
            </MenuItemLink>
          </a>
        </Link>

        {childrenCounter === 1 && isHovered && (
          <HoverBlock>
            <DropdownMenu
              minWidth={ref?.current?.offsetWidth ?? 0}
              menu={children.sort(
                (a: MenuItemType, b: MenuItemType) => parseInt(a.menu_order) - parseInt(b.menu_order)
              )}
            />
          </HoverBlock>
        )}

        {childrenCounter > 1 && isHovered && accordionMode && (
          <HoverBlock>
            <LargeMenu
              menu={children.sort(
                (a:MenuItemType, b: MenuItemType) => parseInt(a.menu_order) - parseInt(b.menu_order)
              )}
            />
            <Overlay ref={overlay} />
          </HoverBlock>
        )}
      </Item>
    )
  }
)


const HoverBlock = styled.div``
const Overlay = styled.div`
  width: 100%;
  position: absolute;
  top: calc(100% + 1px);
  height: 150vh;
  left: 0;
  z-index: 4500;
  background: rgba(53, 50, 56, 0.5);
`
const MenuItemLink = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 15px 15px;
  position: relative;
  white-space: nowrap;

  & div {
    margin-left: 8px;
  }

  &:hover::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 15px;
    right: 15px;
    height: 1px;
    background: ${Colors.BRAND};
  }
`
const Item = styled.li<{ visible: boolean; active: boolean | null }>`
  font: ${Fonts.PN_400_14_21};
  color: ${(p) =>
    p.active === null
      ? Colors.TEXT_PRIMARY
      : p.active
      ? Colors.BRAND
      : Colors.TEXT_SECONDARY};
  text-transform: uppercase;
  visibility: ${(p) => (p.visible ? "visible" : "hidden")};
  position: ${(p) => (p.visible ? "static" : "absolute")};

  // & ${MenuItemLink} {
  //   position: relative;
  //   z-index: 2;
  // 	white-space: nowrap;
  // }

  &:hover ${MenuItemLink}::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      transparent 15px,
      ${Colors.BRAND} 15px,
      ${Colors.BRAND} calc(100% - 15px),
      transparent calc(100% - 15px),
      transparent
    );
  }
`

export default MenuItem
