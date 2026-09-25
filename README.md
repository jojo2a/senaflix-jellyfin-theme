# Senaflix — Jellyfin Theme

A premium dark Jellyfin 12.1 customization built around a black / anthracite UI with restrained cinematic red accents.

This repository contains the **public, reusable theme code only**. It intentionally contains **no server URL, API key, token, private path, or personal configuration**.

## Preview / branding

Senaflix uses a dark cinema-inspired identity with:

- black / anthracite surfaces
- deep red primary actions
- custom Senaflix branding
- red progress bars and loaders
- polished cards, dialogs and navigation
- preserved movie / series backdrops
- themed Jellyfin 12 Modern / MUI drawers
- desktop + mobile styling

The theme has been confirmed working on Jellyfin 12.1 in the web client and the official Android app. Web-based iOS clients should inherit the same server-side CSS, although platform-specific layout differences can exist.

## Repository

```text
css/
  senaflix-theme.css

js/
  admin-theme.js
  admin-logo.js
  loader.js
  mobile-drawer-logo.js

docs/
  setup.md
  troubleshooting.md

assets/
  README.md
```

## Requirements

- Jellyfin 12.1
- Jellyfin **Custom Logo** plugin
- Jellyfin **JavaScript Injector** plugin

The core theme works through Jellyfin Custom CSS. The JavaScript files are only used for areas of Jellyfin 12's Modern / React interface that are not consistently covered by server Custom CSS alone.

## Quick install

1. Copy `css/senaflix-theme.css` into Jellyfin's **Custom CSS** field.
2. Install and configure **Custom Logo** with your Senaflix logo.
3. Add the scripts from `js/` to **JavaScript Injector**.
4. For `loader.js`, keep **Requires Authentication disabled** so the loader can be recolored before the user session is fully initialized.
5. For the admin/logo scripts, **Requires Authentication can be enabled**.
6. Fully reload Jellyfin. On mobile, completely closing and reopening the app may be required because the embedded WebView can cache UI state.

See [docs/setup.md](docs/setup.md) for the full setup.

## Important

Jellyfin 12 is actively moving parts of the interface to React / MUI. Some selectors in this repository intentionally target Jellyfin 12 Modern components such as `.MuiDrawer-paper`.

That means a future Jellyfin release may require small selector updates.

## Privacy

This public repository must stay generic.

Never commit:

- Jellyfin server URLs
- API keys
- access tokens
- reverse-proxy credentials
- local IP addresses
- private storage paths
- personal screenshots containing sensitive information

See [SECURITY.md](SECURITY.md).
