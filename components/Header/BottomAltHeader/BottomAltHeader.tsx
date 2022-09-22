import {useEffect, useRef, useState} from "react"
import {Container} from "../../Grid";
import styled from "styled-components";
import {Colors} from "../../../constants/colors";
import {Fonts} from "../../../constants/fonts";
import {BREAKPOINTS, BREAKPOINTS_NUMBERS} from "../../../constants/breakpoints";
import {SimpleArrow} from "../../_icons/SimpleArrow";
import MenuItem from "./MenuItem";
import Skeleton from "react-loading-skeleton";
import {BORDER_RADIUS} from "../../../constants/cssConstants";
import withErrorBoundary from "../../_hoc/withErrorBoundary";
import ErrorBoundary from "../../_reusables/ErrorBoundary";
import { Router } from "next/dist/client/router";
import Link from "next/link";
import { MenuItemType } from "./MenuItem/MenuItem";



const BottomAltHeader = withErrorBoundary(({menuLeft, menuRight}: {menuLeft: MenuItemType[], menuRight: MenuItemType[]}) => {
    const ref = useRef<HTMLDivElement>(null)
    const [newList, setNewList] = useState<number | null>(null)
    const [hoverItem, setHoverItem] = useState('')
    const [accordionMode, setAccordionMode] = useState<boolean>(false);
    const [initialized, setInitialized] = useState(false)
    const refLowerHeader = useRef()

    useEffect(() => {
        const onResize = () => {
            if (ref.current.clientWidth < 1400) {
                setNewList(10)
            } else {
                setNewList(12)
            }
        }
        window.addEventListener('resize', onResize)
        onResize()
        return () => window.removeEventListener('resize', onResize)
    }, [ref.current])

    useEffect(() => {
        if (hoverItem) {
            const timeoutId = setTimeout(() => {
                setAccordionMode(true)
            }, 50)
            return () => {
                clearTimeout(timeoutId)
            }
        } else {
            setAccordionMode(false)
        }

    }, [!!hoverItem])


    useEffect(() => {
        const closeAccordion = () => {
            setAccordionMode(false)
            setHoverItem('')
        }
        Router.events.on('routeChangeStart', closeAccordion)
        return () => Router.events.off('routeChangeStart', closeAccordion)
    }, [])

    

    useEffect(() => {
        if (newList) {
            setInitialized(true)
        }
    }, [newList])

    const skeletonArrayLeft = []
    const skeletonArrayRight = []
    for (let i = 0; i < 6; i++) {
        skeletonArrayLeft.push(i);
        if (i < 2) {
            skeletonArrayRight.push(i)
        }
    }


    return (
        <LowerHeader ref={refLowerHeader}>
            <Container>
                <Navigation ref={ref} itemScope itemType={'https://schema.org/SiteNavigationElement'}>

                    <LeftNav>

                        <ul>
                            <ErrorBoundary>
                                {
                                    menuLeft
                                        .sort((a, b) => parseInt(a.menu_order) - parseInt(b.menu_order))
                                        .map((menuItem, i) => {
                                            const {menu_order} = menuItem
                                            return (
                                                <MenuItem
                                                    key={menu_order}
                                                    visible={newList && i < newList || i === 0}
                                                    menuItem={menuItem}
                                                    hoverItem={hoverItem}
                                                    setHoverItem={setHoverItem}
                                                    accordionMode={accordionMode}
                                                />
                                            )
                                        })
                                }
                            </ErrorBoundary>

                        </ul>
                    </LeftNav>

                    <ErrorBoundary>
                        <MoreSelect>
                            <More>
                                Еще<SimpleArrow/>
                            </More>
                            <SelectOptions>
                                {
                                    menuLeft
                                        .sort((a, b) => parseInt(a.menu_order) - parseInt(b.menu_order))
                                        .map((menuItem, i) => {
                                            if (newList && i < newList) return null

                                            return (
                                                <Option key={i}>
                                                    <Link passHref
                                                          href={menuItem.slug}><a
                                                        itemProp={'url'}>{menuItem.name}</ a></Link>
                                                </Option>
                                            )
                                        })
                                }
                                {
                                    menuRight
                                        .sort((a, b) => parseInt(a.menu_order) - parseInt(b.menu_order))
                                        .map((menuItem, i) => {

                                            return (
                                                <Option key={i}>
                                                    <Link passHref
                                                          href={menuItem.slug}><a>{menuItem.name}</a></Link>
                                                </Option>
                                            )
                                        })

                                }
                            </SelectOptions>
                        </MoreSelect>
                    </ErrorBoundary>

                    <ErrorBoundary>
                        <MenuRight>
                            <ul>
                                {
                                    menuRight
                                        .sort((a, b) => parseInt(a.menu_order) - parseInt(b.menu_order))
                                        .map((menuItem, i) => {
                                                const {menu_order} = menuItem
                                                return (
                                                    <MenuItem
                                                        key={menu_order}
                                                        visible={newList && i < newList}
                                                        menuItem={menuItem}
                                                        i={i}
                                                        hoverItem={hoverItem}
                                                        setHoverItem={setHoverItem}
                                                    />
                                                )
                                            }
                                        )
                                }
                            </ul>
                        </MenuRight>
                    </ErrorBoundary>


                    {
                        !initialized &&
                        <SkeletonWrapper>
                            <SkeletonMenuLeft>
                                <ul>
                                    {skeletonArrayLeft.map(sk => {
                                        return (
                                            <SkeletonItem key={sk}>
                                                <Skeleton/>
                                            </SkeletonItem>
                                        )
                                    })}
                                </ul>

                            </SkeletonMenuLeft>
                            <SkeletonMenuRight>
                                <ul>
                                    {skeletonArrayRight.map(sk => {
                                        return (
                                            <SkeletonItem key={sk}>
                                                <Skeleton/>
                                            </SkeletonItem>
                                        )
                                    })}
                                </ul>
                            </SkeletonMenuRight>
                        </SkeletonWrapper>
                    }


                </Navigation>
            </Container>
        </LowerHeader>
    )
})

const SkeletonWrapper = styled.div`
  position: absolute;
  top: 0;
  z-index: 2;
  display: inline-flex;
  justify-content: space-between;
  background-color: white;
  margin: 0 auto;
  width: ${BREAKPOINTS_NUMBERS.XL}px;
  @media (${BREAKPOINTS.TILL_XL}) {
    width: ${BREAKPOINTS_NUMBERS.LG}px;
  }
`

const SkeletonItem = styled.li`
  padding: 0 15px;
  flex: 0 0 120px;
`

const SkeletonMenuLeft = styled.div`
  font: ${Fonts.PN_400_14_21};
  padding: 30px 0;
  width: 700px;
  margin-left: -40px;

  & > ul {
    width: 100%;
    margin: 0;
    display: inline-flex;
  }

  & li {
    list-style: none;
  }
`

const SkeletonMenuRight = styled.div`
  font: ${Fonts.PN_400_14_21};
  padding: 30px 0;
  width: 300px;
  margin-right: -20px;

  & > ul {
    width: 100%;
    margin: 0;
    display: inline-flex;
  }

  & li {
    list-style: none;
  }
`

const More = styled.span`
  font: ${Fonts.PN_400_14_21};
  color: ${Colors.TEXT_SECONDARY};
  text-transform: uppercase;
  padding: 30px 15px;
  cursor: pointer;

  & svg {
    margin-left: 8px;
    transition: all 0.1s;
    fill: ${Colors.TEXT_SECONDARY};
  }

  &:hover {
    color: ${Colors.TEXT_PRIMARY};
  }

  &:hover svg {
    transform: rotate(-180deg);
  }
`
const Option = styled.p`
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  margin-bottom: 12px;
  font: ${Fonts.PN_400_14_21};
  width: fit-content;


  &:hover {
    color: ${Colors.BRAND};
  }

  &:last-of-type {
    border-bottom: none;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    margin-bottom: 0;
  }
`
const SelectOptions = styled.div`
  position: absolute;
  top: calc(100% + 1px);
  border: none;
  font: ${Fonts.PN_400_14_14};
  background: #FFFFFF;
  box-shadow: 0 5px 20px rgba(53, 50, 56, 0.14);
  border-radius: ${BORDER_RADIUS.SMALL_3_4};
  padding: 30px;
  display: flex;
  flex-direction: column;
  margin-left: -30px;
  z-index: 1;
  width: fit-content;
  transition: 0.1s;
  transform: translateY(25px);
  opacity: 0;
  pointer-events: none;
  @media (max-width: 920px) {
    left: unset;
    right: 0;
  }
`
const MoreSelect = styled.li`
  list-style: none;

  @media (${BREAKPOINTS.FROM_XL}) {
    display: none;
  }

  &:hover ${SelectOptions} {
    transform: translateY(0px);
    opacity: 1;
    pointer-events: all;
  }

`
const LowerHeader = styled.div`
  position: relative;
`

const LeftNav = styled.div`
  flex-grow: 1;
  //overflow-x: hidden;
  //overflow-y: hidden;

  & > ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow-y: visible;
  }
`
const MenuRight = styled.div`
  overflow: visible;
  @media (${BREAKPOINTS.TILL_XL}) {
    display: none;
  }

  & > ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow-y: visible;
  }

`
const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 -15px;
`


export default BottomAltHeader;
