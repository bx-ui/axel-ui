import React, { ChangeEvent, useState } from 'react';
import Button from './components/Button/button'
import Alert from './components/Alert/alert'
import './App.css';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';  
import SubMenu from './components/Menu/subMenu';
import Icon from './components/Icon/icon';
import Input from './components/Input/input';
import AutoComplete from './components/AutoComplete/autoComplete'
import Upload, { UploadFile } from './components/Upload/upload'

type DataObject = {
  value: string;
  number?: number
}

function App() {
  const [value, setValue] = useState<string>('')

  const clickMe = () => {
    console.log("you clicked me!!!");
  }

  const onClose = () => {
    console.log('4444')
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const fetchSuggestions = (str: string) => {
    // const data: DataObject[] = [
    //   {
    //     value: '林青霞',
    //     number: 1
    //   },
    //   {
    //     value: '甄子丹',
    //     number: 2
    //   },
    //   {
    //     value: '成龙',
    //     number: 3
    //   }
    // ]
    // return data.filter(item => item.value.includes(str))
    return fetch(`https://api.github.com/search/users?q=${str}`)
    .then(res => res.json())
    .then(({ items }) => {
      return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item }))
    })
  }

  const onProgress = (percentage: number, file: File) => {
    console.log(percentage);
  }
  const onSuccess = (response: any, file: File) => {
    console.log(response)
  }
  const onError = (error: any, file: File) => {
    console.log(error)
  }

  const defaultFileList: UploadFile[] = [
    { uid: '123', size: 1234, name: 'hello.md', status: 'uploading', percent: 30 },
    { uid: '122', size: 1234, name: 'xyz.md', status: 'success', percent: 30 },
    { uid: '121', size: 1234, name: 'eyiha.md', status: 'error', percent: 30 }
  ]


  return (
    <div>
      <Button disabled>button</Button>
      <Button disabled size="lg">button</Button>
      <Button disabled size="sm">button</Button>
      <Button disabled size="sm" btnType="primary">button</Button>
      <Button disabled size="sm" btnType="danger">button</Button>
      <Button disabled size="sm" btnType="success">button</Button>
      <Button disabled size="sm" btnType="success">button</Button>
      <Button size="sm" btnType="success" shape="circle">circle</Button>
      <Button size="sm" btnType="success" block onClick={clickMe}>button</Button>
      <div style={{ width: '600px', margin: '20px' }}>
        <Alert type="primary" message="1111" description={<div>22222334556765432</div>} />
        <Alert style={{ marginTop: '10px' }} type="success" message="1111" description={<div>22222334556765432</div>} />
        <Alert style={{ marginTop: '10px' }} type="warning" message="1111" description={<div>22222334556765432</div>} />
        <Alert
          closeable
          style={{ marginTop: '10px' }}
          type="danger"
          message="1111"
          description={<div>22222334556765432</div>}
          onClose={onClose}
        />
      </div>
      <Menu>
        <MenuItem>item1</MenuItem>
        <MenuItem disabled>item2</MenuItem>
        <MenuItem>item3</MenuItem>
        <SubMenu title="item4">
          <MenuItem>item4-1</MenuItem>
          <MenuItem>item4-2</MenuItem>
          <MenuItem>item4-3</MenuItem>
        </SubMenu>
      </Menu>
      <Menu mode="vertical">
        <MenuItem index="0">item1</MenuItem>
        <MenuItem index="1" disabled>item2</MenuItem>
        <MenuItem index="2">item3</MenuItem>
        <SubMenu title="item4">
          <MenuItem>item4-1</MenuItem>
          <MenuItem>item4-2</MenuItem>
          <MenuItem>item4-3</MenuItem>
        </SubMenu>
      </Menu>
      <div>
        <Icon icon="apple-whole" theme="primary" />
        <Button btnType="link" href="https://fontawesome.com/icons/apple-whole?s=solid">icon图标使用链接</Button>
      </div>
      <div style={{ padding: '0px 30px' }}>
        <Input
          prepend={<div>https://</div>}
          placeholder="请输入用户名"
          icon="apple-whole"
          append={<div>.com</div>}
          value={value}
          onChange={handleChange}
        />
        <Input prepend={<div>https://</div>} size="lg" placeholder="请输入用户名" icon="apple-whole" iconTheme="primary" />
        <Input prepend={<div>https://</div>} size="sm" placeholder="请输入用户名" icon="apple-whole" disabled />
      </div>
      <div style={{padding: '0px 30px'}}>
        <AutoComplete fetchSuggestions={fetchSuggestions} />
      </div>
      <div style={{height: '200px'}}></div>
      <div>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          onProgress={onProgress}
          onSuccess={onSuccess}
          onError={onError}
          defaultFileList={defaultFileList}
          multiple
        />
      </div>
    </div>
  );
}

export default App;
