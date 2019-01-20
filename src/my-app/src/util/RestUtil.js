import rp from "request-promise";

/**
 * Gets the URL to send an HTTP request to
 * @param {String} endpoint - the endpoint to send the request to on the server (everything after the /api/ part of the URI)
 * @return the URL to send an HTTP request to
 */
// const makeRequestURL = (endpoint) => {
// 	return `${DATABASE_BASE_URL}/api/${endpoint}/`;
// };

export default class RestUtil {

	/**
	 * Sends an HTTP POST request to the specified endpoint
	 * @param {String} endpoint - the endpoint in the database to send the request to
	 * @param {Object} body - the payload to send as part of the request
	 * @param {Object?} optionOverrides - an object that defines overrides to the options sent with the request
	 * @return {Promise} - a promise that resolves when the request is complete with the response as it's parameter
	 */
	static sendPostRequest(endpoint, body, optionOverrides = {}) {
		const options = Object.assign({
			uri: makeRequestURL(endpoint),
			headers: {
				"Content-Type": "application/json"
			},
			json: true,
			method: "POST",
			body: body
		}, optionOverrides);
		return rp.post(options);
	}

	/**
	 * Sends an HTTP GET request to the specified endpoint
	 * @param {String} endpoint - the endpoint in the database to send the request to
	 * @param {Object?} query - an optional parameter defining any query strings include in the request URL
	 * @param {Object?} optionOverrides - an object that defines overrides to the options sent with the request
	 * @return {Promise} - a promise that resolves when the request is complete with the response as it's parameter
	 */
	static sendGetRequest(endpoint, query = {}, optionOverrides = {}) {
		const options = Object.assign({
			uri: makeRequestURL(endpoint),
			json: true,
			qs: query
		}, optionOverrides);
		return rp.get(options);
	}
}