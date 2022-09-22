import * as React from "react"
import GenerateMenu from "../GenerateMenu";
import {Colors} from "../../../constants/colors";
import styled from "styled-components";
import {Fonts} from "../../../constants/fonts";
import {BREAKPOINTS} from "../../../constants/breakpoints";
import {i18n} from "../../../constants/i18n";
import {BORDER_RADIUS} from "../../../constants/cssConstants";
import withErrorBoundary from "../../_hoc/withErrorBoundary";
import ErrorBoundary from "../../_reusables/ErrorBoundary";
import Block from "../../_reusables/Block/Block";
import Link from "next/link";


const defaultArray: never[] = []

const FooterDesktop = withErrorBoundary(({left = defaultArray, middle = defaultArray, right = defaultArray}) => {
    const telephoneNumber = '8 (800) 770-07-85';
    const telephoneNumberText = 'tel:' + telephoneNumber.replace(/\s|\(|\)|-/g, '');

    return (
        <>
            <FooterBlock>
                <Block>
                    <ErrorBoundary>
                        <Navigation itemScope itemType="https://schema.org/SiteNavigationElement">
                            <div>
                                <MenuHeading>{i18n.ru.desktop.information}</MenuHeading>
                                <GenerateMenu menu={left}/>
                            </div>
                            <div>
                                <MenuHeading>{i18n.ru.desktop.for_customers}</MenuHeading>
                                <GenerateMenu menu={middle}/>
                            </div>
                            <div>
                                <MenuHeading>{i18n.ru.desktop.about_company}</MenuHeading>
                                <GenerateMenu menu={right}/>
                            </div>
                            <div>
                                <ContactPhone>
                                    <a href={telephoneNumberText} >
                                        {telephoneNumber}
                                    </a>
                                </ContactPhone>
                                <WorkingHours>{i18n.ru.desktop.working_hours}</WorkingHours>
                                <FooterLink >
                                    <a href="mailto:info@skdesign.ru">
                                        {i18n.ru.desktop.contact_email}
                                    </a>
                                </FooterLink>
                                <FooterLink >
                                    <a href=" https://t.me/SKDESIGN_chatbot"
                                       target='_blank'>
                                        {i18n.ru.desktop.contactTelegram}
                                    </a>
                                </FooterLink>
                                <FooterLink>
                                    <Link href={'/showrooms'} passHref>
                                        <a itemProp={'url'}>
                                            {i18n.ru.desktop.showrooms}
                                        </a>
                                    </Link>
                                </FooterLink>
                            </div>
                        </Navigation>

                    </ErrorBoundary>
                </Block>
            </FooterBlock>
        </>
    )
})

export const MediaEmployer = styled.a`
  margin-left: 7px;
  display: inline-block;
  height: 40px;
  margin-right: 12px;

  & img {
    border-radius: ${BORDER_RADIUS.SMALL};
  }
`


const WorkingHours = styled.div`
  font: ${Fonts.PN_400_14_21};
  color: ${Colors.TEXT_PRIMARY};
  margin-bottom: 45px;
`
const ContactPhone = styled.div`
  font: ${Fonts.SF_400_18_27};
  color: ${Colors.TEXT_PRIMARY};
  margin-bottom: 30px;
`
const MenuHeading = styled.div`
  font: ${Fonts.SF_600_18_27};
  color: ${Colors.TEXT_PRIMARY};
  margin-bottom: 30px;
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
const Navigation = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 30px;
`

const FooterBlock = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  background: #fafafa;

  @media (${BREAKPOINTS.TILL_MD}) {
    padding-bottom: 40px;
    padding-top: 0;
  }
`


export default FooterDesktop;
