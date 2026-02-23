import { ref, watch } from "vue"

export default (key: string, defaultValue: any) => {
	const item = localStorage.getItem(key)
	const value = ref(item !== null ? JSON.parse(item) : defaultValue)

	watch(value, (newValue) => {
		localStorage.setItem(key, JSON.stringify(newValue))
	})

	return value
}