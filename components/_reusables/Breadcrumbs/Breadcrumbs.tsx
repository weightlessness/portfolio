import * as React from "react"
import useOutsideClicked from "../../_hooks/useOutsideClick";
import useResize from "../../_hooks/useResize";
import {BREAKPOINTS, BREAKPOINTS_NUMBERS} from "../../../constants/breakpoints";
import ReIcon from "../ReIcon";
import {Colors} from "../../../constants/colors";
import {Fonts} from "../../../constants/fonts";
import styled from "styled-components";
import withErrorBoundary from "../../_hoc/withErrorBoundary";
import { useRouter } from "next/router";
import Link from "next/link"

interface Breadcrumb {
  slug: string,
  name: string,
  href: string,
}

const Breadcrumbs = withErrorBoundary(({links}: { links: Breadcrumb[] }): JSX.Element => {

    const router = useRouter()

    const dropdownRef = React.useRef(null)
    const [active, setActive] = React.useState(false)
    const [isMobile] = useResize(BREAKPOINTS_NUMBERS.MD, false)
    useOutsideClicked(dropdownRef, () => {
        setActive(false);
    });
    const mainLinkName = isMobile ? 'SKDESIGN' : 'Главная'
    const localLinks = [...links, {slug: 'index', name: mainLinkName, href: '/'}].reverse()
    const currentLink = localLinks[localLinks.length - 1].name

    return (
        <BreadCrumbsBlock>
            <BreadCrumbsSelectHead ref={dropdownRef} onClick={() => setActive(!active)}>
                {currentLink}
                <DropdownPointer active={active}>
                    <ReIcon type='pointer' size={{x: 10, y: 10}} color={Colors.TEXT_PRIMARY}/>
                </DropdownPointer>
            </BreadCrumbsSelectHead>

            <BreadCrumbsSelectBody active={active} itemScope itemType={'https://schema.org/BreadcrumbList'}>
                {
                    localLinks.map(({slug, name, href}, index) => {
                        const isLast = index === localLinks.length - 1


                        return (
                            <BreadCrumbsItem key={`${slug}-${index}`} itemProp="itemListElement" itemScope
                                             itemType="https://schema.org/ListItem">
                                {
                                    slug === router.query.slug || !href
                                        ? <span itemProp="name">{name}</span>
                                        : <Link passHref href={href}><a itemProp="item"><span
                                            itemProp="name">{name}</span></a></Link>
                                }
                                <meta itemProp="position" content={`${index}`}/>
                                {
                                    !isLast && (
                                        isMobile ?
                                            <span>&nbsp;/&nbsp;</span>
                                            :
                                            <LeadPointer><ReIcon type='pointer' size={{x: 10, y: 10}}
                                                                 color={Colors.TEXT_PRIMARY}/></LeadPointer>
                                    )

                                }
                            </BreadCrumbsItem>
                        )
                    })
                }
            </BreadCrumbsSelectBody>
        </BreadCrumbsBlock>
    )
})


const LeadPointer = styled.span`
  display: inline-block;
  margin: 0 12px;
`
const DropdownPointer = styled.span<{ active: boolean; }>`
  display: inline-block;
  margin-left: 15px;
  transition: .1s;
  transform: rotateZ(${p => p.active ? '-90deg' : '90deg'});
`
const BreadCrumbsItem = styled.li<{ currentUrl?: boolean }>`
  display: inline-block;
  position: relative;
  pointer-events: ${p => p.currentUrl ? 'none' : 'auto'};

  > a:hover {
    color: ${Colors.BRAND};
  }

  > a {
    color: ${Colors.TEXT_PRIMARY};
    font: ${Fonts.PN_400_14_21};
  }

  > span {
    color: ${Colors.TEXT_PRIMARY};
    font: ${Fonts.PN_400_14_21};
    cursor: default;
  }

  @media(${BREAKPOINTS.TILL_MD}){
    & span, div, a{
      color: ${Colors.TEXT_SECONDARY};
      font: ${Fonts.PN_400_12_18};
    }
  }
`
const BreadCrumbsBlock = styled.div`
  display: flex;
  position: relative;
`
const BreadCrumbsSelectHead = styled.div`
  display: none;
`

const BreadCrumbsSelectBody = styled.ul<{ active: boolean; }>`
  padding: 0;
  margin: 0;
`


export default Breadcrumbs;
