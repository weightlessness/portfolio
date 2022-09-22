import * as React from "react"
import {useCallback, useEffect, useRef} from "react"
import styled from "styled-components";
import {Container} from "../../Grid";
import {LogoBlock} from "../MiddleHeader/MiddleHeader";
import {Phone} from "../../_icons/Phone";
import {Burger} from "../../_icons/Burger";
import {Logo} from "../../_icons/Logo";
import ReIcon from "../../_reusables/ReIcon";
import {Colors} from "../../../constants/colors";
import {Fonts} from "../../../constants/fonts";
import withErrorBoundary from "../../_hoc/withErrorBoundary";
import Search from "../Search";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";


const HeaderMobile = withErrorBoundary(({menu}) => {

    const [searchModalOpen, setSearchModalOpen] = React.useState(false)


    const newVersionInfoRef = useRef<HTMLDivElement>()

    const closeSearch = useCallback(() => setSearchModalOpen(false), [])
    const openSearch = () => setSearchModalOpen(true)

    return (
        <HeaderWrapper>
            <NewVersionInfoWrapper ref={newVersionInfoRef}>
            </NewVersionInfoWrapper>
            <FixedBlock fixed={true}>
                <Container>
                    <HeaderRow>
                        <LogoBlock>
                            <Link href='/' passHref><a>
                                <Logo/>
                            </a></Link>
                        </LogoBlock>
                        <Buttons>
                            <MobileButton onClick={openSearch}>
                                <ReIcon type='magnifier' size={{x: 16, y: 16}} color={Colors.TEXT_PRIMARY}/>
                            </MobileButton>

                            <MobileSearch active={searchModalOpen} closeModal={closeSearch}/>

                            <MobileButton>
                                <Phone/>
                            </MobileButton>

                            <Link passHref href={'/favorites'}><a>
                                <MobileButton>
                                    <ReIcon type={'heart'} size={{x: 16, y: 16}} color={Colors.TEXT_PRIMARY}/>
                                </MobileButton>
                            </a></Link>

                            <Link passHref href={'/cart/'}><a>
                                <MobileButton>
                                    <CartCountMobile>
                                        0
                                    </CartCountMobile>
                                </MobileButton>
                            </a></Link>

                            <MobileButton>
                                <Burger/>
                            </MobileButton>
                        </Buttons>
                    </HeaderRow>
                </Container>
            </FixedBlock>
        </HeaderWrapper>
    )
})


const MobileSearch = withErrorBoundary(({active, closeModal}) => {

    const router = useRouter()

    useEffect(() => {
        closeModal()
    }, [router.asPath])

    return (
        <SearchModal active={active}>
            <SearchHeading>
                <Heading>Поиск</Heading>
                <CloseModal onClick={() => {
                    closeModal()
                }}>
                    <ReIcon type='cross' size={{x: 12, y: 12}} color={Colors.TEXT_PRIMARY}/>
                </CloseModal>
            </SearchHeading>

            <SearchInput>
                <Search maxItemsAmount={3} isMobile={true}/>
            </SearchInput>


        </SearchModal>
    )
})

const HeaderWrapper = styled.div`
 min-height: 112px;
`

const NewVersionInfoWrapper = styled.div`

`

const SearchInput = styled.div`
  position: relative;
  margin-top: 24px;
`
const Heading = styled.div`
  font: ${Fonts.SF_600_18_18};
  color: ${Colors.TEXT_PRIMARY};
`
const CloseModal = styled.div`
  display: block;
  line-height: 0;
  padding: 12px;
  margin: -12px;
`
const SearchHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 18px;
`
const SearchModal = styled.div<{ active: boolean; }>`
  display: ${p => p.active ? 'block' : 'none'};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: #fff;
  padding: 24px 15px;
  box-shadow: 0 5px 20px rgba(53, 50, 56, 0.14);
  z-index: 50;
`

const CartCountMobile = styled.div`
  font: ${Fonts.PN_400_9_16};
  border-radius: 50%;
  background: ${Colors.BRAND};
  color: #fff;
  margin-bottom: 0;
  min-width: 16px;
  text-align: center;
`
const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: -12px 0;

  & > button:last-of-type {
    margin-right: -12px;
  }
`
export const MobileButton = styled.button`
  border: none;
  outline: none;
  background: none;
  padding: 10px 10px;
  display: flex;
  align-items: center;
`
export const Button = styled.button`
  border: none;
  outline: none;
  background: none;
  padding: 0 12px;
  display: flex;
  align-items: center;
`
const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 24px;
  padding-top: 24px;
`
const FixedBlock = styled.header<{ fixed?: boolean }>`
  position: ${p => p.fixed ? 'fixed' : 'static'};
  background: #FFFFFF;
  box-shadow: 0 5px 20px rgba(53, 50, 56, 0.14);
  width: 100%;
  z-index: 1000;
  top: 0;
`


export default HeaderMobile;
