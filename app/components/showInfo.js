
import React from 'react'
import ReactDOM from 'react-dom'

class ShowInfo extends React.Component{

	constructor(props){
		super(props)
	}

	render(){

		var infoArr = this.props.infoArr.map( (item,index) => {
			return (
				<li key={index}>{item}</li>
			)
		} );
		return(
			<div>
				{infoArr}
			</div>
		)
	}
}

export {ShowInfo}