import * as React from "react"
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";
import {Media} from "../../lib/media";
import withErrorBoundary from "../_hoc/withErrorBoundary";


const defaultArray: never[] = []

const Footer = withErrorBoundary ((props) => {


    const {
        left = defaultArray,
        middle = defaultArray,
        right = defaultArray
    } = props;

    return (
        <>
            <Media lessThan={'lg'}>
                <FooterMobile
                    left={left}
                    middle={middle}
                    right={right}
                />
            </Media>
            <Media greaterThan={'md'}>
                <FooterDesktop
                    left={left}
                    middle={middle}
                    right={right}
                />
            </Media>


        </>
    )
})

export default Footer;
