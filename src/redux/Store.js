import {applyMiddleware, legacy_createStore} from 'redux'
import Reducer from './Reducer'
import {logger} from 'redux-logger'

const myStore = legacy_createStore(Reducer, applyMiddleware(logger))



export default myStore