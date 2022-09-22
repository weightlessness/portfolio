import * as React from "react"
import {useCallback} from "react"
import ModalFormLayout from "../../_reusables/ModalFormLayout/ModalFormLayout";
import withErrorBoundary from "../../_hoc/withErrorBoundary";
import {validateCompany, validateEmail, validateName, validatePhone} from "../../../utils/validateFunctions";
import errorMessages from "../../../constants/errorMessages";
import { FieldType } from "../../_reusables/ReFormer/Input";

const form = [
    {
        fields: [
            {
                name: 'designerName',
                type: 'text',
                label: 'Ваше имя',
                placeholder: 'Иван',
                required: true,
                validation: {
                    validate: validateName,
                    message: errorMessages.name
                },
                width: '12'
            },
            {
                name: 'designerPhone',
                type: 'phone',
                label: 'Номер телефона',
                mask: '+7 (999) 999-99-99',
                placeholder: '+7 (000) 000-00-00',
                required: true,
                validation: {
                    validate: validatePhone,
                    message: 'Некорректный телефон'
                },
                width: '12'
            },
            {
                name: 'designerEmail',
                type: 'text',
                label: 'E-mail',
                placeholder: 'example@skdesign.ru',
                required: true,
                validation: {
                    validate: validateEmail,
                    message: 'Некорректный адрес'
                },
                width: '12'
            },
            {
                name: 'designerSocial',
                type: 'text',
                label: 'Ссылка на профиль',
                placeholder: 'instagram.com/skdesign',
                required: true,
                width: '12'
            },
            {
                name: 'designerCity',
                type: 'select',
                options: [
                    'Москва',
                    'Санкт-Петербург',
                    'Краснодар',
                    'Казань',
                    'Другой',
                ],
                label: 'Ваш город',
                required: true,
                width: '12',
            },
            {
                name: 'designerOrganization',
                type: 'text',
                label: 'Название организации/студии',
                placeholder: 'SKDESIGN',
                validation: {
                    validate: validateCompany,
                    message: 'Минимум 3 символа'
                },
                width: '12'
            },
            {
                name: 'designerSource',
                type: 'select',
                label: 'Откуда узнали про нас?',
                options: [
                    'Интернет',
                    'Социальные сети',
                    'Рекламная продукция',
                    'Друзья/Знакомые',
                ],
                required: false,
                width: '12'
            },
        ]
    }
]

const successNotificationData = {
    title: 'Заявка оформлена'
}

const ModalDesignersForm = withErrorBoundary(() => {

    const onSubmit = useCallback((body: {[key: string]: FieldType}) => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(body), 2000);
          })
    }, [])


    return (
        <ModalFormLayout title={'Оформить заявку'}
                         target={'modalDesignersForm'}
                         form={form}
                         onSubmit={onSubmit}
                         successNotificationData={successNotificationData}/>
    )
})





export default ModalDesignersForm