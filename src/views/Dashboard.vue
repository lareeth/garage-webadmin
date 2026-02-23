<script lang="ts">
import { type NodeResp, type MultiResponseLocalGetNodeInfoResponse } from "garage-admin-sdk-ts"
import { authenticated, token, client } from "../store.ts"
import router from "../router/index.ts"

export function logout() {
	router.push({ name: "login" })
	token.value = null
}
</script>

<script lang="ts" setup>
import { ref, watch } from "vue"
import Logo from "../assets/img/logo.svg?raw"
import { RouterLink } from "vue-router"

const currentNode = ref<MultiResponseLocalGetNodeInfoResponse | undefined>(undefined)
const currentNodeId = ref<string | undefined>(undefined)
const currentNodeDetails = ref<NodeResp | undefined>(undefined)

watch(currentNodeId, async (n, o) => {
	if (n !== undefined) {
		try {
			const cluster = await client.cluster.getClusterStatus()
			const current = cluster.nodes.find((e) => e.id === n)
			currentNodeDetails.value = current
		} catch (error) {
			console.error(error)
			throw error
		}
	}
})

client.node.getNodeInfo("self").then((data) => {
	currentNode.value = data
	currentNodeId.value = Object.keys(data.success)[0]
})
</script>

<template>
	<main style="padding: 2rem">
		<h1><Logo /></h1>
		<pre><code><details :open="!authenticated"><summary>token:</summary>{{ token || "undefined" }}</details></code></pre>
		<p v-if="!authenticated">Not authenticated (→&nbsp;<router-link :to="{ name: 'login' }">go to login</router-link>)</p>
		<pre v-if="authenticated"><code><details open><summary>token infos:</summary>{{ authenticated }}</details></code></pre>
		<pre><code><details open><summary>current node:</summary>{{ currentNodeDetails || "Loading…" }}</details></code></pre>
		<button class="btn btn--small" @click="logout" v-if="authenticated">Log Out</button>
	</main>
</template>