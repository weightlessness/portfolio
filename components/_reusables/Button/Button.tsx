import React from 'react';
import styled, {css} from "styled-components";
import {Fonts} from "../../../constants/fonts";
import {Colors} from "../../../constants/colors";
import Link from 'next/link';


type Size = 'large' | 'medium' | 'small' | 'xsmall';
type Width = 'full' | 'contain';
type Theme = 'light' | 'brand' | 'green'
type Href = string | null
type BorderRadius = [number, number, number, number] | [number, number, number] | [number, number] | [number] // tuples


export interface ReButtonProps {
    children?: React.ReactNode;
    size?: Size;
    width?: Width;
    theme?: Theme;
    onClick?: () => void;
    href?: Href;
    borderRadius?: BorderRadius;
    disabled?: boolean;
    enableShadow?: boolean;
}

let _breakpoints = {
    TILL_LG: 'max-width: 1440px',
    TILL_MD: 'max-width: 1024px',
    TILL_SM: 'max-width: 768px',
    TILL_XS: 'max-width: 375px',
    FROM_LG: 'min-width: 1441px',
    FROM_MD: 'min-width: 1025px',
    FROM_SM: 'min-width: 769px',
    FROM_XS: 'min-width: 376px',
}


const Button = (props: ReButtonProps) => {

    const {
        children = null,
        size = 'large',
        width = 'contain',
        theme = 'brand',
        onClick = null,
        href = null,
        borderRadius = [4],
        disabled = false,
        enableShadow = false
    } = props

    return (
        <Carcass
            size={size}
            width={width}
            theme={disabled ? 'disabled' : theme}
            borderRadius={borderRadius}
            enableShadow={enableShadow}
            onClick={() => {
                !disabled && onClick && onClick()
            }}
        >
            {href ? <Link passHref href={href}><a>{children}</a></Link> : children}
        </Carcass>
    )
}


const SizeExtraSmall = css`
  padding: 7px 8px;
`
const SizeSmall = css`
  padding: 6px 13px;
`
const SizeMedium = css`
  padding: 11px 18px;
`
const SizeLarge = css`
  padding: 16px 23px;
`
const WidthFull = css`
  width: 100%;
`
const WidthAuto = css`
  width: fit-content;
`
const ThemeDisabled = css`
  border-color: ${Colors.BORDER_PRIMARY};
  background: ${Colors.BORDER_PRIMARY};
  color: ${Colors.TEXT_SECONDARY};
  cursor: default;
  pointer-events: none;

  &:active {
    border-color: ${Colors.BORDER_PRIMARY};
    background: ${Colors.BORDER_PRIMARY};
    color: ${Colors.TEXT_SECONDARY};
  }

  @media (${_breakpoints.FROM_MD}) {
    &:hover {
      border-color: ${Colors.BORDER_PRIMARY};
      background: ${Colors.BORDER_PRIMARY};
      color: ${Colors.TEXT_SECONDARY};
    }

    &:active {
      border-color: ${Colors.BORDER_PRIMARY};
      background: ${Colors.BORDER_PRIMARY};
      color: ${Colors.TEXT_SECONDARY};
    }
  }
`
const ThemeLight = css`
  border-color: ${Colors.BORDER_PRIMARY};
  background: ${Colors.BACKGROUND_LIGHT};
  color: ${Colors.TEXT_PRIMARY};

  &:active {
    border-color: ${Colors.BRAND_DARKEST};
    background: ${Colors.BRAND_DARKEST};
    color: ${Colors.TEXT_LIGHT};
  }

  @media (${_breakpoints.FROM_MD}) {
    &:hover {
      border-color: ${Colors.BRAND_DARK};
      background: ${Colors.BRAND_DARK};
      color: ${Colors.TEXT_LIGHT};
    }

    &:active {
      border-color: ${Colors.BRAND_DARKEST};
      background: ${Colors.BRAND_DARKEST};
      color: ${Colors.TEXT_LIGHT};
    }
  }
`
const ThemeGreen = css`
  border-color: ${Colors.BACKGROUND_GREEN};
  background: ${Colors.BACKGROUND_GREEN};
  color: ${Colors.TEXT_LIGHT};
`
const ThemeBrand = css`
  border-color: ${Colors.BRAND};
  background: ${Colors.BRAND};
  color: ${Colors.TEXT_LIGHT};

  &:active {
    border-color: ${Colors.BRAND_DARKEST};
    background: ${Colors.BRAND_DARKEST};
    color: ${Colors.TEXT_LIGHT};
  }

  @media (${_breakpoints.FROM_MD}) {
    &:hover {
      border-color: ${Colors.BRAND_DARK};
      background: ${Colors.BRAND_DARK};
      color: ${Colors.TEXT_LIGHT};
    }

    &:active {
      border-color: ${Colors.BRAND_DARKEST};
      background: ${Colors.BRAND_DARKEST};
      color: ${Colors.TEXT_LIGHT};
    }
  }
`
const Shadow = css`
  box-shadow: 0 5px 20px rgba(53, 50, 56, 0.14);
`
const Carcass = styled.div<ReButtonProps>`
  font: ${p => p.size === 'xsmall' ? Fonts.PN_600_12_12 : Fonts.PN_600_14_14};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: nowrap;
  user-select: none;
  background: ${Colors.BACKGROUND_LIGHT};
  border: 2px solid ${Colors.BACKGROUND_LIGHT};
  border-radius: ${props => props.borderRadius.reduce((acc, rad) => `${acc} ${rad}px`, '').trim()};
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  ${props => props.size === 'small' ? SizeSmall : props.size === 'medium' ? SizeMedium : props.size === 'xsmall' ? SizeExtraSmall : SizeLarge}
  ${props => props.width === 'full' ? WidthFull : WidthAuto}
  ${props => {
    switch (props.theme) {
      case 'light':
        return ThemeLight
      case 'brand':
        return ThemeBrand
      case 'green':
        return ThemeGreen
      case 'disabled':
        return ThemeDisabled
      default:
        return ThemeBrand
    }
  }}
  ${props => props.enableShadow && Shadow}
`


export default Button;
