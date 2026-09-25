# Setup

## 1. Custom CSS

Open the Jellyfin dashboard and paste the full contents of:

```
css/senaflix-theme.css
```

into the server Custom CSS field.

The CSS includes:

- Senaflix palette overrides
- dark header and surfaces
- red primary buttons
- red legacy + MUI + native HTML progress bars
- poster hover treatment
- dialogs / forms / scrollbars
- preserved movie and series backdrops
- legacy Jellyfin drawer styling
- Jellyfin 12 Modern / MUI mobile drawer styling

## 2. Custom Logo

Use the Custom Logo plugin for the actual Senaflix logo.

The setup used during development was:

- standalone Senaflix emblem
- keep the native server-name text
- header logo height around `3em`
- optionally hide header text on narrow screens

Using the plugin avoids fighting Jellyfin header branding with fragile CSS pseudo-elements.

## 3. JavaScript Injector

Add the scripts from `js/` as separate scripts.

### admin-theme.js

Purpose: themes the Jellyfin 12 Modern admin dashboard.

Recommended:
- Enabled: yes
- Requires Authentication: yes

### admin-logo.js

Purpose: replaces the Jellyfin logo in the Modern admin drawer with the custom favicon/logo exposed by Custom Logo.

Recommended:
- Enabled: yes
- Requires Authentication: yes

### loader.js

Purpose: removes remaining blue/cyan loading spinners before the main UI is fully rendered.

Recommended:
- Enabled: yes
- Requires Authentication: **no**

### mobile-drawer-logo.js

Purpose: replaces the hard-coded Jellyfin logo in the Jellyfin 12 Modern mobile drawer.

Recommended:
- Enabled: yes
- Requires Authentication: yes

## 4. Reload

After changing CSS or JavaScript:

- Web: hard refresh the page.
- Android / iOS app: fully close and reopen the application if the embedded WebView keeps old styling.

## Client notes

The server Custom CSS is expected to affect clients that render Jellyfin Web. Fully native clients, especially some TV clients, may not reproduce every customization.
