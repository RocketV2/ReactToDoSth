
import React from 'react'
import ReactDOM from 'react-dom'

// 引入样式
import './style/global'

import {Todolist as TodoList} from './components/TodoList/index'
import {SlideShow} from './components/SlideShow/index'

class App extends React.Component{
	constructor(props){
		super(props);

	}

	render(){
		return(
			<div>
				<SlideShow />
			</div>
		)
	}
}

ReactDOM.render(<App />,document.getElementById('app'))














