import React, { ChangeEvent, FC, useRef, useState } from 'react'
import classNames from 'classnames'
import Button from '../Button/button'
import axios from 'axios'
import UploadList from './uploadList'

type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error'
export interface UploadFile {
  uid: string;
  size: number;
  name: string;
  status?: UploadFileStatus;
  percent?: number;
  raw?: File;
  response?: any;
  error?: any;
}

export interface UploadProps {
  action: string;
  defaultFileList?: UploadFile[],
  beforeUpload?: (file: File) => boolean | Promise<File>;
  onProgress?: (percentage: number, file: File) => void;
  onChange?: (file: File) => void;
  onError?: (error: any, file: File) => void;
  onSuccess?: (response: any, file: File) => void;
  onRemove?: (file: UploadFile) => void;
  headers?: {[key: string]: any },
  name?: string;
  data?: {[key: string]: any },
  withCredentials?: boolean,
  multiple?: boolean;
  accept?: string;
}


const Upload: FC<UploadProps> = (props) => {
  const {
    action,
    defaultFileList,
    beforeUpload,
    onProgress,
    onChange,
    onError,
    onSuccess,
    onRemove,
    headers,
    name,
    data,
    withCredentials,
    multiple,
    accept,
  } = props

  const fileInput = useRef<HTMLInputElement>(null)

  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList || [])

  const updateFileList = (updateFile: UploadFile, updateObj: Partial<UploadFile>) => {
    setFileList(prevFileList => {
      return prevFileList.map(file => {
        if (file.uid === updateFile.uid) {
          return {...file, ...updateObj}
        } else {
          return file
        }
      })
    })
  }

  const handleClick = () => {
    if(fileInput.current)
    fileInput.current.click()
  }

  const post = (file: File) => {

    const _file:UploadFile = {
      uid: Date.now() + 'upload-file',
      size: file.size,
      name: file.name,
      status: 'ready',
      percent: 0,
      raw: file
    }

    // setFileList([_file, ...fileList])
    setFileList(prevList => {
      return [_file, ...prevList]
    })

    const formData = new FormData()
    formData.append(name || 'file', file)
    if(data) {
      Object.keys(data).forEach(key => {
        formData.append(key, data[key])
      })
    }
    axios.post(action, formData, {
      headers: {
        ...headers,
        'Content-Type': 'multipart/form-data'
      },
      withCredentials,
      onUploadProgress: (e: any) =>{
        let percentage = Math.round((e.loaded * 100) / e.total) || 0;
        updateFileList(_file, { status: 'uploading', percent: percentage })
        
        if(percentage < 100) {
          if(onProgress) onProgress(percentage, file)
        }
      }
    })
    .then((resp:any) => {
      updateFileList(_file, { status: 'success', response: resp.data })
      if(onSuccess) onSuccess(resp, file)
      if(onChange) onChange(file)
    })
    .catch((error: any) => {
      updateFileList(_file, { status: 'error', response: error })
      if(onError) onError(error, file)
      if(onChange) onChange(file)
    })
  }

  const uploadFiles = (files: FileList) => {
    const postFiles = Array.from(files)
    postFiles.forEach(file => {
      if(beforeUpload) {
        const result = beforeUpload(file)
        if(result && result instanceof Promise) {
          result.then(processedFile => post(processedFile))
        } else if(result !== false) {
          post(file)
        }
        return
      }
      post(file)
    })
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if(!files) return
    uploadFiles(files)
    if(fileInput.current) fileInput.current.value = ''
  }
  
  const handleFileRemove = (file: UploadFile) => {
    const list = fileList.filter(item => item.uid !== file.uid)
    setFileList(list)
    if(onRemove) onRemove(file)
  }

  return (
    <div className="axel-upload-component">
      <Button btnType="primary" onClick={handleClick}>上传</Button>
      <input
        className="axel-upload-input"
        style={{ display: 'none' }}
        type="file"
        ref={fileInput}
        onChange={handleFileChange}
        multiple={multiple}
        accept={accept}
      />
      <UploadList fileList={fileList} onRemove={handleFileRemove} />
    </div>
  )
}

Upload.defaultProps = {
  name: 'file',
  withCredentials: false
}

export default Upload
