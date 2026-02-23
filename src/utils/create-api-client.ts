import { ServerConfiguration, createConfiguration, type TokenProvider, NodeApi, ClusterApi, AdminAPITokenApi } from "garage-admin-sdk-ts"

export type Client = ReturnType<typeof createClient>

export default function createClient(tokenProvider: TokenProvider) {
	const configuration = createConfiguration({
		baseServer: new ServerConfiguration("/api", {}),
		authMethods: {
			bearerAuth: {
				tokenProvider,
			},
		},
	})
	return {
		node: new NodeApi(configuration),
		cluster: new ClusterApi(configuration),
		admin: new AdminAPITokenApi(configuration),
	}
}