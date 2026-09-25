(() => {
    const STYLE_ID = "senaflix-admin-theme";

    const CSS = `
        :root {
            --jf-palette-primary-main: #c41220 !important;
            --jf-palette-primary-mainChannel: 196 18 32 !important;
            --jf-palette-secondary-main: #e11f2d !important;
        }

        .progressring-spiner,
        .progressring-spinner {
            border-color: #c41220 !important;
        }

        .mdl-spinner__layer-1,
        .mdl-spinner__layer-2,
        .mdl-spinner__layer-3,
        .mdl-spinner__layer-4 {
            border-color: #c41220 !important;
        }

        body.dashboardDocument {
            background:
                radial-gradient(
                    circle at 20% 0%,
                    rgba(120,10,18,.10),
                    transparent 35%
                ),
                #08090a !important;
            color: #f3f3f3 !important;
        }

        body.dashboardDocument .MuiDrawer-paper {
            background:
                linear-gradient(180deg,#0c0c0e,#09090b) !important;
            border-right: 1px solid rgba(255,255,255,.06) !important;
        }

        body.dashboardDocument .MuiListItemButton-root.Mui-selected {
            background: rgba(196,18,32,.18) !important;
            color: #ffffff !important;
            border-left: 3px solid #c41220 !important;
        }

        body.dashboardDocument .MuiListItemButton-root.Mui-selected:hover {
            background: rgba(196,18,32,.24) !important;
        }

        body.dashboardDocument .MuiPaper-root {
            background: #121316 !important;
            border: 1px solid rgba(255,255,255,.06) !important;
            border-radius: 10px !important;
            box-shadow: 0 10px 30px rgba(0,0,0,.25) !important;
        }

        body.dashboardDocument .defaultCardBackground,
        body.dashboardDocument .defaultCardBackground1,
        body.dashboardDocument .defaultCardBackground2,
        body.dashboardDocument .defaultCardBackground3,
        body.dashboardDocument .defaultCardBackground4,
        body.dashboardDocument .defaultCardBackground5 {
            background: linear-gradient(145deg,#1b1c20,#111214) !important;
            color: #ffffff !important;
            border: 1px solid rgba(196,18,32,.13) !important;
        }

        body.dashboardDocument .MuiButton-containedPrimary {
            background: linear-gradient(135deg,#a90f19,#d51f2b) !important;
            color: #ffffff !important;
            border: none !important;
            box-shadow: 0 5px 18px rgba(196,18,32,.22) !important;
        }

        body.dashboardDocument .MuiButton-containedPrimary:hover {
            background: linear-gradient(135deg,#bd1420,#e52735) !important;
        }

        body.dashboardDocument .MuiSvgIcon-colorPrimary,
        body.dashboardDocument .MuiButton-textPrimary {
            color: #d51f2b !important;
        }

        body.dashboardDocument .MuiAvatar-root {
            background: #b3131e !important;
            color: #ffffff !important;
        }

        body.dashboardDocument .MuiLinearProgress-bar {
            background: linear-gradient(90deg,#9d0d17,#e52937) !important;
        }

        body.dashboardDocument .dashboard-appBar {
            background: rgba(8,8,9,.95) !important;
            backdrop-filter: blur(18px);
            -webkit-backdrop-filter: blur(18px);
            border-bottom: 1px solid rgba(255,255,255,.05) !important;
        }
    `;

    function injectSenaflixTheme() {
        if (!document.head) return;
        let style = document.getElementById(STYLE_ID);
        if (!style) {
            style = document.createElement("style");
            style.id = STYLE_ID;
            document.head.appendChild(style);
        }
        style.textContent = CSS;
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", injectSenaflixTheme, { once: true });
    } else {
        injectSenaflixTheme();
    }
})();
