const setSession = response => {
	if (response) {
		localStorage.setItem('jwt', response.jwt);
	} else {
		localStorage.removeItem('jwt');
	}
};

const isUserAuthenticated = () => {
	const jwt = localStorage.getItem('jwt');
	return jwt ? true : false;
};

const resetSession = () => {
	localStorage.removeItem('jwt');
};

export { setSession, isUserAuthenticated, resetSession };
