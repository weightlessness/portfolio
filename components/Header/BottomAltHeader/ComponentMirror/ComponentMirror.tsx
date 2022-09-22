import * as React from "react"
import styled from "styled-components";
import {Fonts} from "../../../../constants/fonts";
import {Colors} from "../../../../constants/colors";
import { MenuItemType } from "../MenuItem/MenuItem";
import Link from "next/link";

const ComponentMirror = ({menu}: {menu: MenuItemType}) => {

  const {name, slug} = menu

  return (
    <div>
      <Link href={slug} passHref>
        <a>
          <Mirror>
            {name}
          </Mirror>
        </a>
      </Link>
    </div>
  )
}


const Mirror = styled.div`
  display: inline-block;
  font: ${Fonts.PN_400_14_21};
  color: ${Colors.BRAND};
  text-transform: initial;
  padding-bottom: 3px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0;
    border-top: 1px dashed ${Colors.BRAND};
  }
`


export default ComponentMirror;
