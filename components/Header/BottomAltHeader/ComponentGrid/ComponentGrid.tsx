import * as React from "react"
import {Row} from "../../../Grid";

const ComponentGrid = ({children}: {children: React.ReactNode}) => {
  return (
    <Row>
      {children}
    </Row>
  )
}

export default ComponentGrid