import * as React from "react"

const Heading = ({children}: {children: React.ReactNode}) => {
  return (
    <h1>
      {children}
    </h1>
  )
}

export default Heading