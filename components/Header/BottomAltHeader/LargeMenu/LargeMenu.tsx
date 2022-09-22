import * as React from "react"
import {Container} from "../../../Grid";
import styled from "styled-components";
import ComponentGrid from "../ComponentGrid";
import GeneratedComponent from "../generatedComponent";
import withErrorBoundary from "../../../_hoc/withErrorBoundary";
import { MenuItemType } from "../MenuItem/MenuItem";


const LargeMenu = withErrorBoundary(({menu}: {menu: MenuItemType[]}) => {
    return (
        <MegaMenuBlock>
            <Container>
                <ComponentGrid>
                    {
                        menu
                            .sort((a, b) => +a.menu_order - +b.menu_order)
                            .map(m => {
                                const {classes, menu_order} = m

                                return (
                                    <GeneratedComponent classes={classes} menu={m} key={menu_order}/>
                                )
                            })
                    }
                </ComponentGrid>
            </Container>
        </MegaMenuBlock>
    )
})


const MegaMenuBlock = styled.div`
  width: 100%;
  position: absolute;
  top: calc(100% + 1px);
  left: 0;
  background: #fff;
  z-index: 9000;
  //padding-top: 60px;
  //padding-bottom: 60px;
  padding-top: 30px;
  padding-bottom: 30px;
  box-shadow: 0 5px 20px -10px rgba(53, 50, 56, 0.14);
`


export default LargeMenu;
