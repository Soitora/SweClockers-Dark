const gulp = require("gulp");
const stylus = require("gulp-stylus");
const browserSync = require("browser-sync").create();

gulp.task('default', function (done) {
	browserSync.init({
		proxy: "https://www.sweclockers.com",
		serveStatic: ["../dist"],
		files: "../dist/sweclockers-dark.css",
		snippetOptions: {
			rule: {
				match: /<\/head>/i,
				fn: function (snippet, match) {
					return `<link rel="stylesheet" type="text/css" href="/sweclockers-dark.css"/>` + snippet + match;
				}
			}
		}
	});
	gulp.watch("../src/sweclockers-dark.styl", gulp.series("styl"));
	done();
});

gulp.task("styl", function () {
	return gulp.src("../src/sweclockers-dark.styl")
		.pipe(stylus())
		.pipe(gulp.dest("../dist/"))
		.pipe(browserSync.reload({stream: true}));
});
