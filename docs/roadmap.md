# Senaflix roadmap / design notes

This document tracks visual improvements that are worth exploring without mixing unfinished experiments into the stable theme.

## Priority idea — custom generated library covers

### Problem

Jellyfin-generated library thumbnails can contain large, heavy text such as:

- Films
- Films (Cloud)
- Séries
- Collections
- Anime Films

That title is rendered into the image itself, so CSS cannot replace its font, weight or spacing.

This is the main remaining place where the interface can still look visually heavier than the rest of Senaflix.

### Recommended direction

Replace Jellyfin's auto-generated library images with **Senaflix-generated covers**.

The goal is not to use static generic artwork forever. The ideal implementation would still build each cover from the actual content of the corresponding library, while applying the Senaflix design system on top.

Potential pipeline:

1. Select representative posters or backdrops from each Jellyfin library.
2. Generate a 16:9 collage / hero image.
3. Apply a subtle black cinematic gradient for readability.
4. Render the library name with the Senaflix typography system.
5. Upload the resulting image as the library's primary image through Jellyfin.
6. Regenerate the cover when the library changes significantly.

### Visual direction

The first implementation should aim for:

- thinner typography than Jellyfin's default generated text
- consistent text size across libraries
- identical margins and vertical placement
- subtle shadow rather than oversized bold lettering
- dark cinematic treatment that matches the black / anthracite Senaflix UI
- restrained red accent only when useful
- no personal server information embedded in the image

A future self-hosted font such as **Manrope** or **Inter** could make the library covers visually consistent across desktop, Android and iOS regardless of system fonts.

### Automation opportunity

This can eventually be automated so the covers remain dynamic rather than manually maintained.

A small Senaflix helper could:

- query Jellyfin libraries
- pick recent or representative titles
- build the cover
- write the custom title
- push the image back through the Jellyfin API
- run on demand or on a schedule

This would preserve the convenience of Jellyfin's generated library art while bringing the final uncontrolled piece of the home screen into the Senaflix design language.

### Status

**Planned / not implemented yet.**

Do not modify Jellyfin's internal image generator for this unless necessary. A separate cover-generation workflow is preferable because it is easier to maintain across Jellyfin upgrades.
