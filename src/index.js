import React from 'react'
import ReactDOM from 'react-dom'
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import ReactGA from 'react-ga'

import App from './App'
import translations from './translations'
import './index.css'

const reducers = combineReducers(Object.assign({}, { Intl }))
const store = createStore(reducers)

ReactGA.initialize('UA-43919136-5')

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider translations={translations}>
      <App />
    </IntlProvider>
  </Provider>
, document.getElementById('root'))
