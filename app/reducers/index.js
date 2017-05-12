/*
 * Created by https://github.com/YMFL on 2017/5/11.
 */
import { combineReducers } from 'redux'
import userinfo from './userinfo'
import store from './store'
//组件触发的action会传递到reducer中
//reducer有两个参数


// 把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数，
// 然后就可以对这个 reducer 调用 createStore。
// 在index中可以看到createStore()方法
export default  combineReducers({
    userinfo,
    store
})



