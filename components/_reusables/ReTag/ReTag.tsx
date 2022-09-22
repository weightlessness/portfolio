import * as React from "react"
import styled, {css} from "styled-components";
import {Colors} from "../../../constants/colors";
import {Fonts} from "../../../constants/fonts";
import {BORDER_RADIUS} from "../../../constants/cssConstants";

type ITag = {
  children: React.ReactNode,
  type?: 'brand' | 'new' | 'popular' | 'shadow' | 'white',
  size?: 'small' | 'medium' | 'large',
  width?: 'narrow' | 'wide';
  radius?: 'small' | 'medium' | 'large'
}


const ReTag = ({children, type = 'brand', size = 'small', width = "wide", radius = 'small' }: ITag): JSX.Element => {
  return (
    <Tag type={type} size={size} width={width} radius={radius}  >
      {children}
    </Tag>
  )
}

const TagLarge = css`
  font: ${Fonts.SF_700_24_24};
  padding: 8px 12px;
  text-transform: uppercase;
  border-radius: 30px;
`

const TagMedium = css`
  font: ${Fonts.PN_400_14_14};
  padding: 8px 12px;
  text-transform: uppercase;
  border-radius: 30px;
`
const TagSmall = css`
  font: ${Fonts.SF_600_12_12};
  padding: 4.5px;
  border-radius: ${BORDER_RADIUS.SMALL};
`

const RadiusSmall = css`
  border-radius: ${BORDER_RADIUS.SMALL};
`

const RadiusMedium = css`
  border-radius: ${BORDER_RADIUS.MEDIUM};
`

const RadiusLarge = css`
  border-radius: ${BORDER_RADIUS.LARGE};
`

const TagShadow = css`
  color: #fff;
  background: rgba(53, 50, 56, 0.5);
`
const TagPopular = css`
  color: #fff;
  background: ${Colors.TAG_POPULAR};
`
const TagBrand = css`
  color: #fff;
  background: ${Colors.BRAND};
`;

const TagWhite = css`
  color: ${Colors.TEXT_PRIMARY};
  background: #fff;
`;

const TagNew = css`
  color: ${Colors.TEXT_PRIMARY};
  background: ${Colors.TAG_NEW};
`

const TagWide = css`
  padding-left: 8px;
  padding-right: 8px;
`;

const TagNarrow = css`
  padding-left: 4.5px;
  padding-right: 4.5px;
`;

const Tag = styled.div<{ type: string; size: string; width: string, radius: string }>`
  display: inline-block;

  ${p => p.size === 'small' && TagSmall};
  ${p => p.size === 'medium' && TagMedium};
  ${p => p.size === 'large' && TagLarge};
  
  ${p => p.type === 'brand' && TagBrand};
  ${p => p.type === 'new' && TagNew};
  ${p => p.type === 'popular' && TagPopular};
  ${p => p.type === 'shadow' && TagShadow};
  ${p => p.type === 'white' && TagWhite};

  ${p => p.width === 'wide' && TagWide};
  ${p => p.width === 'narrow' && TagNarrow};
  
  ${p => p.radius === 'large' && RadiusLarge};
  ${p => p.radius === 'medium' && RadiusMedium};
  ${p => p.radius === 'small' && RadiusSmall};
`


export default ReTag;
