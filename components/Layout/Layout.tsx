import * as React from "react"
import {useMemo} from "react"
import Header from "../Header";
import styled from "styled-components";
//@ts-ignore
import FsLightbox from 'fslightbox-react';
import {useDispatch, useSelector} from "react-redux";
import {AModal} from "../../constants/actions";
import dynamic from "next/dynamic";
import withErrorBoundary from "../_hoc/withErrorBoundary";
import {ModalsSelectors} from "../../redux/selectors";
import ErrorBoundary from "../_reusables/ErrorBoundary";

const Footer = dynamic(() => import('../Footer'))

const Layout = withErrorBoundary(({layoutData, children}) => {
    const dispatch = useDispatch()
    const lightBox = useSelector(ModalsSelectors.selectFsLightBox)
    const headerData = useMemo(() => ({
        top: layoutData.menu_top_header,
        bottom: layoutData.menu_bottom_header,
        right: layoutData.menu_bottom_header_right,
    }), [layoutData])

    return (
        <PageWrapper>

            <HeaderWrapper>
                <Header menu={headerData}/>
            </HeaderWrapper>


            <ContentWrapper>
                <ErrorBoundary>
                    {children}
                </ErrorBoundary>
            </ContentWrapper>

            <FooterWrapper>
                <Footer
                    left={layoutData.menu_footer_information}
                    middle={layoutData.menu_footer_customer}
                    right={layoutData.menu_footer_about}
                />
            </FooterWrapper>
            <ErrorBoundary>
                {lightBox.toggler && <FsLightbox
                    onClose={() => dispatch({
                        type: AModal.TOGGLER_LIGHT_BOX,
                        payload: {toggler: false, sources: lightBox.sources, slide: 1}
                    })}
                    openOnMount
                    toggler={lightBox.toggler}
                    sources={lightBox.sources}
                    slide={lightBox.slide}
                    types={lightBox?.sources.map((item: string) => item.includes('mp4') ? 'video' : 'image')}
                />}
            </ErrorBoundary>
        </PageWrapper>
    );
});


export const ContentWrapper = styled.div`
  flex: 1;
`
export const FooterWrapper = styled.div`
  flex: 0 0;
`
export const HeaderWrapper = styled.div`
  flex: 0 0;
`
export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  min-height: 100vh;

  .fslightbox-open & {
    margin-right: 17px;
  }
`

export default Layout;
