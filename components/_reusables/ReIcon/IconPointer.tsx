import * as React from "react";
import BaseIcon from "./BaseIcon";


const Pointer = ({size = {x: 10, y: 10}, color = "#000000"}) => {
  return (
    <BaseIcon className='icon icon-pointer' viewBox='0 0 16 16' width={size.x} height={size.y} fill={color}>
      <path d="M12.1382 7.56093L4.73771 0.180933C4.49525 -0.0607218 4.10269 -0.0603156 3.86062 0.182183C3.61875 0.424651 3.61938 0.81743 3.86187 1.05927L10.8218 8.00002L3.86162 14.9407C3.61916 15.1826 3.61853 15.5751 3.86037 15.8176C3.98172 15.9392 4.14069 16 4.29965 16C4.45822 16 4.61656 15.9396 4.73768 15.8189L12.1382 8.43908C12.255 8.32289 12.3205 8.16477 12.3205 8.00002C12.3205 7.83527 12.2548 7.67733 12.1382 7.56093Z"/>
    </BaseIcon>
  )
}


export default Pointer;