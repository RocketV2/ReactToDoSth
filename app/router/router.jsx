
import React from 'react'
import {BrowserRouter as Router, Route , Link , Switch} from "react-router-dom"

// 引入组件
import {App} from '../app'
import {TodoList} from '../components/TodoList/index'
import {SlideShow} from '../components/SlideShow/index'
import {NavRouter} from './router-siderbar'



export const RouterBase = () => (
	<Router>
		<div className="app-global">
	      	<NavRouter />

	      	<div className="app-content">
	      		<Route path="/" component={App} />
	      		<Route path="/slide" component={SlideShow} />
				<Route path="/list" component={TodoList} />
	      	</div>
		</div>
	</Router>
)


