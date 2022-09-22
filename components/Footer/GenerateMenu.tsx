import Link from "next/link";
import ReTag from "../_reusables/ReTag";
import styled from "styled-components";
import {Fonts} from "../../constants/fonts";
import {Colors} from "../../constants/colors";
import {BREAKPOINTS} from "../../constants/breakpoints";
import withErrorBoundary from "../_hoc/withErrorBoundary";

type MenuItem = {
  classes: string[],
  id: number,
  item_parent: string,
  menu_order: string,
  name: string,
  object: string,
  object_id: string,
  slug: string,
  type: string
}

const GenerateMenu = withErrorBoundary (({menu}: any) => {

  return <>
    {menu.map((item: MenuItem) => {
      const {slug = '', name = '', classes = [], id = ''} = item

      return (
          <FooterLink key={id}>
            <Link href={slug} passHref><a itemProp={slug.indexOf('http')===-1?'url':''}>{name}</a></Link>
            {
              classes.includes('new') &&
              <Tag><ReTag type='new'>NEW</ReTag></Tag>
            }
          </FooterLink>
      )
    })}
  </>
})


const FooterLink = styled.div`
  font: ${Fonts.PN_400_14_21};
  color: ${Colors.TEXT_PRIMARY};

  > a {
    cursor: pointer;
  }

  > a:hover {
    color: ${Colors.BRAND};
  }

  & + & {
    margin-top: 12px;
  }
  
  @media(${BREAKPOINTS.TILL_MD}){
    & + & {
      margin-top: 15px;
    }
  }
`
const Tag = styled.div`
  display: inline-block;
  margin-left: 8px;
  user-select: none;
`


export default GenerateMenu;
