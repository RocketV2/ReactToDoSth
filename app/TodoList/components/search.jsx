
import React from 'react'
import ReactDOM from 'react-dom'

class Searcher extends React.Component{

	constructor(props){
		super(props)
		this.clickEvent = this.clickEvent.bind(this)
		this.keyEnterEvent = this.keyEnterEvent.bind(this)
		this.eventHandler = this.eventHandler.bind(this)
	}

	/**
	 * [clickEvent 按钮点击事件]
	 * @param  {[type]} e [description]
	 * @return {[type]}   [description]
	 */
	clickEvent(e){
		// this.textInput 使用refs属性获取DOM元素
		if(this.textInput.value!==''){
			this.props.addInfo(this.textInput.value);
			this.textInput.value = '';// 置空
			this.textInput.focus(); // 获取焦点
		}
		
	}

	/**
	 * [keyEnterEvent 输入框的回车事件]
	 * @param  {[type]} e [description]
	 * @return {[type]}   [description]
	 */
	keyEnterEvent(e){
		e = e || window.event;
		if(e.keyCode === 13 && this.textInput.value!==''){
			this.props.addInfo(this.textInput.value);
			this.textInput.value = '';// 置空
		}
	}

	/**
	 * [eventHandler 事件处理-回车事件、submit点击事件  
	 * 使用事件委托，此处不再使用clickEvent,keyEvterEvent]
	 * @param  {[type]} e [description]
	 * @return {[type]}   [description]
	 */
	eventHandler(e){
		// 点击"添加" 对应的事件处理
		if(e.type === 'click' && e.target.type === 'submit'){
			if(this.textInput.value!==''){
				this.props.addInfo(this.textInput.value);
				this.textInput.value = '';// 置空
				this.textInput.focus(); // 获取焦点
			}
		}

		// 当回车时触发的事件 
		if( (e.type === 'keydown' || e.type === 'keypress') && e.target.type === 'text' ){
			if(e.keyCode === 13 && this.textInput.value!==''){
				this.props.addInfo(this.textInput.value);
				this.textInput.value = '';// 置空
			}
		}
	}

	render(){
		const tips = "请输入添加信息";

		return (
			<div className="searcher" onKeyPress={this.eventHandler} onKeyDown={this.eventHandler} onClick={this.eventHandler}>
				<input className="sea-input" type="text" ref={(input) => this.textInput = input} placeholder={tips} />
				<a className="sea-btn" type="submit" target="_blank">add info</a>
			</div>
		)
	}
}

export {Searcher}