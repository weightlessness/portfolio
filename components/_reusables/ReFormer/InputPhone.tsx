import * as React from "react"
import styled from "styled-components";
import {Colors} from "../../../constants/colors";
import {Fonts} from "../../../constants/fonts";
import InputMask from "react-input-mask";
import {BORDER_RADIUS} from "../../../constants/cssConstants";
import { InputProps } from "./Input";


const InputPhone = ({settings, onChange}: InputProps) => {

  const [value, setValue] = React.useState('')
  const [touched, setTouched] = React.useState(false)
  const [focused, setFocused] = React.useState(false)
  const [error, setError] = React.useState('')

  React.useEffect(() => {
    const {
      required = false,
      validation: {
        validate = (value: string) => !!value.length,
        message = "Обязательное поле"
      } = {validate: (value: string) => true, message: ''}
    } = settings

    if(touched){
      if(required){
        if(!value) {
          setError("Обязательное поле")
        } else {
          if(validate(value)) setError('')
          else setError(message)
        }
      } else {
        if(value){
          if(validate(value)) setError('')
          else setError(message)
        }
      }
    }
  }, [value, touched])

  React.useEffect(() => {
    onChange(value)
  }, [value])

  return (
    <div>
      <HTMLInput
        mask={settings.mask}
        placeholder={settings.placeholder}
        type={settings.type}
        name={settings.name}
        focused={focused ? focused.toString() : ''}
        error={error ? error.toString() : ''}
        onChange={(e: React.SyntheticEvent) => {
          setValue((e.target as HTMLInputElement).value)
          if(!touched) setTouched(true)
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />

      <HTMLLabel
        htmlFor={settings.name}
        focused={focused ? focused.toString() : ''}
        error={error ? error.toString() : ''}
      >
        {settings.label}{ settings.required && ' *'}
      </HTMLLabel>

      {!focused && error && <Error>{error}</Error>}
      {settings.description && <Description>{settings.description}</Description>}
    </div>
  )
}


const Description = styled.div`
  font: ${Fonts.PN_400_12_18};
  color: ${Colors.TEXT_SECONDARY};
  margin-top: 8px;
`
const Error = styled.div`
  font: ${Fonts.PN_400_12_18};
  color: ${Colors.TEXT_ERROR};
  margin-top: 8px;
  padding: 0 15px;
`
const HTMLInput = styled(InputMask)<{focused:string; error: string}>`
  display: block;
  padding: 14px 13px;
  border: 2px solid ${p =>p.focused ? Colors.BRAND : p.error ? Colors.TEXT_ERROR : Colors.BORDER_PRIMARY};
  border-radius: ${BORDER_RADIUS.SMALL};
  outline: 0;
  width: 100%;
  font: ${Fonts.PN_400_14_14};
  color: ${Colors.TEXT_PRIMARY};
  letter-spacing: 0.25px;
  
  &::placeholder {
    color: ${Colors.BORDER_DASHED};
  }
`
const HTMLLabel = styled.label<{focused:string; error: string;}>`
  position: absolute;
  top: -6px;
  left: 10px;
  display: inline-block;
  font: ${Fonts.SF_400_12_12};
  color: ${p => p.focused ? Colors.BRAND : p.error ? Colors.TEXT_ERROR : Colors.TEXT_SECONDARY};
  letter-spacing: 0.25px;
  padding: 0 5px;
  background: #fff;
  user-select: none;
  white-space: nowrap;
`


export default InputPhone
