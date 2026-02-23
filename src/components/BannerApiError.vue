<script lang="ts" setup>
import { ref, computed } from "vue"
import Banner from "./Banner.vue"
import { type ApiException } from "garage-admin-sdk-ts"
import { PhCaretDown, PhCaretUp } from "@phosphor-icons/vue"

const props = defineProps<{
	error: ApiException<any>
}>()

const errorMessage = computed(() => {
	return JSON.parse(props.error.body).message
})

const errorLogs = computed(() => {
	const data = { ...props.error, body: JSON.parse(props.error.body) }
	return JSON.stringify(data, null, "\t")
})

const errorCodesToLog = [500]

const logsExpanded = ref<boolean>(false)
</script>

<template>
	<Banner type="error" icon iconTop>
		<div>{{ errorMessage }}</div>
		<pre class="banner-logs" v-if="logsExpanded && errorCodesToLog.includes(props.error.code)">{{ errorLogs }}</pre>
		<template #actions v-if="errorCodesToLog.includes(props.error.code)">
			<button class="btn btn--small" type="button" :aria-expanded="logsExpanded" @click="logsExpanded = !logsExpanded">
				Logs
				<PhCaretDown v-if="!logsExpanded" :size="14" weight="bold" />
				<PhCaretUp v-if="logsExpanded" :size="14" weight="bold" />
			</button>
		</template>
	</Banner>
</template>