import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'

import AutoComplete, { DataSourceType } from './autoComplete'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

type DataObj = {
  number: number
}



const defaultAutoComplete = () => {

  const fetchSuggestions = (str: string) => {
    const list: DataSourceType<DataObj>[] = [
      {
        value: '李淳风',
        number: 1
      },
      {
        value: '慕容复',
        number: 2
      },
      {
        value: '李世民',
        number: 3
      }
    ]
  
    return list.filter(item => item.value.includes(str))
  }

  return (
    <AutoComplete fetchSuggestions={fetchSuggestions} placeholder="请输入古代人物姓名" />
  )
}

const asyncAutoComplete = () => {

  const fetchSuggestions = (str: string) => {
    return fetch(`https://api.github.com/search/users?q=${str}`)
    .then(res => res.json())
    .then(({ items }) => {
      return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item }))
    })
  }

  return (
    <AutoComplete fetchSuggestions={fetchSuggestions} placeholder="请输入GitHub用户名" />
  )
}

const diyTemplateAutoComplete = () => {
  const fetchSuggestions = (str: string) => {
    return fetch(`https://api.github.com/search/users?q=${str}`)
    .then(res => res.json())
    .then(({ items }) => {
      return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item }))
    })
  }

  const renderOption = (item: any) => {
    return (
      <h1>{item.value}</h1>
    )
  }

  return (
    <AutoComplete fetchSuggestions={fetchSuggestions} placeholder="请输入GitHub用户名" renderOption={renderOption} />
  )
}



storiesOf('AutoComplete Component', module)
  .addDecorator(withInfo as any)
  .addParameters({
    info: {
      inline: true
    }
  })
  .add('AutoComponent基本用法', defaultAutoComplete)
  .add('AutoComplete的异步使用', asyncAutoComplete)
  .add('AutoComplete自定义模版', diyTemplateAutoComplete)
