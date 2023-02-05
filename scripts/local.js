import gulp from "gulp"
import stylus from "gulp-stylus"
import { create as bsCreate } from "browser-sync"
const browserSync = bsCreate()

gulp.task("default", function (done) {
	browserSync.init({
		proxy: "https://www.sweclockers.com",
		serveStatic: ["../dist"],
		files: "../dist/sweclockers-dark.css",
		snippetOptions: {
			rule: {
				match: /<\/head>/i,
				fn: function (snippet, match) {
					return `<link rel="stylesheet" type="text/css" href="/sweclockers-dark.css"/>` + snippet + match
				}
			}
		}
	})
	gulp.watch("../src/sweclockers-dark.styl", gulp.series("styl"))
	done()
})

gulp.task("styl", function () {
	return gulp.src("../src/sweclockers-dark.styl")
		.pipe(stylus())
		.pipe(gulp.dest("../dist/"))
		.pipe(browserSync.reload({ stream: true }))
})
