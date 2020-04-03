import { SET_CURRENT_USER } from '../actionTypes';

const DEFAULT_STATE = {
	isAuthenticated: false, // will be true when user is logged in
	user: {} // all the user info when logged in
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case SET_CURRENT_USER:
			return {
				// turn an empty object into false or if there are keys in the object, true
				isAuthenticated: !!Object.keys(action.user).length, // or isAuthenticated: Object.keys(action.user).length > 0
				user: action.user
			};
		default:
			return state;
	}
};