import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { GlobalStyles } from './styles/global'
import { ProviderTheme } from './styles/ProviderTheme'

ReactDOM.render(
  <React.StrictMode>
    <ProviderTheme>
      <App />
      <GlobalStyles />
    </ProviderTheme>
  </React.StrictMode>,
  document.getElementById('root')
)
