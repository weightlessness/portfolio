import * as React from "react"
import InputText from "./InputText"
import InputPhone from "./InputPhone"
import InputSelect from "./InputSelect"

export type FieldType = {
  name: string
  required: boolean
  type:
    | "select"
    | "text"
    | "phone"
  validation: any
  value?: string
  width?: string
  mask?: string
  placeholder?: string
  label?: string
  options?: string[]
  defaultOption?: string
  description?: string
  locale?: string
}

export type InputProps = {
  settings: FieldType
  onChange: ((value: string) => FieldType) | ((value: string) => void)
}

const Input = ({
  settings,
  onChange,
}: InputProps) => {
  switch (settings.type) {
    case "text": {
      return <InputText settings={settings} onChange={onChange} />
    }
    case "phone": {
      return <InputPhone settings={settings} onChange={onChange} />
    }
    case "select": {
      return <InputSelect settings={settings} onChange={onChange} />
    }
    default: {
      return null
    }
  }
}

export default Input
