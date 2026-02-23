<script lang="ts">
import { ref } from "vue"
import { PhInfo, PhHash, PhGitFork } from "@phosphor-icons/vue"
import { ApiException } from "garage-admin-sdk-ts"
import LayoutAuth from "../components/layouts/Auth.vue"
import createApiClient from "../utils/create-api-client.ts"
import { token as tokenStore } from "../store.ts"
import BannerApiError from "../components/BannerApiError.vue"
import router from "../router/index.ts"

export function goRedirect() {
	const redirect = router.currentRoute.value.query.redirect
	if (typeof redirect === "string") {
		router.push({ path: redirect })
	} else {
		router.push({ path: "/" })
	}
}
</script>

<script setup lang="ts">
const tokenField = ref<string | null>("")
const errorShortMessage = ref<string | null>(null)

const apiError = ref<ApiException<any> | null>(null)

async function submit(event: SubmitEvent) {
	const token = tokenField.value
	event.preventDefault()
	if (token === null) {
		return
	}
	try {
		const client = createApiClient({
			getToken() {
				return token
			},
		})
		const result = await client.admin.getCurrentAdminTokenInfo()
		tokenStore.value = token
		goRedirect()
	} catch (error) {
		if (error instanceof ApiException && error.code === 403) {
			apiError.value = error
		}
	}
}
</script>

<template>
	<LayoutAuth title="Login">
		<form action="" method="post" @submit="submit">
			<div class="f-group">
				<label class="w100" for="token_admin">Admin Token</label>
				<input class="w100" type="text" autocomplete="off" id="token_admin" required v-model="tokenField" />
			</div>
			<div class="f-group" v-if="apiError">
				<BannerApiError :error="apiError" />
			</div>
			<div class="f-group">
				<button class="btn btn--primary btn--big w100">Log In</button>
			</div>
		</form>
		<template #footer>
			<a href="https://garagehq.deuxfleurs.fr/documentation/" class="btn btn--small">
				<PhInfo :size="14" weight="bold" />&nbsp;Documentation
			</a>
			<a href="https://matrix.to/#/#garage:deuxfleurs.fr" class="btn btn--small">
				<PhHash :size="14" weight="bold" />&nbsp;Support channel (Matrix)
			</a>
			<a href="https://git.deuxfleurs.fr/Deuxfleurs/garage-webadmin/" class="btn btn--small">
				<PhGitFork :size="14" weight="bold" />&nbsp;Source code
			</a>
		</template>
	</LayoutAuth>
</template>