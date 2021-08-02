import React, { useState } from 'react'
import Editor from './Components/Editor'
import Header from './Components/Header'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { editorList } from './Components/EditorData'
import { htmlCodesData } from './Components/HtmlData'
import Preview from './Components/Preview'
import AddCodeModal from './Components/AddCodeModal'

library.add(fas)

function addCode(Codes, code) {
  Codes.push(code)
  return Codes
}

function deleteCode(Codes, codeIndex) {
  Codes.splice(codeIndex, 1)
  return Codes
}


function App() {
  const [htmlCodes, setHtmlCodes] = useState([...htmlCodesData])
  const [cssCodes, setCssCodes] = useState([])
  const [openModal, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState('html')
  
  let webCodes = `<!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>你的網站</title>
      <style>
      ${cssCodes.map((item) => (
        item+'\n'
      )).join('')}
      </style>
  </head>
  <body>\n
  ${htmlCodes.map((item) => (
      item + '\n'
  )).join('')}
  </body>\n</html>`

  let downloadWebCodes = `<!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>你的網站</title>
      <link rel="stylesheet" href="style.css">
  </head>
  <body>\n
  ${htmlCodes.map((item) => (
      item + '\n'
  )).join('')}
  </body>\n</html>`

  function closeModalEventHandler() {
    setModalOpen(false)
  }

  function openAddHtmlCodeAreaEventHandler() {
    setModalType('html')
    setModalOpen(true)
  }

  function downloadHtmlFile(webCodes) {
    const fileBlob = new Blob(Array.from(webCodes))
      const url = URL.createObjectURL(fileBlob)
      const a = document.createElement('a')
      a.setAttribute('href', url)
      a.setAttribute('target', '_blank')
      a.setAttribute('download', 'index.html')
      a.click()
  }

  function addCodeEventHandler(modalType) {
    const singleElement = [
      'img',
      'input',
      'br',
      'hr'
    ]
    if (modalType === 'html') {
      let codes = ''
      const elementName = document.querySelector('#htmlElementName')
      const elementId = document.querySelector(`#htmlElementId`)
      const elementClass = document.querySelector(`#htmlElementClass`)
      const elementStyle = document.querySelector(`#htmlElementStyle`)
      const elementContent = document.querySelector(`#htmlElementContent`)
      const elementExtraSetting = document.querySelector(`#htmlElementExtraSetting`)
      if ([].indexOf(elementName) === -1) {
        codes = `<${elementName.value} ${elementId.value ? `id=${elementId.value}` : ``} ${elementClass.value ? `class=${elementClass.value}` : ``} ${elementStyle.value ? `style=${elementStyle.value}` : ``} ${elementExtraSetting.value}>${elementContent.value}</${elementName.value}>`
      } else {
        codes = `<${elementName.value} ${elementId.value ? `id=${elementId.value}` : ``} ${elementClass.value ? `class=${elementClass.value}` : ``} ${elementStyle.value ? `style=${elementStyle.value}` : ``} ${elementExtraSetting.value} />`
      }
      elementName.value = ''
      elementId.value = ''
      elementClass.value = ''
      elementStyle.value = ''
      elementContent.value = ''
      elementExtraSetting.value = ''
      setHtmlCodes(addCode([...htmlCodes], codes))
      setModalOpen(false)
    }
  }

  function deleteHtmlCodeEventHandler(codeSource) {
    setHtmlCodes(deleteCode([...htmlCodes], codeSource.index))
  }

  function changeHtmlCodeEventHandler(codeSource, codeDestination) {
    let tmpCodes = [...htmlCodes]
    const tmp = tmpCodes[codeSource.index]
    tmpCodes.splice(codeSource.index, 1)
    tmpCodes.splice(codeDestination.index, 0, tmp)
    setHtmlCodes(tmpCodes)
  }

  return (
    <div className="h-screen w-screen overflow-hidden relative">
      <AddCodeModal isModalOpen={ openModal } modalType={modalType} modalTitle={`增加 HTML 程式碼`} addCodeEventHandler={() => addCodeEventHandler(modalType)} closeModalEventHandler={closeModalEventHandler} />
      <Header courseTitle={`增加 CSS 香料`} />
       <div className="flex flex-row h-full">
         <Editor 
         editorList={editorList} 
         htmlData={htmlCodes} 
         openAddHtmlCodeAreaEventHandler={openAddHtmlCodeAreaEventHandler}
         downloadHtmlFileEventHandler={() => downloadHtmlFile(downloadWebCodes)} 
         deleteHtmlCodeEventHandler={deleteHtmlCodeEventHandler}
         changeHtmlCodeEventHandler={changeHtmlCodeEventHandler}
         />
         <Preview webCodes={webCodes}/>
       </div>
    </div>
  )
}

export default App
