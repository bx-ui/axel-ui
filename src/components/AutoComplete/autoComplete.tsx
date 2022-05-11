import React, { ReactElement, FC, useState, ChangeEvent, useEffect, useRef } from 'react'
import classNames from 'classnames'
import Input, { InputProps } from '../Input/input'
import Icon from '../Icon/icon'
import useDebounce from '../../hooks/useDebounce'
import useClickOutside from '../../hooks/useClickOutSide'
import Transition from '../Transition/transition'

type DataSourceObject = {
  value: string
}
export type DataSourceType<T = {}> = T & DataSourceObject
export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>,
  onSelect?: (item: DataSourceType) => void,
  renderOption?: (item: DataSourceType) => ReactElement
}

const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const {
    fetchSuggestions,
    onSelect,
    renderOption,
    ...restProps
  } = props

  const [inputValue, setInputValue] = useState<string>('')
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [highlightIndex, setHighlightIndex] = useState<number>(-1)
  const [showDropdown, setShowDropdown] = useState<boolean>(false)
  const debouncedValue = useDebounce(inputValue, 500)
  const triggerSearch = useRef<boolean>(false)
  const componentRef = useRef<HTMLDivElement>(null)
  useClickOutside(componentRef, () => {
    setSuggestions([])
  })
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setInputValue(value)
    triggerSearch.current = true
  }

  const highlight = (index: number) => {
    if(index < 0) index = 0
    if(index > suggestions.length) index = suggestions.length
    setHighlightIndex(index)
  }

  const handleKeyDown = (e: any) => {
    switch(e.keyCode) {
      case 13:
        if(suggestions[highlightIndex])
        handleSelect(suggestions[highlightIndex])
        break
      case 38:
        highlight(highlightIndex - 1)
        break
      case 40:
        highlight(highlightIndex + 1)
        break
      case 27:
        setSuggestions([])
        break
    }
  }

  const handleSelect = (item: DataSourceType) => {
    setInputValue(item.value)
    setSuggestions([])
    if(onSelect) onSelect(item)
    triggerSearch.current = false
  }

  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value
  }

  const generateDropdown = () => {
    return (
      
      <Transition
        in={showDropdown || loading}
        animation="zoom-in-top"
        timeout={300}
        onExited={() => {setSuggestions([])}}
      >

        <ul className="axel-suggestion-list">
          {
            loading && 
            <div className="suggstions-loading-icon">
              <Icon icon="spinner" spin/>
            </div>
          }
          {suggestions.map((item, index) => {

            const cnames = classNames('suggestion-item', {
              'is-selected': highlightIndex === index
            })

            return (
              <li
                className={cnames}
                key={index}
                onClick={() => handleSelect(item)}
              >
                {renderTemplate(item)}
              </li>
            )
          })}
        </ul>
        </Transition>
      
    )
  }

  useEffect(() => {
    if(debouncedValue && triggerSearch.current) {
      const result = fetchSuggestions(debouncedValue)
      if(result instanceof Promise) {
        setLoading(true)
        result.then(res => {
          setSuggestions(res)
          setLoading(false)
          if(res.length > 0) {
            setShowDropdown(true)
          }else {
            setShowDropdown(false)
          }
        })
      }else {
        setSuggestions(result)
        setShowDropdown(false)
        if(result.length > 0) setShowDropdown(true)
      }
    } else {
      setSuggestions([])
      setShowDropdown(false)
    }
  }, [debouncedValue])

  return (
    <div className="axel-auto-complete" ref={componentRef}>
      <Input
        {...restProps}
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {generateDropdown()}
    </div>
  )
}

export default AutoComplete
