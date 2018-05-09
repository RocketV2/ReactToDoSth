
import React from 'react'
import ReactDOM from 'react-dom'


import {Todolist as TodoList} from './TodoList'


class App extends React.Component{
	constructor(props){
		super(props);

	}

	render(){
		return(
			<div>
				<TodoList />
			</div>
		)
	}
}

ReactDOM.render(<App />,document.getElementById('app'))














