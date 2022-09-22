import {createMedia} from "@artsy/fresnel"
import {BREAKPOINTS_NUMBERS} from "../constants/breakpoints";

const ExampleAppMedia = createMedia({
  breakpoints: {
    xs: 0,
    sm: BREAKPOINTS_NUMBERS.SM,
    md: BREAKPOINTS_NUMBERS.MD,
    lg: BREAKPOINTS_NUMBERS.LG,
    xl: BREAKPOINTS_NUMBERS.XL
  },
})

export const mediaStyles = ExampleAppMedia.createMediaStyle()

export const { Media, MediaContextProvider } = ExampleAppMedia
