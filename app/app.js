
import React from 'react'
import ReactDOM from 'react-dom'

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
			<div>
				<Searcher addInfo={this.addInfoEvent} />
				<ShowInfo infoArr={this.state.infoArr}/>
			</div>
		)
	}
}

ReactDOM.render(<App />,document.getElementById('app'))