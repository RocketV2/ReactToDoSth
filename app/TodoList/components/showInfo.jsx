
import React from 'react'
import ReactDOM from 'react-dom'

class ShowInfo extends React.Component{

	constructor(props){
		super(props)
		this.clickEvent = this.clickEvent.bind(this);
	}

	clickEvent(e){
		// 自定义属性numid 的值
		const numid = ~~e.target.attributes.numid.value;
		this.props.subInfoItems(numid);
	}

	render(){

		var infoArr = this.props.infoArr.map( (item,index) => {
			return (
				<li key={index}>
					<div className="del-text">{item}</div>
					<div numid={index} className="del-icon" onClick={this.clickEvent}></div>
				</li>
			)
		} );
		return(
			<div className="info-wrap">
				<ul>
					{infoArr}
				</ul>
			</div>
		)
	}
}

export {ShowInfo}