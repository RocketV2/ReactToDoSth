
import React from 'react'
import ReactDOM from 'react-dom'

// 引入样式
import './style/global'
import './style/search'
import './style/showInfo'

// 引入组件
import {Searcher} from './components/search'
import {ShowInfo} from './components/showInfo'

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			infoArr:[]
		}
		this.addInfoEvent = this.addInfoEvent.bind(this)
	}

	addInfoEvent(info){
		this.setState( (prevState,props) => {
			let temArr = prevState.infoArr.slice();
			temArr.push(info)
			return {
				infoArr: temArr,
			}
		})
		/*let temArr = this.state.infoArr.slice();
		temArr.push(info)
		console.log(temArr,info)
		this.setState({
			infoArr: temArr
		})*/

	}

	render(){
		return(
			<div className="toDoList">
				<Searcher addInfo={this.addInfoEvent} />
				<ShowInfo infoArr={this.state.infoArr}/>
			</div>
		)
	}
}

ReactDOM.render(<App />,document.getElementById('app'))