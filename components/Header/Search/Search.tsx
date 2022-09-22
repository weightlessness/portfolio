import * as React from "react";
import {ChangeEvent, KeyboardEvent, useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {Colors} from "../../../constants/colors";
import {Fonts} from "../../../constants/fonts";
import ReIcon from "../../_reusables/ReIcon";
import {i18n} from "../../../constants/i18n";
import {BORDER_RADIUS} from "../../../constants/cssConstants";
import withErrorBoundary from "../../_hoc/withErrorBoundary";
import {BREAKPOINTS} from "../../../constants/breakpoints";

type SearchPropsType = {
    maxItemsAmount?: number
    isMobile?: boolean
}

const getSearchFromLocalStorage = () => {
    const JSONSearch = localStorage.getItem('search')
    return JSONSearch ? JSON.parse(JSONSearch) : []
}

export const Search = withErrorBoundary((props: SearchPropsType) => {

    const {
        maxItemsAmount = 5,
        isMobile = false
    } = props

    const [query, setQuery] = useState('');
    const [draftQuery, setDraftQuery] = useState('')

    const [resultsVisibility, setResultsVisibility] = useState<boolean>(false);
    const [resultsFocused, setResultsFocused] = useState<boolean>(false);
    const [searchHistory, setSearchHistory] = useState<Array<string>>([])
    const [activeItem, setActiveItem] = useState<number | null>(null)
    const searchRef = useRef<HTMLInputElement>()


    useEffect(() => {
        let search = getSearchFromLocalStorage()
        setSearchHistory(search)
    }, [])




    const filteredSearchHistory = searchHistory.filter(historyQuery => historyQuery.substring(0, query.length) === query)
        .slice(0, maxItemsAmount)

    useEffect(() => {
        if (filteredSearchHistory[activeItem] && activeItem < maxItemsAmount) {
            setDraftQuery(filteredSearchHistory[activeItem])
        } else {
            setDraftQuery(query)
        }
    }, [activeItem, searchHistory])



    const maskValue = !!filteredSearchHistory.length && activeItem === null ? filteredSearchHistory[0] : ''

    const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
        setDraftQuery(e.target.value)
    }
    const onSearchInputKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        let action = false
        if (e.key === 'Enter') {
            if (action) {
                searchRef.current.blur()
                setActiveItem(null)
            }
        }
    }

    const onSearchInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        const maxLength = filteredSearchHistory.length
        if (e.key === 'ArrowDown') {
            e.preventDefault()
            setActiveItem(prev => prev === maxLength - 1 ? null : prev !== null ? (prev + 1) % maxLength : 0)
        } else if (e.key === 'ArrowUp') {
            e.preventDefault()
            setActiveItem(prev => prev === 0 ? null : prev !== null ? prev - 1 : maxLength - 1)
        }
    }

    const onEraseButtonClick = () => {
        setDraftQuery('')
        setQuery('')
    }

    return (
        <>
            <Label htmlFor={'search'}>
                <SearchIcon><ReIcon type='magnifier' size={{x: 16, y: 16}}/></SearchIcon>
                <Input
                    ref={searchRef}
                    id={'search'}
                    placeholder={i18n.ru.desktop.search_catalog}
                    value={draftQuery}
                    autoComplete={'off'}
                    onChange={onSearchInputChange}
                    onFocus={() => setResultsVisibility(true)}
                    onBlur={() => !resultsFocused && (!isMobile || !query) && setResultsVisibility(false)}
                    onClick={() => setResultsVisibility(true)}
                    hasResults={resultsVisibility && (!!query || (!query && !!filteredSearchHistory.length))}
                    onKeyPress={onSearchInputKeyPress}
                    onKeyDown={onSearchInputKeyDown}
                />
                <MaskInput value={maskValue} readOnly={true}/>
                {
                    query &&
                    <Erase>
                        <EraseButton
                            title='очистить запрос'
                            onClick={onEraseButtonClick}
                        >
                            <ReIcon type='cross' size={{x: 10, y: 10}}/>
                        </EraseButton>
                    </Erase>
                }
            </Label>
        </>
    )
})

export const EraseButton = styled.div`
  line-height: 0;
  padding: 10px;
  cursor: pointer;

  & > svg {
    fill: ${Colors.TEXT_PRIMARY};
    pointer-events: none;
  }

  &:hover > svg {
    fill: ${Colors.BRAND};
  }
`
export const Erase = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 60px;
  background: transparent;
  border-radius: ${BORDER_RADIUS.SMALL};
  display: flex;
  align-items: center;
  justify-content: center;
`
export const SearchIcon = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 63px;
  background: transparent;
  border-radius: ${BORDER_RADIUS.SMALL};
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    fill: ${Colors.TEXT_SECONDARY};
  }
`

const Label = styled.label`
  position: relative;
  display: block;
`

const Input = styled.input<{ value: string; hasResults: boolean; }>`
  width: 100%;
  height: 50px;
  background-color: ${p => p.value !== '' ? '#ffffff' : Colors.BACKGROUND_ACTIVE};
  border: 1px solid ${p => p.value !== '' ? Colors.BORDER_PRIMARY : Colors.BACKGROUND_ACTIVE};
  outline: none;
  padding-left: 66px;
  padding-right: 60px;
  border-radius: ${p => p.hasResults ? '8px 8px 0 0' : '8px'};
  font: ${Fonts.PN_400_14_21};
  color: ${Colors.TEXT_PRIMARY};

  &:active {
    background-color: #ffffff;
    border-color: ${Colors.BORDER_PRIMARY};
  }

  &:focus {
    //background-color: #ffffff;
    background-color: ${p => p.value ? 'transparent' : '#fff'};
    border-color: ${Colors.BORDER_PRIMARY};
  }

  @media (${BREAKPOINTS.TILL_MD}) {
    border-radius: 8px;
  }
`

const MaskInput = styled.input<{ hasResults?: boolean, value?: string }>`
  position: absolute;
  left: 1px;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  border: none;
  outline: none;
  padding-left: 66px;
  padding-right: 60px;
  border-radius: ${p => p.hasResults ? '8px 8px 0 0' : '8px'};
  font: ${Fonts.PN_400_14_21};
  color: ${Colors.TEXT_SUP};
  z-index: -1;

`




