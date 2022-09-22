import * as React from "react"
import GeneratedComponent from "../generatedComponent";
import styled from "styled-components";

import {Colors} from "../../../../constants/colors";
import {Fonts} from "../../../../constants/fonts";
import ReTag from "../../../_reusables/ReTag";
import { MenuItemType } from "../MenuItem/MenuItem";
import Link from "next/link";

const ComponentLink = ({menu}: {menu: MenuItemType}) => {
  const {name, slug, children, classes} = menu

  return (
    <>
      <LinkWrapper>
        <Link href={slug} passHref>
          <a>
            <LinkName>{name}</LinkName>
          </a>
        </Link>
        {
          classes.includes('new') &&
          <LinkTag>
            <ReTag type='new'>
              NEW
            </ReTag>
          </LinkTag>
        }
      </LinkWrapper>

      {
        !!children?.length && children
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


const LinkTag = styled.div`
  display: inline-block;
  margin-left: 8px;
`
const LinkName = styled.div`
  display: inline-block;

  &:hover {
    color: ${Colors.BRAND};
  }
`
const LinkWrapper = styled.div`
  color: ${Colors.TEXT_PRIMARY};
  font: ${Fonts.PN_400_14_21};
  text-transform: initial;

  &:not(:last-of-type) {
    margin-bottom: 12px;
  }

  &:hover {
    color: ${Colors.BRAND};
  }
`


export default ComponentLink;
