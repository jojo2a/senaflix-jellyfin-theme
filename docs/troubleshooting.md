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

## Typography created square boxes instead of icons

Cause: a global selector such as:

```css
body *
```

forces the normal UI font onto Jellyfin's icon-font elements.

Result: icons that rely on Material Icons or related glyph fonts can appear as empty squares.

Fix: remove the universal font override and use the safe text-only selectors included under:

```
SENAFLIX — TYPOGRAPHY V3 SAFE
```

in `css/senaflix-theme.css`.

## Section-title arrow looks slightly too high

The text and arrow can use different font metrics, so baseline alignment is not always visually centered after changing the UI typography.

Senaflix fixes this by using:

```css
.sectionTitleTextButton {
    display: inline-flex !important;
    align-items: center !important;
}

.sectionTitleTextButton .material-icons {
    transform: translateY(1px);
}
```

## The font inside library thumbnails does not change

This is expected.

The large title visible inside generated library thumbnails is baked into the image produced by Jellyfin. It is not normal page text and therefore cannot be changed with the Senaflix CSS typography rules.

A custom/generated library-cover system is the recommended future improvement. See [roadmap.md](roadmap.md).

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
