import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const title = 'React with webpack and babel project. Author: Chanh chung'

ReactDOM.render(<App title={title} />, document.querySelector('#app'))

module.hot.accept()
