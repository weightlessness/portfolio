import React from "react"
import { Container } from "../../Grid"
import styled from "styled-components"
import { Colors } from "../../../constants/colors"
import { Fonts } from "../../../constants/fonts"
import { SimpleArrow } from "../../_icons/SimpleArrow"
import { BREAKPOINTS } from "../../../constants/breakpoints"
import { BORDER_RADIUS } from "../../../constants/cssConstants"
import withErrorBoundary from "../../_hoc/withErrorBoundary"
import ReIcon from "../../_reusables/ReIcon"
import Link from "next/link"
import { MenuItemType } from "../BottomAltHeader/MenuItem/MenuItem"

const TopHeader = withErrorBoundary(({ menu } : {menu: MenuItemType[]}) => {

  const telephoneNumber = "8 (800) 770-07-85"
  const telephoneNumberText =
    "tel:" + telephoneNumber.replace(/\s|\(|\)|-/g, "")

  return (
    <HeaderBlock fluid>
      <Container>
        <TopRow>
          <LeftBlock>
            <ul itemScope itemType={"https://schema.org/SiteNavigationElement"}>
              {menu.slice(0, 4).map((menuItem, i) => {
                return (
                  <MenuItem key={i}>
                    <Link passHref href={menuItem.slug}>
                      <a itemProp={"url"}>{menuItem.name}</a>
                    </Link>
                  </MenuItem>
                )
              })}

              {menu.length > 4 && (
                <MoreSelect>
                  <More>
                    Еще
                    <SimpleArrow />
                  </More>

                  <SelectOptions>
                    {menu.slice(4).map((menuItem, i) => {
                      return (
                        <Option key={i}>
                          <Link passHref href={menuItem.slug}>
                            <a itemProp='url'>{menuItem.name}</a>
                          </Link>
                        </Option>
                      )
                    })}
                  </SelectOptions>
                </MoreSelect>
              )}
            </ul>
          </LeftBlock>
          <RightBLock>
            <RightBLockItem>
              <span>Заказать обратный звонок</span>
            </RightBLockItem>
            <RightBLockItem>
              <a href=' https://t.me/SKDESIGN_chatbot' target='_blank'>
                <ReIcon
                  type={"telegram"}
                  color={Colors.BRAND}
                  size={{ x: 18, y: 18 }}
                />
              </a>
            </RightBLockItem>
            <RightBLockItem>
              <a href={telephoneNumberText}>{telephoneNumber}</a>
            </RightBLockItem>
          </RightBLock>
        </TopRow>
      </Container>
    </HeaderBlock>
  )
})

const RightBLock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const RightBLockItem = styled.div`
  font: ${Fonts.PN_400_12_18};
  position: relative;
  padding-left: 23px;
  margin-left: 20px;
  text-transform: uppercase;
  display: flex;
  align-items: center;

  & span:hover {
    cursor: pointer;
    color: ${Colors.BRAND};
  }

  & a {
    font-weight: 600;
    display: flex;
    align-items: center;
  }

  &:before {
    content: "";
    width: 3px;
    height: 3px;
    background-color: ${Colors.BORDER_PRIMARY};
    border-radius: ${BORDER_RADIUS.CIRCLE};
    position: absolute;
    left: 0;
    top: calc(50% - 1.5px);
  }
`

const Option = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  user-select: none;
  white-space: nowrap;
  margin-bottom: 12px;
  font: ${Fonts.PN_400_14_21};

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
  top: calc(100% + 12px);
  left: -20px;
  z-index: 11;
  border: none;
  font: ${Fonts.PN_400_14_14};
  min-width: 100%;
  background: #ffffff;
  box-shadow: 0 5px 20px rgba(53, 50, 56, 0.14);
  border-radius: ${BORDER_RADIUS.SMALL_1_2};
  padding: 20px;

  transition: 0.1s;
  visibility: hidden;
  transform: translateY(25px);
  opacity: 0;
  pointer-events: none;

  @media (${BREAKPOINTS.TILL_MD}) {
    left: unset;
    right: 0;
  }

  &:after {
    content: "";
    width: 100%;
    height: 12px;
    background-color: ${Colors.BACKGROUND_ACTIVE};
    position: absolute;
    top: -12px;
    right: 0;
  }
`

const MoreSelect = styled.div`
  position: relative;

  &:hover ${SelectOptions} {
    visibility: visible;
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }

  &:after {
    content: "";
    height: 12px;
    top: 100%;
    width: 100%;
    position: absolute;
  }

  &::before {
    content: "";
    width: 3px;
    height: 3px;
    background-color: ${Colors.BORDER_PRIMARY};
    border-radius: ${BORDER_RADIUS.CIRCLE};
    position: absolute;
    left: -23px;
    top: calc(50% - 1.5px);
  }
`

const MenuItem = styled.li`
  color: ${Colors.TEXT_SECONDARY};
  font: ${Fonts.PN_400_12_18};
  margin-right: 43px;
  position: relative;
  text-transform: uppercase;

  &:not(:last-of-type)::after {
    content: "";
    width: 3px;
    height: 3px;
    background-color: ${Colors.BORDER_PRIMARY};
    border-radius: ${BORDER_RADIUS.CIRCLE};
    position: absolute;
    right: -23px;
    top: calc(50% - 1.5px);
  }
`

const More = styled(MenuItem)`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:after {
    display: none;
  }

  & svg {
    margin-left: 8px;
    width: 6px;
    height: 6px;
    transition: all 0.1s;
  }

  @media (${BREAKPOINTS.FROM_MD}) {
    &:hover {
      color: ${Colors.TEXT_PRIMARY};
    }

    &:hover svg {
      transform: rotate(-180deg);
    }
  }
`

const TopRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

const LeftBlock = styled.nav`
  & > ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    list-style-type: none;
  }
`

export const HeaderBlock = styled(Container)`
  padding-top: 12px;
  padding-bottom: 12px;
  background: ${Colors.BACKGROUND_ACTIVE};

  @media (${BREAKPOINTS.FROM_LG}) {
    & a:hover {
      color: ${Colors.BRAND};
    }
  }
`

export default TopHeader
