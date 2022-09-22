import * as React from "react";
import styled from "styled-components";
import Icon from "./Icon";
import withErrorBoundary from "../_hoc/withErrorBoundary";


export let SimpleArrow = withErrorBoundary (({width}: {width?: number}) => {
  return (
    <Svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" width = {width}>
      <g clipPath="url(#clip0)">
        <path d="M5.82823 7.18653L9.88518 3.13801C10.0379 2.98559 10.0381 2.73827 9.88575 2.58559C9.73337 2.43288 9.48604 2.43262 9.33333 2.58501L5.27608 6.63381C5.12378 6.78612 4.87596 6.78612 4.72337 6.63352L0.666413 2.58501C0.513699 2.43262 0.266374 2.43288 0.113991 2.58559C0.0378971 2.66182 -0.0001297 2.76168 -0.0001297 2.86151C-0.0001297 2.96161 0.0381117 3.0617 0.114577 3.13801L4.17124 7.18624C4.62815 7.64315 5.37161 7.64315 5.82823 7.18653Z" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="10" height="10" fill="white" transform="translate(10) rotate(90)"/>
        </clipPath>
      </defs>
    </Svg>
  )
})

const Svg = styled(Icon)<{width?: number}>`
  width: ${p => p.width?`${p.width}px`:'10px'};
  height: ${p => p.width?`${p.width}px`:'10px'};
`