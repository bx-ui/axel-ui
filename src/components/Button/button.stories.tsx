import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'

import Button from './button'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)



const defaultButton = () => (
  <Button onClick={action('clicked')}> default button </Button>
)

const buttonWithSize = () => (
  <>
    <Button size="lg"> large button </Button>
    <Button size="sm"> small button </Button>
    <Button> normal button </Button>
  </>
)

const buttonWithType = () => (
  <>
    <Button btnType="primary"> primary button </Button>
    <Button btnType="danger"> danger button </Button>
    <Button btnType="link" href="https://google.com"> link button </Button>
  </>
)

const buttonOtherType = () => (
  <>
    <Button btnType="primary" block> primary button </Button>
    <Button btnType="primary" loading> primary button </Button>
    <Button btnType="primary" prependIcon="align-center"> primary button </Button>
    <Button btnType="primary" appendIcon="align-center"> primary button </Button>
  </>
)


storiesOf('Button Component', module)
  .addDecorator(withInfo as any)
  .addParameters({
    info: {
      inline: true
    }
  })
  .add('Button', defaultButton)
  .add('不同尺寸的 Button', buttonWithSize)
  .add('不同类型的 Button', buttonWithType)
  .add('Button其他的一些属性', buttonOtherType)
