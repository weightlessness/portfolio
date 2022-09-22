import * as React from "react"
import {useEffect, useRef, useState} from "react"
import {Col, Container, Row} from "../Grid";
import Breadcrumbs from "../_reusables/Breadcrumbs";
import styled, {css, keyframes} from "styled-components";
import {Fonts} from "../../constants/fonts";
import {Colors} from "../../constants/colors";
import {BREAKPOINTS, BREAKPOINTS_NUMBERS} from "../../constants/breakpoints";
import {i18n} from "../../constants/i18n";
import ReBlock from "../_reusables/ReBlock";
import ReIcon from "../_reusables/ReIcon/ReIcon";
import ReFormer from "../_reusables/ReFormer";
import Button from "../_reusables/Button";
import {useDispatch} from "react-redux";
import {AModal} from "../../constants/actions";
import useClientWidth from "../_hooks/useClientWidth";
import {BORDER_RADIUS} from "../../constants/cssConstants";
import {validateCompany, validateEmail, validateName, validatePhone} from "../../utils/validateFunctions";
import errorMessages from "../../constants/errorMessages";
import {PageContainer} from "../__sc/PageContainer.sc";
import {BreadcrumbsWrapper} from "../__sc/BreadScrumbsWrapper.sc";
import { FieldType } from "../_reusables/ReFormer/Input";

const links = [
    {slug: 'sotrudnichestvo', name: i18n.ru.desktop.cooperation_n_interior_design, href: ``},
]

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
                width: '6'
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
                width: '6'
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
                width: '6'
            },
            {
                name: 'designerSocial',
                type: 'text',
                label: 'Ссылка на профиль',
                placeholder: 'instagram.com/skdesign',
                required: true,
                width: '6'
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


const PageDesigners = () => {

    const ref = useRef<HTMLDivElement>();
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false)
    const [values, setValues] = useState({})
    const [formValid, setFormValid] = useState(false)
    const [showThx, setShowThx] = useState(false)
    const [leftColumnSize, setLeftColumnSize] = useState<number>(0)
    const [rightColumnSize, setRightColumnSize] = useState<number>(0)
    const [needToReset, setNeedToReset] = useState(false)

    const [width] = useClientWidth();
    
    useEffect(() => {
        let newLeftColumnSize = 0;
        let newRightColumnSize = 0;
        switch (true) {
            case width > BREAKPOINTS_NUMBERS.XL:
                newLeftColumnSize = 8
                newRightColumnSize = 4
                break;
            case width > BREAKPOINTS_NUMBERS.LG:
                newLeftColumnSize = 6
                newRightColumnSize = 6
                break;
            case width <= BREAKPOINTS_NUMBERS.LG:
                newLeftColumnSize = 12
                break;
        }
        setLeftColumnSize(newLeftColumnSize)
        setRightColumnSize(newRightColumnSize)
    }, [width])

    return (
        <>
            <PageContainer>
                <ReBlock>
                    <BreadcrumbsWrapper>
                        <Breadcrumbs links={links}/>
                    </BreadcrumbsWrapper>
                    <Header>{i18n.ru.desktop.cooperation_n_interior_design}</Header>
                </ReBlock>

                <AttentionBlock>
                    <AttentionBackground>
                        <Container>
                            <Row>
                                <Col xs={9}>
                                    <DesignerText>
                                        <ReIcon type='designers' size={{x: 1073, y: 158}} opacity={0.5}
                                                color='#ffffff'/>
                                    </DesignerText>
                                </Col>
                            </Row>
                        </Container>
                    </AttentionBackground>

                    <AttentionForeground>
                        <Container>
                            <div ref={ref}>
                                <Row>
                                    <Col xs={leftColumnSize}>
                                        <AttentionInformation>
                                            <AttentionTag>{i18n.ru.desktop.designer}{i18n.ru.desktop.question_mark}</AttentionTag>
                                            <AttentionText>Приглашаем к взаимовыгодному сотрудничеству креативных
                                                дизайнеров,
                                                архитекторов и
                                                декораторов, дизайн-бюро и интерьерные студии — всех, кто дизайн
                                                интерьера
                                                сделали своим
                                                призванием.</AttentionText>
                                        </AttentionInformation>
                                    </Col>
                                    <ColMobile xs={rightColumnSize}>
                                        <AttentionImage>
                                            <img src={"/images/designer-couch.png"} alt=""/>
                                        </AttentionImage>
                                    </ColMobile>
                                </Row>
                            </div>
                        </Container>
                    </AttentionForeground>
                </AttentionBlock>

                <Container>
                    <Row30>
                        <Col30 xs={leftColumnSize}>
                            <FormDescriptor>
                                <FormDescriptorHeading>Оставьте заявку и станьте частью нашей
                                    команды</FormDescriptorHeading>
                                {
                                    ref.current && ref.current.offsetWidth < BREAKPOINTS_NUMBERS.MD &&
                                    <Button theme={'brand'}
                                            onClick={() => {
                                                dispatch({type: AModal.OPEN, payload: {target: 'modalDesignersForm'}})
                                            }}>Оставить заявку</Button>}
                                <FormDescriptorP>
                                    Компания SKDESIGN приглашает к взаимовыгодному сотрудничеству креативных
                                    дизайнеров,
                                    архитекторов и
                                    декораторов, дизайн-бюро и интерьерные студии — всех, кто дизайн интерьера сделали
                                    своим
                                    призванием.
                                </FormDescriptorP>
                                <FormDescriptorP>
                                    Партнерство мы видим как доверительные отношения, основанные на честности реализации
                                    бизнес идей в сфере
                                    создания и продаж современной, качественной, удобной, функциональной и эксклюзивной
                                    мебели.
                                </FormDescriptorP>
                                <FormDescriptorP>
                                    Ознакомиться с проектами можете в нашем портфолио. Если Вы оформляете интерьеры
                                    жилых
                                    или коммерческих
                                    помещений — мы с радостью поможем Вам: составим уникальные условия сотрудничества,
                                    предоставим 3D модели
                                    (уточняйте у менеджеров) и разработаем коммерческое предложение к Вашему проекту или
                                    изображениям.
                                </FormDescriptorP>
                            </FormDescriptor>
                        </Col30>
                        <ColMobile xs={rightColumnSize}>
                            <SuccessNotification active={showThx}>
                                <SuccessIcon><ReIcon type="success" size={{x: 40, y: 40}}
                                                     color={Colors.BRAND}/></SuccessIcon>
                                <SuccessTitle>Заявка принята</SuccessTitle>
                                <SuccessButton>
                                    <Button theme={'brand'}
                                            onClick={() => setShowThx(false)}
                                    >Вернуться назад</Button>
                                </SuccessButton>
                            </SuccessNotification>

                            <FormWrapper>
                                <ReFormer
                                    fields={form}
                                    onChange={(values: {[key: string]: FieldType}) => setValues(prevState => ({...prevState, ...values}))}
                                    onPassValidators={setFormValid}
                                />
                                <ConfirmRequest>
                                    <Button
                                        theme='brand'
                                        width='full'
                                        size='large'
                                        disabled={!formValid || loading}
                                        onClick={() => {
                                            setLoading(true)
                                            new Promise((resolve) => {
                                              setTimeout(() => resolve(values), 2000);
                                            }).then(res => {
                                                    setLoading(false)
                                                    setShowThx(true)
                                            })
                                                .catch(() => console.log('Show error on form'))

                                        }}
                                    >{loading ? <LoaderIcon><ReIcon type='loader' size={{x: 10, y: 10}}
                                                                    color='#ffffff'/></LoaderIcon> : 'Отправить заявку'}</Button>
                                </ConfirmRequest>
                            </FormWrapper>
                        </ColMobile>
                    </Row30>
                </Container>
            </PageContainer>
        </>
    )
}

export const Header = styled.h1`
  font: ${Fonts.SF_600_36_36};
  color: ${Colors.TEXT_PRIMARY};
  margin: 0;
  @media (${BREAKPOINTS.TILL_SM}) {
    font: ${Fonts.SF_600_24_36};
  }
`


export const LoaderIconRotate = keyframes`
  from {
    transform: scale(3, 3) rotate(0deg);
  }
  to {
    transform: scale(3, 3) rotate(360deg);
  }
`
export const LoaderIcon = styled.div`
  animation: ${LoaderIconRotate} 1s linear infinite;
`

export const SuccessIcon = styled.div``
export const SuccessTitle = styled.div`
  margin-top: 24px;
  font: ${Fonts.SF_600_18_27};
  color: ${Colors.TEXT_PRIMARY};
`
export const SuccessButton = styled.div`
  margin-top: 24px;

`


export const SuccessNotificationActive = css`
  transform: translateY(0);
  transition-delay: .35s;
  opacity: 1;
  pointer-events: all;
`
export const SuccessNotification = styled.div<{ active: boolean; }>`
  position: absolute;
  z-index: 8;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  transition: .35s;
  transition-delay: .0s;
  transform: translateY(100px);
  opacity: 0;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 30px;

  @media (${BREAKPOINTS.TILL_MD}) {
    padding: 0 15px;
  }

  ${p => p.active && SuccessNotificationActive}
`

export const ConfirmRequest = styled.div`
  margin-top: 20px;
`
export const Row30 = styled(Row)`
  margin: 0 -30px !important;
`
export const Col30 = styled(Col)`
  padding: 0 30px !important;
`
export const ColMobile = styled(Col)`
  padding: 0 30px !important;
  @media (${BREAKPOINTS.TILL_LG}) {
    display: none;
  }
`
export const FormDescriptorP = styled.div`
  font: ${Fonts.PN_400_14_21};
  color: ${Colors.TEXT_PRIMARY};
  margin-top: 24px;

  & + & {
    margin-top: 20px;
  }

  @media (${BREAKPOINTS.TILL_SM}) {
    font: ${Fonts.SF_400_14_21};
  }
`
export const FormDescriptorHeading = styled.div`
  font: ${Fonts.SF_600_24_36};
  color: ${Colors.TEXT_PRIMARY};
  margin-bottom: 40px;
  @media (${BREAKPOINTS.TILL_SM}) {
    font: ${Fonts.SF_600_18_27};
    margin-bottom: 24px;
  }
`
export const FormDescriptor = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const FormWrapper = styled.div`
  background: #FFFFFF;
  box-shadow: 0 5px 20px rgba(53, 50, 56, 0.14);
  border-radius: ${BORDER_RADIUS.SMALL};
  padding: 40px 30px;
`
export const AttentionTag = styled.div`
  font: ${Fonts.SF_600_24_24};
  color: #ffffff;
  text-transform: uppercase;
  padding: 12px;
  border-radius: ${BORDER_RADIUS.SMALL};
  background: ${Colors.TEXT_PRIMARY};
  user-select: none;
  @media (${BREAKPOINTS.TILL_LG}) {
    text-align: left;
  }
  @media (${BREAKPOINTS.TILL_SM}) {
    font: ${Fonts.SF_600_18_18};
  }
`
export const AttentionText = styled.div`
  font: ${Fonts.PN_400_14_21};
  color: ${Colors.TEXT_SECONDARY};
  text-align: center;
  margin-top: 30px;
  padding: 0 122px;
  @media (${BREAKPOINTS.TILL_XL}) {
    font: ${Fonts.PN_400_12_18};
    padding: 0;
  }
  @media (${BREAKPOINTS.TILL_SM}) {
    padding: 0;
  }
  @media (${BREAKPOINTS.TILL_LG}) {
    text-align: left;
  }
  user-select: none;
`
export const AttentionInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 0;
  @media (${BREAKPOINTS.TILL_LG}) {
    align-items: flex-start;
  }
  @media (${BREAKPOINTS.TILL_SM}) {
    align-items: flex-start;
    margin: 40px 0;
  }
`
export const AttentionImage = styled.div`
  margin-top: 28px;

  > img {
    -webkit-user-drag: none;
    user-select: none;
    mix-blend-mode: darken;
  }
`
export const DesignerText = styled.div`
  svg {
    width: 100%;
  }

  @media (${BREAKPOINTS.TILL_MD}) {
    svg {
      width: 0;
    }
  }
`
export const AttentionBackground = styled.div``
export const AttentionForeground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`
export const AttentionBlock = styled.div`
  position: relative;
  background: ${Colors.IMAGE_BLEND};
  padding: 52px 0;
  margin: 60px 0;
  @media (${BREAKPOINTS.TILL_SM}) {
    padding: 24px 0;
    margin: 40px 0;
  }
`

export default PageDesigners;
