import * as React from "react"
import {useMemo} from "react"
import styled, {css} from "styled-components";
import {Colors} from "../../../constants/colors";
import {i18n} from "../../../constants/i18n";
import {Fonts} from "../../../constants/fonts";
import GenerateMenu from "../GenerateMenu";
import ReIcon from "../../_reusables/ReIcon/ReIcon";
import Link from "next/link";
import {BORDER_RADIUS} from "../../../constants/cssConstants";
import withErrorBoundary from "../../_hoc/withErrorBoundary";
import Block from "../../_reusables/Block/Block";


const defaultArray : never[] = []

const FooterMobile = withErrorBoundary(({left = defaultArray, middle = defaultArray, right = defaultArray}) => {
    const telephoneNumber = '8 (800) 770-07-85';
    const telephoneNumberText = 'tel:' + telephoneNumber.replace(/\s|\(|\)|-/g, '');

    const normalizedMenu = useMemo(() => [
        {
            key: 1,
            title: i18n.ru.mobile.information,
            menu: left
        },
        {
            key: 2,
            title: i18n.ru.mobile.for_customers,
            menu: middle
        },
        {
            key: 3,
            title: i18n.ru.mobile.about_company,
            menu: right
        },
    ], [left, middle, right])


    const [openedIndex, setOpenedIndex] = React.useState(normalizedMenu[0].key)

    return (
        <Footer>
            <FooterBlock itemScope itemType="https://schema.org/SiteNavigationElement">
                {
                    normalizedMenu.map(({title, menu, key}) => {
                        return (
                            <FooterDropdown
                                key={key}
                                title={title}
                                menu={menu}
                                open={openedIndex === key}
                                onClick={() => {
                                    setOpenedIndex(openedIndex === key ? null : key)
                                }}
                            />
                        )
                    })
                }

                <Block>
                    <Contacts>
                        <ContactPhone >
                          <a href={telephoneNumberText} >
                              {telephoneNumber}
                          </a>
                        </ContactPhone>
                        
                        <WorkingHours>{i18n.ru.mobile.working_hours}</WorkingHours>
                        <FooterLink >
                            <a href="mailto:info@skdesign.ru">
                                {i18n.ru.mobile.contact_email}
                            </a>
                        </FooterLink>
                        <FooterLink >
                            <a href="https://t.me/SKDESIGN_chatbot"
                               target='_blank'>
                                {i18n.ru.mobile.contactTelegram}
                            </a>
                        </FooterLink>
                        <FooterLink >
                            <a href="https://wa.me/79319510716"
                               target='_blank'>
                                {i18n.ru.mobile.contactWhatsApp}
                            </a>
                        </FooterLink>

                        <FooterLink>
                            <Link href={'/showrooms'} passHref>
                                <a>
                                    {i18n.ru.mobile.showrooms}
                                </a>
                            </Link>
                        </FooterLink>
                    </Contacts>
                </Block>
            </FooterBlock>
        </Footer>
    )
})

const FooterDropdown = withErrorBoundary(({title, menu, open = false, onClick = null}) => {

    const ref = React.useRef(null);

    return (
        <Dropdown>
            <Block>
                <DropdownHeading
                    onClick={() => {
                        if (onClick !== null && typeof onClick === "function") onClick()
                    }}
                >
                    {title}
                    <Icon active={open}>
                        <ReIcon type="pointer" size={{x: 10, y: 10}} color={Colors.TEXT_PRIMARY}/>
                    </Icon>
                </DropdownHeading>
                <DropdownMenu height={open ? ref?.current?.offsetHeight : 0}>
                    <DropdownBody ref={ref}>
                        <GenerateMenu menu={menu}/>
                    </DropdownBody>
                </DropdownMenu>
            </Block>
        </Dropdown>
    )
})


const Copyright = styled.div`
  margin-top: 40px;
  font: ${Fonts.PN_400_14_21};
  color: ${Colors.TEXT_PRIMARY};
`
const MediaButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  max-width: 40px;
  max-height: 40px;
  background: rgba(53, 50, 56, 0.14);
  border-radius: ${BORDER_RADIUS.SMALL};
  cursor: pointer;

  :hover {
    background: ${Colors.BRAND};
  }

  & + & {
    margin-left: 7px;
  }

  :hover > svg {
    fill: #fff;
  }
`
const Media = styled.div`
  margin-top: 40px;
  display: flex;
`
const WorkingHours = styled.div`
  font: ${Fonts.PN_400_14_21};
  color: ${Colors.TEXT_PRIMARY};
  margin-top: 24px;
  margin-bottom: 24px;
`
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
`
const IconActive = css`
  transform: rotateZ(-90deg);
`
const Icon = styled.div<{ active: boolean; }>`
  transform: rotateZ(90deg);
  transition: .1s;

  ${p => p.active && IconActive}
`
const Contacts = styled.div`
  padding-top: 40px;
`
const ContactPhone = styled.div`
  font: ${Fonts.SF_400_18_27};
  color: ${Colors.TEXT_PRIMARY};
`
const Dropdown = styled.div`
  border-bottom: 1px solid ${Colors.BORDER_PRIMARY};
`
const DropdownMenu = styled.div<{ height: number; }>`
  height: ${p => p.height}px;
  transition: .1s;
  overflow: hidden;
`
const DropdownBody = styled.div`
  padding-bottom: 24px;
`
const DropdownHeading = styled.div`
  display: flex;
  justify-content: space-between;
  font: ${Fonts.SF_600_18_27};
  color: ${Colors.TEXT_PRIMARY};
  padding-top: 24px;
  padding-bottom: 24px;
  cursor: pointer;
`
const NotAnOffer = styled.div`
  font: ${Fonts.PN_400_10_15};
  color: ${Colors.TEXT_SECONDARY};
`
const SubFooterBlock = styled.div`
  background: rgba(53, 50, 56, 0.04);
  padding: 12px 0;
`
const FooterBlock = styled.nav`
  padding-bottom: 40px;
`
const Footer = styled.div`
  background: ${Colors.BACKGROUND_ACTIVE};
`


export default FooterMobile;
