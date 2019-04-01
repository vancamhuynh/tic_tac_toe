import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import Game from './containers/game'

const store = createStore(rootReducer);

// =================================
// ReactDOM.render(
//     <Game />,
//     document.getElementById('root')
// )

ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('root')
)

