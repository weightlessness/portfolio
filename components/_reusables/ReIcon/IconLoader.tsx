import * as React from "react";
import BaseIcon from "./BaseIcon";


const Loader = ({size = {x: 10, y: 10}, color = "#000000", opacity = 1}) => {
  return (
    <BaseIcon className='icon icon-loader' viewBox={`0 0 41 40`} width={size.x} height={size.y} fill={color}>
      <path fillOpacity={opacity} d="M38.9924 18.4924C38.1598 18.4924 37.4849 19.1673 37.4849 20C37.4849 29.3659 29.8659 36.9849 20.5 36.9849C11.1347 36.9849 3.51508 29.3659 3.51508 20C3.51508 10.6347 11.1347 3.01508 20.5 3.01508C21.3327 3.01508 22.0076 2.34023 22.0076 1.50758C22.0076 0.674844 21.3327 0 20.5 0C9.47187 0 0.5 8.97187 0.5 20C0.5 31.0277 9.47187 40 20.5 40C31.5277 40 40.5 31.0277 40.5 20C40.5 19.1673 39.8252 18.4924 38.9924 18.4924Z" />
    </BaseIcon>
  )
}


export default Loader;
