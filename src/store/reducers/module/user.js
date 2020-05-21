const USER_DATA = 'USER_DATA';
const CHANGE_USER_DATA = "CHANGE_USER_DATA";

const initState = {
	userInfo: {
		userName:''
	}
}

export function user(state = initState, action) {
	switch(action.type) {
		case USER_DATA: 
			return {
				...state,
				userInfo: action.payload.userInfo
			};
		case CHANGE_USER_DATA:
			return {
				...state,
				userInfo: action.payload.userInfo
			};
		default:
			return state;
	}
}
