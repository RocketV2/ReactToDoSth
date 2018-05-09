

import React from "react"
import ReactDOM from "react-dom"

// 引入样式
import './style/global'
import './style/display'
import './style/numIndex'

import {Display} from "./components/display"
import {NumIndex} from "./components/numIndex"

class SlideShow extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			markId: 1,
		}
		this.changeMarkId = this.changeMarkId.bind(this);
	}

	changeMarkId(val){
		this.setState(function(prevState,props){
			return {
				markId: val
			}
		})
	}

	render(){
		const itemsArr = [11,22,33,44,55,66,77,88,99,100,110,120,130,140,150,160];

		return (
			<div>
				<Display itemsArr={itemsArr} curMarkId={this.state.markId}/>
				<NumIndex itemsArr={itemsArr} changeMarkId={this.changeMarkId}/>
			</div>
		)
	}
}


export {SlideShow}