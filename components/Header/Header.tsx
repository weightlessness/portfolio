import * as React from "react"
import styled from "styled-components"
import TopHeader from "./TopHeader/TopHeader";
import MiddleHeader from "./MiddleHeader";
import HeaderMobile from "./HeaderMobile/HeaderMobile";
import BottomAltHeader from "./BottomAltHeader";
import {Media} from "../../lib/media";
import withErrorBoundary from "../_hoc/withErrorBoundary";
import { MenuItemType } from "./BottomAltHeader/MenuItem/MenuItem";

const Header = withErrorBoundary (({menu}: {menu: Partial<MenuItemType>}) => {

    return (
        <>
            <Media lessThan={'lg'}>
                <HeaderWrapperMobile>
                    <HeaderMobile menu={menu}/>
                </HeaderWrapperMobile>
            </Media>
            <Media greaterThan={'md'}>
                <HeaderWrapperDesktop>
                    <TopHeader
                        menu={menu.top.sort((a, b) => parseInt(a.menu_order) - parseInt(b.menu_order))}
                    />

                    <MiddleHeader/>

                    <BottomAltHeader
                        menuLeft={menu.bottom.sort((a, b) => parseInt(a.menu_order) - parseInt(b.menu_order))}
                        menuRight={menu.right.sort((a, b) => parseInt(a.menu_order) - parseInt(b.menu_order))}
                    />
                </HeaderWrapperDesktop>
            </Media>
        </>
    )

})


const HeaderWrapperDesktop = styled.div`
`
const HeaderWrapperMobile = styled.div`
`
export default Header