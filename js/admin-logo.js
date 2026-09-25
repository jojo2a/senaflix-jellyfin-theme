(() => {
    'use strict';

    function getCustomLogo() {
        const icons = [
            ...document.querySelectorAll(
                'link[rel="icon"], ' +
                'link[rel="shortcut icon"], ' +
                'link[rel="apple-touch-icon"]'
            )
        ];

        for (const icon of icons) {
            if (icon.href) {
                return icon.href;
            }
        }
        return null;
    }

    function replaceAdminLogo() {
        if (!document.body.classList.contains('dashboardDocument')) {
            return;
        }

        const customLogo = getCustomLogo();
        if (!customLogo) return;

        const targets = document.querySelectorAll(
            'body.dashboardDocument ' +
            '.MuiDrawer-paper ' +
            '.MuiList-root:first-of-type img'
        );

        targets.forEach((img) => {
            if (img.src !== customLogo) {
                img.src = customLogo;
            }
            img.style.setProperty('height','2.5rem','important');
            img.style.setProperty('width','auto','important');
            img.style.setProperty('object-fit','contain','important');
        });
    }

    replaceAdminLogo();

    const observer = new MutationObserver(() => {
        replaceAdminLogo();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    let attempts = 0;
    const timer = setInterval(() => {
        replaceAdminLogo();
        attempts++;
        if (attempts >= 20) clearInterval(timer);
    }, 500);
})();
