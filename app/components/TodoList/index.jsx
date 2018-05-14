
import React from 'react'
import ReactDOM from 'react-dom'

import store from '../../store/store'

// 引入样式
import './style/global'
import './style/search'
import './style/showInfo'

// 引入组件
import {Searcher} from './components/search'
import {ShowInfo} from './components/showInfo'

class TodoList extends React.Component{
	constructor(){
		super(...arguments);
		/*this.state = {
			infoArr:[]
		}*/
		this.state = store.getState().todoList;

		this.addInfoEvent = this.addInfoEvent.bind(this)
		this.subInfoItems = this.subInfoItems.bind(this)
		this.changeState  = this.changeState.bind(this)
	}

	shouldComponentUpdate(nextState,nextProps){
		return (nextState.infoArr !== this.state.infoArr)
	}

	componentDidMount(){
		store.subscribe(this.changeState)
	}

	componentWillUnmount(){
		console.log('卸载组件')
	}

	// 此为 store 监听的函数，调用时要注意this指向
	changeState(){
		this.setState(store.getState().todoList)
	}

	/**
	 * [addInfoEvent 添加数组内容]
	 * @param {[type]} info [description]
	 */
	addInfoEvent(info){
		store.dispatch({type:'addInfo',info:info});

		/*this.setState( (prevState,props) => {
			let temArr = prevState.infoArr.slice();
			temArr.push(info)
			return {
				infoArr: temArr,
			}
		})*/
	}

	/**
	 * [subInfoItems 根据数组下标删除]
	 * @param  {[type]} numid [description]
	 * @return {[type]}       [description]
	 */
	subInfoItems(numid){
		store.dispatch({type:'subInfo',numid:numid});

		/*this.setState( (prevState,props) => {
			let temArr = prevState.infoArr.slice();
			temArr.splice(numid,1);

			return {
				infoArr: temArr,
			}
		})*/
	}

	render(){

		return(
			<div className="toDoList">
				<Searcher addInfo={this.addInfoEvent} />
				{/*<ShowInfo infoArr={this.state.infoArr} subInfoItems={this.subInfoItems}/>*/}
				<ShowInfo infoArr={this.state.infoArr} subInfoItems={this.subInfoItems}/>
			</div>
		)
	}
}

export {TodoList}















