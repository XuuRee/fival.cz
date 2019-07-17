import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { compose, createStore } from 'redux'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App'
import { Provider } from 'react-redux'
import { initialState } from './Data/Data'
import { gameParameter } from './Utils/Other'
import rootReducer from './Reducer'
import { setGame } from './Actions/TypeActions'

const composeEnhancers =
    typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose

const store = createStore(rootReducer, initialState, composeEnhancers())

const startGame = gameParameter()
if (startGame) {
    store.dispatch(setGame())
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
