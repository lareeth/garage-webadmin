import useLocalStorage from "./utils/localstorage-sync.js"
import useAuthenticatedUser from "./utils/authenticated-user.js"
import createApiClient from "./utils/create-api-client.js"

export const token = useLocalStorage("token", null)

export const client = createApiClient({
	getToken() {
		return token.value
	},
})

export const authenticated = useAuthenticatedUser(token, client)