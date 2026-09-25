# Troubleshooting

## Movie / series backdrops disappeared

Do not apply an opaque `background` to `body`, `.skinBody`, `.mainAnimatedPage`, `.libraryPage` or `.page`.

Those layers need to remain transparent so Jellyfin's dynamic backdrop can be seen behind them.

The working Senaflix fix is already included in `css/senaflix-theme.css`.

## Progress bars are red on Home but blue in Movies / Series

Jellyfin 12 can use several progress components depending on the view.

Senaflix covers:

- `.itemProgressBarForeground`
- `.MuiLinearProgress-bar*`
- native HTML `progress`

## Admin logo still shows Jellyfin

Jellyfin 12's Modern admin drawer uses a React / MUI header.

The confirmed selector is handled by `js/admin-logo.js`:

```css
body.dashboardDocument .MuiDrawer-paper .MuiList-root:first-of-type img
```

## Mobile drawer is still gray

The Modern Jellyfin 12 mobile drawer is not the legacy `.mainDrawer`.

The working surface is:

```css
.MuiDrawer-paper
```

The final CSS already includes that override.

## Mobile drawer still shows the Jellyfin logo

Use `js/mobile-drawer-logo.js`.

It targets the image inside the first row of the first MUI list in the Modern drawer and replaces it with the current custom favicon/logo.
