<script lang="ts" setup>
import { computed } from "vue"
import { PhInfo, PhWarning } from "@phosphor-icons/vue"

const {
	type = "info",
	title,
	icon = false,
	iconTop = false,
} = defineProps<{
	type?: "info" | "warn" | "error"
	title?: string
	icon?: boolean
	iconTop?: boolean
}>()
</script>

<template>
	<div
		class="banner"
		:class="{
			'banner--warning': type === 'warn',
			'banner--error': type === 'error',
		}"
	>
		<div
			v-if="icon"
			class="banner-ico"
			:class="{
				'banner-ico--top': iconTop,
			}"
		>
			<PhInfo v-if="['info'].includes(type)" :size="24" weight="duotone" />
			<PhWarning v-if="['warn', 'error'].includes(type)" :size="24" weight="duotone" />
		</div>
		<div class="banner-head">
			<div class="banner-title">{{ title }}</div>
			<template v-if="!title"><slot></slot></template>
		</div>
		<div class="banner-actions" v-if="$slots.actions"><slot name="actions"></slot></div>
		<div class="banner-content" v-if="$slots.default && title">
			<slot v-if="title"></slot>
		</div>
	</div>
</template>