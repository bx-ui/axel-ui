import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'

import Alert from './alert'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)


const  defaultAlert = () => (
  <>
    <Alert message="我是标题" description="我是详细信息，啦啦啦啦啦"></Alert>
    <Alert message={<h1>我是标题</h1>} description={<h6>我是详细信息，啦啦啦啦啦</h6>}></Alert>
  </>
)

const typeAlert = () => (
  <>
    <Alert message="我是标题" description="我是详细信息，啦啦啦啦啦" type="danger"></Alert>
    <Alert message="我是标题" description="我是详细信息，啦啦啦啦啦" type="primary"></Alert>
    <Alert message="我是标题" description="我是详细信息，啦啦啦啦啦" type="success"></Alert>
    <Alert message="我是标题" description="我是详细信息，啦啦啦啦啦" type="warning"></Alert>
  </>
)

const closeableAlert = () => (
  <>
    <Alert message="我是标题" description="我是详细信息，啦啦啦啦啦" type="danger" closeable onClose={action('closeAlert')}></Alert>
  </>
)


storiesOf('Alert Component', module)
  .addDecorator(withInfo as any)
  .addParameters({
    info: {
      inline: true
    }
  })
  .add("Alert基本使用", defaultAlert)
  .add("Alert不同类型", typeAlert)
  .add("可关闭的Alert", closeableAlert)
