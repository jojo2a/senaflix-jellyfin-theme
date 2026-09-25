# Security / privacy

This is a **public** theme repository.

Do not commit private Jellyfin deployment information.

## Never add

- server URLs or domains
- API keys
- access tokens / bearer tokens
- passwords
- reverse-proxy secrets
- local or public IP addresses
- NAS/storage paths that reveal private infrastructure
- environment files containing credentials

The theme itself does not require a Jellyfin API key.

If a future helper script needs private configuration, keep it outside the repository or use environment variables with an ignored local file.
