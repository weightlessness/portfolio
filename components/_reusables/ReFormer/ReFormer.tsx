import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Colors } from "../../../constants/colors"
import { Fonts } from "../../../constants/fonts"
import Input, { FieldType } from "./Input"
import { Col, Row } from "../../Grid"
import objectToArray from "../../../utils/objectToArray"

const ReFormer = ({
  fields = [],
  onChange = null,
  onPassValidators = null,
  fillingAlreadyRecorded = false,
}) => {
  const [values, setValues] = useState({})
  const [opts, setOpts] = useState(fields)
  const [fillStarted, setFillStarted] = useState(fillingAlreadyRecorded)

  const handleInputChange = (value: FieldType, name: string) => {
    if (!fillStarted && value.value) {
      setFillStarted(true)
    }
    setValues((prevState) => ({ ...prevState, [name]: value }))
  }

  useEffect(() => {
    const fields = objectToArray(values)
    if (!!fields.length && onPassValidators !== null) {
      const valid = fields
        .map(({ value, validation, required }) => {
          if (required && !value) return false
          else if (required) return validation(value)
          else if (!value) return true
          else return validation(value)
        })
        .reduce((acc, val) => {
          if (acc) acc = val
          return acc
        }, true)
      onPassValidators(valid)
    }
    onChange(values)
  }, [values])

  return (
    <FormWrapper>
      {opts.map((section, index) => {
        return (
          <Section key={index}>
            {(section?.number || section?.title) && (
              <SectionTitle>
                {section?.number && <span>{section?.number}. </span>}
                {section?.title && <span>{section?.title}</span>}
              </SectionTitle>
            )}

            {section?.fields && (
              <Inputs>
                <Row10>
                  {section.fields.map((field: FieldType, index: number) => {
                    const {
                      name,
                      type,
                      required = false,
                      validation: { validate } = { validate: () => true },
                    } = field

                    if (!(name && type)) return null

                    return (
                      <InputBlock key={index} xs={field?.width ?? "12"}>
                        <InputWrapper>
                          <Input
                            settings={field}
                            onChange={(value: string) =>
                              handleInputChange(
                                {
                                  name: name,
                                  value: value,
                                  type: type,
                                  required: required,
                                  validation: validate,
                                },
                                name
                              )
                            }
                          />
                        </InputWrapper>
                      </InputBlock>
                    )
                  })}
                </Row10>
              </Inputs>
            )}
          </Section>
        )
      })}
    </FormWrapper>
  )
}

const Row10 = styled(Row)`
  margin: 0 -10px !important;
`
const Col10 = styled(Col)`
  padding: 0 10px !important;
`
const Inputs = styled.div`

`
const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`
const InputBlock = styled(Col10)`
  position: relative;

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`
const SectionTitle = styled.div`
  font: ${Fonts.SF_600_18_18};
  color: ${Colors.TEXT_PRIMARY};

  & + ${Inputs} {
    margin-top: 30px;
  }
`
const Section = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 40px;
  }
`
const FormWrapper = styled.form``

export default ReFormer
