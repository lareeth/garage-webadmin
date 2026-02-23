import { createRouter, createWebHistory } from "vue-router"
import { token } from "../store.ts"

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/login",
			name: "login",
			component: () => import("../views/Login.vue"),
		},
		{
			path: "/",
			name: "dashboard",
			component: () => import("../views/Dashboard.vue"),
		},
	],
})

// Navigation guards

router.beforeEach((to) => {
	const isToLogin = to.name === "login"
	const isAuthenticated = token.value !== null

	if (!isAuthenticated && !isToLogin) {
		return { name: "login", query: { redirect: to.path } }
	}
})

export default router