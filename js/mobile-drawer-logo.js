(() => {
    'use strict';

    function getSenaflixLogo() {
        const icons = document.querySelectorAll(
            'link[rel="icon"], ' +
            'link[rel="shortcut icon"], ' +
            'link[rel="apple-touch-icon"]'
        );

        for (const icon of icons) {
            if (icon.href) {
                return icon.href;
            }
        }

        return null;
    }

    function replaceModernDrawerLogo() {
        const logo = getSenaflixLogo();

        if (!logo) {
            return;
        }

        const target = document.querySelector(
            '.MuiDrawer-paper ' +
            '.MuiList-root:first-of-type ' +
            '.MuiListItem-root:first-child ' +
            '.MuiListItemIcon-root img'
        );

        if (!target) {
            return;
        }

        target.src = logo;

        target.style.setProperty(
            'content',
            `url("${logo}")`,
            'important'
        );

        target.style.setProperty(
            'height',
            '2.7rem',
            'important'
        );

        target.style.setProperty(
            'width',
            'auto',
            'important'
        );

        target.style.setProperty(
            'object-fit',
            'contain',
            'important'
        );
    }

    replaceModernDrawerLogo();

    const observer = new MutationObserver(() => {
        replaceModernDrawerLogo();
    });

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });

    let attempts = 0;

    const timer = setInterval(() => {
        replaceModernDrawerLogo();

        attempts++;

        if (attempts >= 20) {
            clearInterval(timer);
        }
    }, 500);
})();
