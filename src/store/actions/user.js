const USER_DATA = 'USER_DATA';
const CHANGE_USER_DATA = 'CHANGE_USER_DATA';

export function userData(data) {
	return {
		type: USER_DATA,
		payload: data,
	};
}
export function changeUserData(data) {
	return {
		type: CHANGE_USER_DATA,
		payload: data
	}
}