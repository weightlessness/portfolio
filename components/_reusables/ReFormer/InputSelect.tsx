import * as React from "react"
import styled, { css } from "styled-components"
import { Fonts } from "../../../constants/fonts"
import { Colors } from "../../../constants/colors"
import ReIcon from "../ReIcon/ReIcon"
import useOutsideClick from "../../_hooks/useOutsideClick"
import { BORDER_RADIUS } from "../../../constants/cssConstants"
import stringToHash from "../../../utils/stringToHash"
import { InputProps } from "./Input"

type OptionType = { id: number; value: string }

const InputSelect = ({ settings, onChange }: InputProps) => {
  const {
    label,
    required = false,
    options = [],
    defaultOption = null,
    locale = "ru",
  } = settings

  const selectOptions = options.map(
    (option: string) => {
      return {
        id: stringToHash(`${option}`),
        value: option,
      }
    }
  )

  const ref = React.useRef(null)
  useOutsideClick(ref, () => setSelectActive(false))

  const [selectedOption, setSelectedOption] = React.useState(
    !!defaultOption
      ? { id: stringToHash(defaultOption), value: defaultOption }
      : null
  )
  const [selectActive, setSelectActive] = React.useState(false)
  const [touched, setTouched] = React.useState(false)
  const [error, setError] = React.useState("")

  React.useEffect(() => {
    if (touched) {
      if (required && !selectedOption) {
        setError("Обязательное поле")
      } else {
        setError("")
      }
    } else {
      setTouched(true)
    }
  }, [selectActive])

  React.useEffect(() => {
    onChange(selectedOption?.value || null)
  }, [selectedOption])

  return (
    <Select>
      <Input ref={ref}>
        <Display
          active={selectActive}
          error={!!error.length}
          onClick={() => {
            setSelectActive((prevState) => !prevState)
          }}>
          <Displabel active={selectActive || !!selectedOption}>
            {label} {required && "*"}
          </Displabel>
          {!!selectedOption && <div>{selectedOption.value}</div>}
          <Icon>
            <ReIcon
              type='pointer'
              size={{ x: 10, y: 10 }}
              color={Colors.TEXT_PRIMARY}
            />
          </Icon>
        </Display>

        {!!selectOptions.length && (
          <Options active={selectActive}>
            {selectOptions.map((option: OptionType) => {
              return (
                <Option
                  key={option.id}
                  active={option.id === selectedOption?.id}
                  onClick={() => {
                    setSelectedOption(option)
                    setSelectActive(false)
                  }}>
                  {option.value}
                </Option>
              )
            })}
          </Options>
        )}
      </Input>

      {!selectActive && error && <Error>{error}</Error>}
    </Select>
  )
}

const Error = styled.div`
  font: ${Fonts.PN_400_12_18};
  color: ${Colors.TEXT_ERROR};
  margin-top: 8px;
  padding: 0 15px;
`
const OptionActive = css`
  background: ${Colors.BACKGROUND_ACTIVE};
`
const Option = styled.div<{ active: boolean }>`
  font: ${Fonts.PN_400_14_20};
  color: ${Colors.TEXT_PRIMARY};
  padding: 5px 13px;
  background: #fff;
  cursor: pointer;
  white-space: nowrap;

  :hover {
    background: ${Colors.BACKGROUND_ACTIVE};
  }

  & + & {
    border-top: 2px solid ${Colors.BORDER_PRIMARY};
  }

  &:first-of-type {
    border-radius: ${BORDER_RADIUS.SMALL_1_2};
  }

  &:last-of-type {
    border-radius: ${BORDER_RADIUS.SMALL_3_4};
  }

  ${(p) => p.active && OptionActive}
`
const OptionsActive = css`
  transform: translateY(0px);
  opacity: 1;
  pointer-events: all;
`
const Options = styled.div<{ active: boolean }>`
  position: absolute;
  z-index: 1;
  top: calc(100% + 5px);
  left: 0;
  min-width: 100%;
  //right: 0;
  background: #fff;
  border-radius: ${BORDER_RADIUS.SMALL};
  border: 2px solid ${Colors.BORDER_PRIMARY};

  transition: 0.1s;
  transform: translateY(25px);
  opacity: 0;
  pointer-events: none;

  ${(p) => p.active && OptionsActive}
`
const Icon = styled.div`
  position: absolute;
  top: 2px;
  right: 2px;
  bottom: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 13px;
  border-radius: ${BORDER_RADIUS.SMALL};
  background: #fff;

  > svg {
    transform: rotateZ(90deg);
    transition: 0.1s;
  }
`
const DisplabelActive = css`
  font: ${Fonts.SF_400_12_12};
  color: ${Colors.TEXT_SECONDARY};
  position: absolute;
  top: -6px;
  left: 8px;
  padding: 0 5px;
  letter-spacing: 0.25px;
  background: #fff;
`
const Displabel = styled.label<{ active: boolean }>`
  background: transparent;
  border-radius: 3px;
  font: ${Fonts.PN_400_14_14};
  color: ${Colors.BORDER_DASHED};
  transition: 0.1s;
  position: absolute;
  padding: 0 5px;
  top: calc(50% - 7px);
  left: 7px;

  ${(p) => p.active && DisplabelActive}
`
const DisplayActive = css`
  border-color: ${Colors.BRAND};

  ${Icon} {
    > svg {
      transform: rotateZ(-90deg);
    }
  }
`
const Display = styled.div<{ active: boolean; error: boolean }>`
  position: relative;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 16px 13px;
  //border: 2px solid ${Colors.BORDER_PRIMARY};
  border: 2px solid
    ${(p) =>
      p.active
        ? Colors.BRAND
        : p.error
        ? Colors.TEXT_ERROR
        : Colors.BORDER_PRIMARY};
  border-radius: ${BORDER_RADIUS.SMALL};
  outline: 0;
  width: 100%;
  font: ${Fonts.PN_400_14_14};
  color: ${Colors.TEXT_PRIMARY};
  cursor: pointer;
  user-select: none;

  ${(p) => p.active && DisplayActive}
`
const Select = styled.div``
const Input = styled.div`
  position: relative;
`

export default InputSelect
