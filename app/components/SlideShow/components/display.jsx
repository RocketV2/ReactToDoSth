

import React from "react"
import ReactDOM from "react-dom"


class Display extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		const curMarkId = this.props.curMarkId;
		const curItemsArr = this.props.itemsArr;

		console.log("当前id:",curMarkId)
		let itemArr = curItemsArr.map( (item,index) => {
			if( (curMarkId-1)*3 <= index  && index <= (curMarkId*3-1) ){
				return(
					<li key={index}>{item}</li>
				)
			}
		} )
		return (
			<div className="slide-wrap">
				<ul className="slider">
					{itemArr}
				</ul>	
			</div>
		)
	}
}

export {Display}