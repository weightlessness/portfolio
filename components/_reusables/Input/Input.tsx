import styled from "styled-components";
import {Fonts} from "../../../constants/fonts";
import {Colors} from "../../../constants/colors";
import {BORDER_RADIUS} from "../../../constants/cssConstants";
import * as React from "react";
import {ChangeEvent, FocusEvent, InputHTMLAttributes, useEffect, useState} from "react";

type InputPropsType = {
    label?: string
    invalidErrorText?: string
    validate?: (value: string) => boolean
    description?: string
    onValueChange?: (value: string) => void
    error?: boolean
} & InputHTMLAttributes<HTMLInputElement>

type ErrorType = string | null

export const Input = ({
                          label,
                          invalidErrorText,
                          validate,
                          onValueChange,
                          description,
                          required,
                          onBlur,
                          onFocus,
                          onChange,
                          ...props
                      }: InputPropsType) => {
    const [focused, setFocused] = useState(false)
    const [error, setError] = useState<ErrorType>(null)

    useEffect(() => {
        if(props.error){
            setError(invalidErrorText)
        }else{
            setError(null)
        }
    },[invalidErrorText, props.error])


    const onInputBlur = (e: FocusEvent<HTMLInputElement>) => {
        setFocused(false)
        const newValue = e.currentTarget.value.trim()
        if (required && !newValue) {
            setError('Обязательное поле')
        } else if (validate && !validate(newValue) || props.error) {
            setError(invalidErrorText)
        }
        onBlur && onBlur(e)
    }
    const onInputFocus = (e: FocusEvent<HTMLInputElement>) => {
        setFocused(true)
        setError(null)
        onFocus && onFocus(e)
    }

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onValueChange && onValueChange(e.currentTarget.value)
    }

    return <Container>
        <HTMLInput
            {...props}
            onFocus={onInputFocus}
            onBlur={onInputBlur}
            focused={focused ? focused.toString() : ''}
            error={error ? error.toString() : ''}
            onChange={onInputChange}
        />

        <HTMLLabel
            htmlFor={props.name}
            focused={focused ? focused.toString() : ''}
            error={error ? error.toString() : ''}
        >
            {label}{required && ' *'}
        </HTMLLabel>

        {!focused && (error || props.error) && <Error>{error}</Error>}
        {description && <Description>{description}</Description>}
    </Container>
}

const Container = styled.div`
  position: relative;
`

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
const HTMLInput = styled.input<{ focused: string; error: string; }>`
  display: block;
  padding: 14px 13px;
  border: 2px solid ${p => p.focused ? Colors.BRAND : p.error ? Colors.TEXT_ERROR : Colors.BORDER_PRIMARY};
  border-radius: ${BORDER_RADIUS.SMALL};
  outline: 0;
  width: 100%;
  font: ${Fonts.PN_400_14_14};
  color: ${Colors.TEXT_PRIMARY};
  letter-spacing: 0.25px;
  height: 50px;
  &::placeholder {
    color: ${Colors.BORDER_DASHED};
  }
`
const HTMLLabel = styled.label<{ focused: string; error: string; }>`
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


