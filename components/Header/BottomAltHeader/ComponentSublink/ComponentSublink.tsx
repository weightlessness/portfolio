import * as React from "react"
import GeneratedComponent from "../generatedComponent";
import styled from "styled-components";
import {Colors} from "../../../../constants/colors";
import {Fonts} from "../../../../constants/fonts";
import ReTag from "../../../_reusables/ReTag";
import { MenuItemType } from "../MenuItem/MenuItem";
import Link from "next/link";


const ComponentSublink = ({menu}: {menu: MenuItemType}) => {
  const {name, slug, children, classes} = menu

  return (
    <>
      <SublinkWrapper>
        <Link href={slug} passHref>
          <a>
            <SublinkName>{name}</SublinkName>
          </a>
        </Link>
        {
          classes.includes('new') &&
          <SublinkTag>
            <ReTag type='new'>
              NEW
            </ReTag>
          </SublinkTag>
        }
      </SublinkWrapper>

      {
        !!children?.length &&
        children
          .sort((a, b) => +a.menu_order - +b.menu_order)
          .map(m => {
            const {classes, menu_order} = m
            return (
                <GeneratedComponent classes={classes} menu={m} key={menu_order} />
            )
          })
      }
    </>

  )
}


const SublinkTag = styled.div`
  display: inline-block;
  margin-left: 8px;
`
const SublinkName = styled.div`
  display: inline-block;

  &:hover {
    color: ${Colors.BRAND};
  }
`
const SublinkWrapper = styled.div`
  color: ${Colors.TEXT_SECONDARY};
  font: ${Fonts.PN_400_14_21};
  text-transform: initial;

  &:not(:last-of-type) {
    margin-bottom: 12px;
  }

  &:hover {
    color: ${Colors.BRAND};
  }
`


export default ComponentSublink
