import * as React from "react"
import IconPointer from "./IconPointer"
import IconCross from "./IconCross"
import IconMagnifier from "./IconMagnifier"
import IconHeart from "./IconHeart"
import IconDesigners from "./IconDesigners"
import IconSuccess from "./IconSuccess"
import IconLoader from "./IconLoader"
import CustomIcon from "./CustomIcon"
import { IconTelegram } from "./IconTelegram"

export type ReIconType =
  | "success"
  | "loader"
  | "designers"
  | "pointer"
  | "cross"
  | "heart"
  | "magnifier"
  | "proxy"
  | "telegram"

type ReIconProps = {
  type: ReIconType
  color?: string
  size?: {
    x: number
    y: number
  }
  opacity?: number
  url?: string
}

const ReIcon = ({
  type,
  color = "transparent",
  size = { x: 20, y: 20 },
  opacity = 1,
  url = null,
}: ReIconProps) => {
  if (!type) return null

  switch (type) {
    case "pointer":
      return <IconPointer color={color} size={size} />
    case "cross":
      return <IconCross color={color} size={size} />
    case "magnifier":
      return <IconMagnifier color={color} size={size} />
    case "heart":
      return <IconHeart color={color} size={size} />
    case "designers":
      return <IconDesigners color={color} size={size} opacity={opacity} />
    case "success":
      return <IconSuccess color={color} size={size} opacity={opacity} />
    case "loader":
      return <IconLoader color={color} size={size} opacity={opacity} />
    case "telegram":
      return <IconTelegram color={color} size={size} opacity={opacity} />

    /* Custom component for SVG loaded over network */
    case "proxy":
      return (
        <CustomIcon
          color={color}
          height={size.x}
          width={size.y}
          opacity={opacity}
          url={url}
        />
      )

    default:
      return null
  }
}

export default ReIcon
