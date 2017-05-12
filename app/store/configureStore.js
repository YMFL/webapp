/*
 * Created by https://github.com/YMFL on 2017/5/11.
 */
import {createStore} from 'redux'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState,
        window.devToolsExtension ? window.devToolsExtension() : undefined
    )
    return store
}