import { ref, type Ref, watch, onWatcherCleanup } from "vue"
import { GetAdminTokenInfoResponse } from "garage-admin-sdk-ts"
import { type Client } from "./create-api-client.ts"

export default (token: Ref<string>, client: Client) => {
	const authenticated = ref<null | GetAdminTokenInfoResponse>(null)
	watch(
		token,
		(newToken) => {
			const controller = new AbortController()

			onWatcherCleanup(() => {
				controller.abort()
			})

			authenticated.value = null
			if (newToken !== null) {
				authenticated.value = null
				client.admin.getCurrentAdminTokenInfo().then((data) => {
					if (!controller.signal.aborted) {
						authenticated.value = data
					}
				})
			}
		},
		{ immediate: true },
	)
	return authenticated
}