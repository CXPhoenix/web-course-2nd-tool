import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Split from 'split.js'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

let splitDirection = document.body.clientWidth >= 640 ? 'horizontal' : 'vertical'
let cursor = splitDirection === 'vertical' ? 'col-resize' : 'row-resize'
let minSize = splitDirection === 'vertical' ? 100 : 200
Split(['#Editor', '#Preview'], {
  minSize: minSize,
  gutterSize: 6,
  sizes: [35, 65],
  direction: splitDirection,
  cursor: cursor
})


// if (document.body.clientWidth >= 640) {
//   Split(['#Editor', '#Preview'], {
//     minSize: 200,
//     gutterSize: 6,
//     sizes: [35, 65],
//     // direction: splitDirection,
//     // cursor: cursor
//   })
// }