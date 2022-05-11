import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'

import Input from './input'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

const defaultInput = () => (
  <>
    <Input />
    <Input clearabled />
  </>
)

const sizeInput = () => (
  <>
    <Input size="lg" />
    <Input size="lg" />
    <Input size="sm" />
  </>
)

const IconInput = () => (
  <>
    <Input icon="coffee" />
    <Input icon="coffee" iconTheme="success" />
    <Input prepend={<div>prepend</div>} />
    <Input append={<div>append</div>} />
  </>
)

storiesOf('Input Component', module)
  .addDecorator(withInfo as any)
  .addParameters({
    info: {
      inline: true
    }
  })
  .add('Input基本使用', defaultInput)
  .add('Input不同尺寸', sizeInput)
  .add('Input于Icon结合', IconInput)
