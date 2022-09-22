import * as React from 'react';
import {useEffect, useState} from 'react';
import {
    ButtonWrapper,
    LoaderIcon,
    ModalClose,
    ModalContent,
    ModalFormBLock,
    ModalHead,
    ModalSubtitle,
    ModalTitle,
    ScrollView,
    TransparentCover
} from "./ModalLayout.sc";
import {Close} from "../../_icons/Close";
import Button from "../Button";
import ReIcon from "../ReIcon";
import {ReButtonProps} from "../Button/Button";
import withErrorBoundary from "../../_hoc/withErrorBoundary";

type ModalLayoutProps = {
    isShown: boolean
    onClick: () => void
    Title?: React.ReactNode | string
    subtitle?: string
    notOnlyOpenModal?: boolean
    icon?: any
    showThx?: boolean
    SuccessNotification?: React.ReactNode
    children: React.ReactNode
    showButton?: boolean
    buttonTitle?: string
    loading?: boolean
    buttonProps?: ReButtonProps | null
    width?: string
    showCloseButton?: boolean
}


const ModalLayout = withErrorBoundary (({
                         children,
                         isShown,
                         onClick,
                         icon = null,
                         Title = '',
                         subtitle = '',
                         notOnlyOpenModal = false,
                         showThx = false,
                         SuccessNotification,
                         showButton = false,
                         buttonTitle = 'Отправить',
                         loading = false,
                         buttonProps = null,
                         width = '500px',
                         showCloseButton = true
                     }: ModalLayoutProps) => {

    const [touched, setTouched] = useState(false)
    const [hide, setHide] = useState(true)

    useEffect(() => {
        if (!touched && isShown) setTouched(true)
    }, [touched, isShown])

    useEffect(() => {
        let intervalId: string | number | NodeJS.Timeout;
        if (!isShown) {
            intervalId = setTimeout(() => {
                setHide(true)
            }, 300)
            return () => {
                clearTimeout(intervalId)
            }
        } else {
            setHide(false)
        }
    }, [isShown])

    const onButtonClick = () => {
        !loading && buttonProps.onClick && buttonProps.onClick();
    }

    useEffect(() => {
        return () => {
            onClick()
        }
    }, [])

    return (
        <>
            {showCloseButton && <TransparentCover notOnlyOpenModal={notOnlyOpenModal} onClick={onClick} active={isShown} touched={touched}/>}
            <ModalFormBLock active={isShown} touched={touched} width={width}>
                {!hide && <>
                    {showCloseButton && <ModalClose
                        onClick={onClick}
                    >
                        {icon ? icon() : <Close/>}
                    </ModalClose>}
                    {SuccessNotification && SuccessNotification}
                    <ModalContent hide={showThx}>
                        {!!Title && (
                            typeof Title === 'string' ? <ModalHead>
                                    <ModalTitle>{Title}</ModalTitle>
                                    {subtitle && <ModalSubtitle>{subtitle}</ModalSubtitle>}
                                </ModalHead> :
                                Title
                        )}

                        <ScrollView id={'modal_fabric_scroll_view'}>
                            {children}
                        </ScrollView>
                        {showButton && <ButtonWrapper>

                            <Button theme={'brand'}
                                    width={'full'}
                                    size={'large'}
                                    enableShadow
                                    {...buttonProps}
                                    onClick={onButtonClick}
                            >
                                {loading ? <LoaderIcon><ReIcon type='loader' size={{x: 10, y: 10}}
                                                               color='#ffffff'/></LoaderIcon> : buttonTitle}
                            </Button>
                        </ButtonWrapper>}
                    </ModalContent>
                </>}
            </ModalFormBLock>
        </>
    )
});


export default ModalLayout;
