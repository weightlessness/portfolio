import * as React from "react"
import {Col} from "../../../Grid";
import styled from "styled-components";
import GeneratedComponent from "../generatedComponent";
import {Fonts} from "../../../../constants/fonts";
import {Colors} from "../../../../constants/colors";
import { MenuItemType } from "../MenuItem/MenuItem";


const ComponentColumn = ({menu, span, title}: {menu: MenuItemType[], span: number, title: string}) => {
  return (
    <Col xs={span}>
      <ColumnWrapper>
        {title && <ColumnHeading>{title}</ColumnHeading>}
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
      </ColumnWrapper>
    </Col>
  )
}


const ColumnHeading = styled.div`
  font: ${Fonts.SF_600_18_18};
  color: ${Colors.TEXT_PRIMARY};
  text-transform: initial;
  margin-top: 30px;
`
const ColumnWrapper = styled.div``

export default ComponentColumn