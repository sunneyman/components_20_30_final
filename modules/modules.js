(function() {
	class Request {
		constructor(baseUrl) {
			this.baseUrl = baseUrl;
		}

		static request() {

		}
	}
})


/*
Calling from app.js:

	const request = new Request({
		baseUrl: URL,
		timeout: 10000,
		preprocess: '/token'
	});
 */
