
import React from 'react'
import ReactDOM from 'react-dom'

import store from './store/store'

// 引入样式
import './style/global'
import './style/router'

// 引入路由
import {RouterBase as RouterSystem} from './router/router'

// ReactDOM.render(<RouterSystem />,document.getElementById('app'))

const render = () => ReactDOM.render(
	<RouterSystem 
	/>,
	document.getElementById('app')
);

render();

store.subscribe(render);














