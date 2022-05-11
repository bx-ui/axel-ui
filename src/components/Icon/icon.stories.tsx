import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'

import Icon from './icon'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)


const defaultIcon = () => (
  <>
    <Icon icon="100" size="10x" />
    <Icon icon="100" theme="primary" size="10x" />
    <Icon icon="100" theme="secondary" size="10x" />
    <Icon icon="100" theme="danger" size="10x" />
  </>
)


storiesOf('Icon Component', module)
  .addDecorator(withInfo as any)
  .addParameters({
    info: {
      inline: true
    }
  })
  .add("Icon组件的基本使用", defaultIcon)
