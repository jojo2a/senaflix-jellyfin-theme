(() => {
    'use strict';

    const RED = '#c41220';
    const RED_BRIGHT = '#e11f2d';

    const style = document.createElement('style');
    style.id = 'senaflix-loader-theme';

    style.textContent = `
        :root,
        html,
        body {
            --jf-palette-primary-main: ${RED} !important;
            --jf-palette-primary-light: ${RED_BRIGHT} !important;
            --jf-palette-primary-dark: #870d16 !important;
            --jf-palette-secondary-main: ${RED_BRIGHT} !important;
        }

        .progressring-spiner,
        .progressring-spinner {
            border-color: ${RED} !important;
            color: ${RED} !important;
        }

        .mdl-spinner__layer-1,
        .mdl-spinner__layer-2,
        .mdl-spinner__layer-3,
        .mdl-spinner__layer-4 {
            border-color: ${RED} !important;
        }

        .mdl-spinner__circle-clipper,
        .mdl-spinner__circle {
            border-color: ${RED} !important;
        }

        .MuiCircularProgress-root {
            color: ${RED} !important;
        }

        .MuiCircularProgress-circle {
            stroke: ${RED} !important;
        }

        .itemProgressBarForeground,
        .playedIndicator,
        .selectionCommandsPanel {
            background: ${RED} !important;
        }
    `;

    if (document.head) {
        document.head.prepend(style);
    } else {
        document.documentElement.appendChild(style);
    }

    document.documentElement.style.setProperty(
        '--jf-palette-primary-main', RED, 'important'
    );
    document.documentElement.style.setProperty(
        '--jf-palette-secondary-main', RED_BRIGHT, 'important'
    );

    function forceRedLoaders() {
        document.querySelectorAll(
            '.progressring-spiner, ' +
            '.progressring-spinner, ' +
            '.MuiCircularProgress-root'
        ).forEach(el => {
            el.style.setProperty('color', RED, 'important');
            el.style.setProperty('border-color', RED, 'important');
        });

        document.querySelectorAll(
            '.MuiCircularProgress-circle'
        ).forEach(el => {
            el.style.setProperty('stroke', RED, 'important');
        });
    }

    forceRedLoaders();

    new MutationObserver(forceRedLoaders).observe(
        document.documentElement,
        {
            childList: true,
            subtree: true
        }
    );
})();
