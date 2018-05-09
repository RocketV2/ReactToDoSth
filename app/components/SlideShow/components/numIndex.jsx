

import React from "react"
import ReactDOM from "react-dom"

class NumIndex extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			markId:1
		}
		this.clickEvent = this.clickEvent.bind(this)

		// 计算数据数组按照3分组的长度
		this.countLength();
	}

	/**
	 * [countLength 计算数据数组按照3分组的长度]
	 * @return {[type]} [返回等长度的数组，数组从1开始]
	 */
	countLength(){
		const arrLength = this.props.itemsArr.length;
		let itemsLength = 0,tempArr = [];
		if(arrLength%3!==0){
			itemsLength = parseInt(arrLength/3)+1;
		}else{
			itemsLength = parseInt(arrLength/3)
		}
		this.itemsLen = itemsLength;
		for(let i=1;i<=itemsLength;i++)
			tempArr.push(i)
		return tempArr;
	}

	/**
	 * [clickEvent 处理点击事件]
	 * @param  {[type]} e [description]
	 * @return {[type]}   [description]
	 */
	clickEvent(e){
		if(e.target.attributes.type === undefined)
			return;
		// 获取dom属性type
		const type = e.target.attributes.type.value;
		if(type!==undefined){
			switch(type){
				case 'pre':
					if(this.state.markId < 2) return;
					this.setState(function(prevState,props){
						this.props.changeMarkId(prevState.markId - 1);// 通知父元素当前markId
						return {
							markId: prevState.markId - 1
						}
					})
					break;
				case 'next':
					if(this.state.markId > this.itemsLen-1) return;
					this.setState(function(prevState,props){
						this.props.changeMarkId(prevState.markId + 1);// 通知父元素当前markId
						return {
							markId: prevState.markId + 1
						}
					})
					break;
				case 'dot':
					const numid = e.target.attributes.numid.value-0;
					this.setState(function(prevState,props){
						this.props.changeMarkId(numid);// 通知父元素当前markId
						return {
							markId: numid
						}
					})
					break;
				default:
					break;
			}
		}
	}

	render(){
		let itemsDotArr = [];
		this.countLength().map( (item,index) => {
			if(this.state.markId === item){
				itemsDotArr.push(<i type="dot" className="dot dot-active" numid={item} key={index}></i>);
			}else{
				itemsDotArr.push(<i type="dot" className="dot" numid={item} key={index}></i>);
			}
		});

		return(
			<div className="num-wrap" onClick={this.clickEvent}>
				<a type="pre" className="btn-pre" href="javascript:void(0)"></a>
				{itemsDotArr}
				<a type="next" className="btn-next" href="javascript:void(0)"></a>
			</div>
		)
	}
}

export {NumIndex}