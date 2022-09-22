import * as React from "react";
import {Col, Container, Row} from "../../Grid";
import styled, {css} from "styled-components";
import {Colors} from "../../../constants/colors";
import {Fonts} from "../../../constants/fonts";
import {BREAKPOINTS} from "../../../constants/breakpoints";
import {Logo} from "../../_icons/Logo";
import withErrorBoundary from "../../_hoc/withErrorBoundary";
import Search from "../Search";
import ReIcon from "../../_reusables/ReIcon";
import Link from "next/link";


const MiddleHeader = withErrorBoundary(() => {

    return (
        <MiddleHeaderContainer>
            <Row>
                <Col xs={3}>
                    <LogoBlock>
                        <Link href='/' passHref>
                            <a>
                                <Logo/>
                            </a>
                        </Link>
                    </LogoBlock>
                </Col>

                <Col xs={6}>
                    <Search/>
                </Col>

                <Col xs={3}>
                    <RightBlockRow>

                        <Link passHref href={'/favorites'}><FavoritesBlock>
                            <ReIcon type={'heart'} size={{x: 16, y: 16}} color={Colors.TEXT_PRIMARY}/>
                            <span>Избранное</span>
                        </FavoritesBlock></Link>

                        <Link passHref href={'/cart/'}><CartBlock>
                            <CartCount>0</CartCount>
                            <span>Корзина</span>
                        </CartBlock></Link>
                    </RightBlockRow>
                </Col>
            </Row>
        </MiddleHeaderContainer>
    )
})




export const LogoBlock = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  height: 25px;

  & svg {
    height: 25px;
    width: auto;
  }

  @media (${BREAKPOINTS.TILL_LG}) {
    top: 0;
    transform: none;
    position: static;
    height: 18px;

    & svg {
      height: 18px;
    }
  }
  @media (${BREAKPOINTS.TILL_375}) {
    & svg {
      height: 12px;
    }
  }
`

const RightBlockRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 100%;

  & a:hover span {
    color: ${Colors.BRAND};
  }
`

export const CartCount = styled.div`
  font: ${Fonts.PN_400_9_16};
  border-radius: 50%;
  background: ${Colors.BRAND};
  color: #fff;
  margin-bottom: 8px;
  min-width: 16px;
  text-align: center;
`

const Column = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${Colors.TEXT_PRIMARY};
  font: ${Fonts.PN_400_14_14};
  height: 100%;
`

const CartBlock = styled.a`
  display: block;
  ${Column};
  margin-left: 30px;
`

const FavoritesBlock = styled.a`
  display: block;
  ${Column};

  & svg {
    fill: ${Colors.TEXT_PRIMARY};
    margin-bottom: 8px;
  }
`


const MiddleHeaderContainer = styled(Container)`
  padding-top: 18px;
  padding-bottom: 15px;
`



export default MiddleHeader;
