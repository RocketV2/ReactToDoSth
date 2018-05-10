
import React from 'react'
import {BrowserRouter as Router, Route , Link} from "react-router-dom"

class NavRouter extends React.Component{
	constructor(){
		super(...arguments);
		this.state = {
			markId:0
		};
		this.clickEvent = this.clickEvent.bind(this);
	}

	clickEvent(e){
		const li = e.target.parentNode;
		if( li.attributes && li.attributes.numid){
			this.setState(function(prevState, props){
				return {
					markId: parseInt(li.attributes.numid.value)
				}
			})
		}
	}

	render(){
		const sidebarArr = [
			{
				url:'/',
				title:'Home'
			},
			{
				url:'/list',
				title:'to-do-list'
			},
			{
				url:'/slide',
				title:'轮播图'
			},
		];
		const sideItems = sidebarArr.map( (item,index) => {
			if(index === this.state.markId){
				return (
					<li key={index} numid={index} onClick={this.clickEvent}>
						<Link to={item.url}>{item.title}</Link>
						<div className="app-sidebar-mark"></div>
					</li>
				);
			}else{
				return (
					<li key={index} numid={index} onClick={this.clickEvent}>
						<Link to={item.url}>{item.title}</Link>
					</li>
				);
			}
		});

		return(
			<div className="app-sidebar">
				<div className="sidebar-info-wrap">
					<div className="svg-react">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
						  <title>React Logo</title>
						  <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
						  <g stroke="#61dafb" strokeWidth="1" fill="none">
						    <ellipse rx="11" ry="4.2"/>
						    <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
						    <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
						  </g>
						</svg>
					</div>
					<p>Hello React</p>
				</div>
				<ul>
			    	{sideItems}
			    </ul>
			</div>
		)
	}
}

export {NavRouter}
