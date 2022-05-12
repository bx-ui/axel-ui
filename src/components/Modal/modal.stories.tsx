import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'

import Modal from './Modal'
import Button from '../Button'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)


const DefaultModal = () => {
  const [show, setShow] = useState<boolean>(false)
  const triggerModal = (flag: boolean) => {
    setShow(flag)
  }
  return (
    <>
      <Button btnType="primary" onClick={() => triggerModal(true)}>open modal</Button>
      <Modal visible={show} title="Modal基本使用" onCancel={() => triggerModal(false)}>12121212</Modal>
    </>
  )
}

const AsyncModal = () => {
  const [show, setShow] = useState<boolean>(false)
  const triggerModal = (flag: boolean) => {
    setShow(flag)
  }
  return (
    <>
      <Button btnType="primary" onClick={() => triggerModal(true)}>open modal</Button>
      <Modal visible={show} title="Modal基本使用" onCancel={() => triggerModal(false)} confirmLoading>12121212</Modal>
    </>
  )
}


storiesOf('Modal Component', module)
  .addDecorator(withInfo as any)
  .addParameters({
    info: {
      inline: true
    }
  })
  .add("Modal组件的基本使用", DefaultModal)
  .add("Modal组件的异步关闭", AsyncModal)
