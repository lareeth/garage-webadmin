# How to use a pre-release

Instructions on how to run a pre-release version

## Requirements

1. NodeJS installed: https://nodejs.org/en/download
2. A Garage cluster running with an accessible AdminAPI endpoint (depending of the `garage.toml` and your network configuration it may correspond to the `[admin.api_bind_addr]` key)

## Command to launch the local server

```bash
API_HOST=http://localhost:3903 npx vite preview
```

Replace `http://localhost:3903` by your own endpoint