import styled, {keyframes} from "styled-components";
import ReIcon from "../ReIcon";
import * as React from "react";
import {Colors} from "../../../constants/colors";
import {memo} from "react";
import {BREAKPOINTS} from "../../../constants/breakpoints";

type LoaderPropsType = {
    size?: number,
    withoutWrapper?: boolean
}

const Loader = memo(({size = 30, withoutWrapper}: LoaderPropsType) => {

    return withoutWrapper ?
            <LoaderIcon size={size}>
                <ReIcon type='loader' size={{x: size, y: size}}
                        color={Colors.BRAND}/>
            </LoaderIcon>
        :
        <LoaderWrapper>
            <LoaderIcon size={size}>
                <ReIcon type='loader' size={{x: size, y: size}}
                        color={Colors.BRAND}/>
            </LoaderIcon>
        </LoaderWrapper>

})


const LoaderIconRotate = keyframes`
  from {
    transform: scale(3, 3) rotate(0deg);
  }
  to {
    transform: scale(3, 3) rotate(360deg);
  }
`

export const LoaderIcon = styled.div<{size: number}>`
  display: flex;
  width: ${p => `${p.size}px`};
  height: ${p => `${p.size}px`};
  animation: ${LoaderIconRotate} 1s linear infinite;
`

const LoaderWrapper = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: center;
  width: 100%;
  @media(${BREAKPOINTS.TILL_MD}){
    padding: 60px 0;
  }
`


export default Loader