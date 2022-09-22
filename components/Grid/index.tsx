import * as React from "react"
import {
    Container as ReactContainer,
    Row as ReactRow,
    Col as ReactCol
} from "react-grid"

export const styles = {
    breakpoints: { xs: 0, sm: 570, md: 798, lg: 1054, xl: 1470 }, // 15 + 15 - Content margins
    containerMaxWidths: { sm: 570, md: 798, lg: 1054, xl: 1470 }, // 15 + 15 - Col paddings
    columns: 12,
    gutterWidth: 30
}

export const Container = (props: any) => <ReactContainer {...props} styles={styles} />
export const Row = (props: any) => <ReactRow {...props} styles={styles} />
export const Col = (props: any) => <ReactCol {...props} styles={styles} />