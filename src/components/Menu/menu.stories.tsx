import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'

import Menu from './index'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

const defaultMenu = () => (
  <>
    <Menu mode="horizontal">
      <Menu.Item>选项一</Menu.Item>
      <Menu.Item disabled>选项二</Menu.Item>
      <Menu.Item>选项三</Menu.Item>
      <Menu.SubMenu title="选项四">
        <Menu.Item>选项4-1</Menu.Item>
        <Menu.Item>选项4-2</Menu.Item>
        <Menu.Item>选项4-3</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  </>
)

const verticalMenu = () => (
  <>
    <Menu mode="vertical">
      <Menu.Item>选项一</Menu.Item>
      <Menu.Item disabled>选项二</Menu.Item>
      <Menu.Item>选项三</Menu.Item>
      <Menu.SubMenu title="选项四">
        <Menu.Item>选项4-1</Menu.Item>
        <Menu.Item>选项4-2</Menu.Item>
        <Menu.Item>选项4-3</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  </>
)

storiesOf('Menu Component', module)
  .addDecorator(withInfo as any)
  .addParameters({
    info: {
      inline: true
    }
  })
  .add('Menu基本使用', defaultMenu)
  .add("竖形菜单Menu", verticalMenu)
