export function configureFakeBackend() {
	let users = [{ username: 'test', password: 'test', }];
	let realFetch = window.fetch;
	window.fetch = function(url, opts) {
		return new Promise((resolve, reject) => {
			// wrap in timeout to simulate server api call
			setTimeout(() => {
				// authenticate
				if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
					// get parameters from post request
					let params = JSON.parse(opts.body);

					// find if any user matches login credentials
					let filteredUsers = users.filter(user => {
						return user.username === params.username && user.password === params.password;
					});

					if (filteredUsers.length) {
						// fake jwt token
						let responseJson = {
							jwt: '86fasfgfsogHGad',
						};
						resolve({ ok: true, json: () => responseJson });
					} else {
						// else return error
						reject('Неверный логин или пароль!');
					}
					return;
				}
				// pass through any requests not handled above
				realFetch(url, opts).then(response => resolve(response));
			}, 500);
		});
	};
}
