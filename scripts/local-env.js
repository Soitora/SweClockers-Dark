/**
 * Require Browsersync
 */
var browserSync = require('browser-sync').create();

/**
 * Run Browsersync with server config
 * You can use an arrays for files to specify multiple files
 */
browserSync.init({
    proxy: "https://www.sweclockers.com",
    serveStatic: ["dist"],
    files: "dist/sweclockers-dark.user.css",
    snippetOptions: {
        rule: {
            match: /<\/head>/i,
            fn: function (snippet, match) {
                return '<link rel="stylesheet" type="text/css" href="/sweclockers-dark.user.css"/>' + snippet + match;
            }
        }
    }
});
