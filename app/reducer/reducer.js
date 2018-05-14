
export default (state,action) => {

	let temArr = [];
	switch(action.type){
		case 'addInfo':
			console.log('reducer:',state.todoList)
			// 获取需要添加的信息
			temArr = state.todoList.infoArr.slice();
			temArr.push(action.info);
			return Object.assign({},state,{
				todoList: {
					infoArr: temArr
				},
			});
		case 'subInfo':
			temArr = state.todoList.infoArr.slice();
			temArr.splice(action.numid,1);
			return Object.assign({},state,{
				todoList: {
					infoArr: temArr
				},
			});
		default:
			return state;
	}
}