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

Split(['#Editor', '#Preview'], {
  minSize: 200,
  gutterSize: 6,
  sizes: [35, 65]
})