import * as React from "react";
import { SvgLoader, SvgProxy } from 'react-svgmt';


const CustomIcon = ({height = 10, width = 10, color = "#000000", opacity = 1, url = null}) => {

  if(!url) return url;

  return (
    <div>
      <SvgLoader path={url} height={height} width={width}>
        <SvgProxy selector='*' fill={color} opacity={opacity} />
      </SvgLoader>
    </div>
  )
}


export default CustomIcon;
