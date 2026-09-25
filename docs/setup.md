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
- lighter Senaflix typography
- optical alignment for section-title arrows

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

## 4. Typography

Senaflix now uses a lighter text treatment to reduce the stock, heavy Jellyfin look.

The current safe typography block is included directly in `css/senaflix-theme.css` under:

```
SENAFLIX — TYPOGRAPHY V3 SAFE
```

### Important implementation note

Do **not** apply the font with a universal selector such as:

```css
body *
```

Jellyfin uses icon fonts for many controls. Forcing the normal text font onto every element can replace icon glyphs with empty square boxes.

The safe implementation only targets text-bearing elements such as:

- section titles
- top navigation
- card titles and metadata
- MUI typography
- list-item text

The section-title arrow is also optically aligned using an inline-flex container and a small `translateY(1px)` adjustment.

## 5. Library thumbnail title limitation

The large titles visible **inside** library thumbnails — for example `Films`, `Séries`, `Collections` or `Films (Cloud)` — are not ordinary DOM text that Senaflix CSS can restyle.

When Jellyfin generates those library images, the title is baked into the generated bitmap itself.

As a result:

- changing `.cardText` does not affect the text inside those thumbnails
- changing the global font does not affect it either
- the CSS selector `.cardImageContainer > .cardDefaultText` only applies to fallback cards where Jellyfin has no image

See [roadmap.md](roadmap.md) for the recommended future improvement.

## 6. Reload

After changing CSS or JavaScript:

- Web: hard refresh the page.
- Android / iOS app: fully close and reopen the application if the embedded WebView keeps old styling.

## Client notes

The server Custom CSS is expected to affect clients that render Jellyfin Web. Fully native clients, especially some TV clients, may not reproduce every customization.
