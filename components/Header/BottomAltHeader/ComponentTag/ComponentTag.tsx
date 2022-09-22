import Link from "next/link";
import * as React from "react"
import styled from "styled-components";
import {Colors} from "../../../../constants/colors";
import {Fonts} from "../../../../constants/fonts";
import ReTag from "../../../_reusables/ReTag";
import { MenuItemType } from "../MenuItem/MenuItem";


const ComponentTag = ({menu}: {menu: MenuItemType}) => {
  const {name, slug, classes} = menu

  return (
    <Link href={slug} passHref>
      <a>
        <Tag>
          {name}
          {
            classes.includes('new') &&
            <LinkTag>
              <ReTag type='new' radius={'large'}>
                NEW
              </ReTag>
            </LinkTag>
          }
        </Tag>
      </a>
    </Link>
  )
}

const LinkTag = styled.div`
  display: inline-block;
  margin: -3.5px -6px -3.5px 8px;
`
const Tag = styled.div`
  display: inline-flex;
  align-items: center;
  color: ${Colors.TEXT_PRIMARY};
  font: ${Fonts.PN_400_14_14};
  text-transform: initial;
  border: 2px solid ${Colors.BORDER_PRIMARY};
  border-radius: 30px;
  margin-bottom: 8px;
  margin-right: 8px;
  padding: 6px 10px;

  &:hover {
    border-color: ${Colors.BRAND};
  }
`


export default ComponentTag
