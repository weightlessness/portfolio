import { useDispatch, useSelector } from "react-redux"
import { ModalsSelectors } from "../../../redux/selectors"
import { ReactNode, useCallback, useEffect, useRef, useState } from "react"
import { AModal } from "../../../constants/actions"
import ModalLayout from "../ModalLayout/ModalLayout"
import { SuccessNotification } from "../SuccessNotfication"
import ReFormer from "../ReFormer"
import ModalRetry from "../ModalRetry"
import styled from "styled-components"
import { BREAKPOINTS } from "../../../constants/breakpoints"
import { ModalTargetType } from "../../../redux/reducers/modalsReducer"
import { FieldType } from "../ReFormer/Input"

type ModalFormLayoutPropsType = {
  title: string
  target: ModalTargetType
  form: any
  onSubmit: (body: any) => Promise<any>
  successNotificationData: { title: string; message?: string | ReactNode }
  buttonTitle?: string
  onChange?: () => void
}

const defaultValues = {}

const ModalFormLayout = (props: ModalFormLayoutPropsType) => {
  const {
    title,
    onSubmit,
    form,
    target,
    buttonTitle = "Отправить",
    onChange,
    successNotificationData,
  } = props

  const dispatch = useDispatch()

  const active = useSelector(ModalsSelectors.selectModalShown(target))

  const [error, setError] = useState<string | null>(null)
  const [values, setValues] = useState(defaultValues)
  const [formValid, setFormValid] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formKey, setFormKey] = useState(Date.now())
  const [showThx, setShowThx] = useState(false)
  const refStartFilling = useRef(0)
  const closeModal = () => {
    if (showThx) {
      setShowThx(false)
      setFormKey(Date.now())
    }
    dispatch({
      type: AModal.CLOSE,
      payload: { target },
    })
  }

  useEffect(() => {
    if (!active) {
      refStartFilling.current = 0
    }
  }, [active])

  const onFormChange = useCallback((values: {[key: string]: FieldType}) => {
    if (refStartFilling.current === 1) {
      onChange && onChange()
    }
    refStartFilling.current += 1
    setValues((prevState) => ({ ...prevState, ...values }))
  }, [])
  const onRetryClick = useCallback(() => {
    setError(null)
    setLoading(false)
    setShowThx(false)
  }, [])

  return (
    <ModalLayout
      Title={title}
      isShown={active}
      showThx={showThx}
      onClick={closeModal}
      SuccessNotification={
        <SuccessNotification
          show={showThx}
          title={successNotificationData.title}
          message={successNotificationData.message}
        />
      }
      loading={loading}
      showButton={!error}
      buttonTitle={buttonTitle}
      buttonProps={{
        onClick: async () => {
          setLoading(true)
          const res = await onSubmit(values)
          console.log(res)
          setLoading(false)
          setShowThx(true)
        },
        disabled: !formValid,
      }}>
      <Form>
        <Former>
          <ReFormer
            key={formKey}
            fields={form}
            onChange={onFormChange}
            onPassValidators={setFormValid}
          />
        </Former>
      </Form>
      {error && <ModalRetry onClick={onRetryClick} />}
    </ModalLayout>
  )
}

const Former = styled.div`
  flex: 0;
`
const Form = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 30px;
  min-height: 100%;

  @media (${BREAKPOINTS.TILL_MD}) {
    padding: 40px 15px 0;
  }
`

export default ModalFormLayout
