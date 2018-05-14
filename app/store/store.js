
import {createStore} from 'redux'
import reducer from '../reducer/reducer'

// 初始化默认值
const defaultStore = {

};

const devtool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(reducer,defaultStore,devtool);