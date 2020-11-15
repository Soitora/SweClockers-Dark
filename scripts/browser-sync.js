const browserSync = require('browser-sync').create();

browserSync.init({
    proxy: "https://www.sweclockers.com",
    serveStatic: ["dist"],
    files: "dist/sweclockers-dark.css",
    snippetOptions: {
        rule: {
            match: /<\/head>/i,
            fn: function (snippet, match) {
                return '<link rel="stylesheet" type="text/css" href="/sweclockers-dark.css"/>' + snippet + match;
            }
        }
    }
});
