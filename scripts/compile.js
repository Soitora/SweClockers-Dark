import moment from "moment-timezone"
import fs from "fs"
import write from "write"
import prependFile from "prepend-file"

const version = moment(new Date()).tz("Europe/Stockholm").format("YY.DDD.HHmm")
const header = `/* ==UserStyle==
@name			SweClockers Dark
@description	A modern dark theme for SweClockers
@version		` + version + `
@license		MPL-2.0
@author			Soitora <simon.mattila@protonmail.com> (https://soitora.com)
@namespace		https://github.com/Soitora
@homepageURL	https://github.com/Soitora/SweClockers-Dark
@supportURL		https://github.com/Soitora/SweClockers-Dark/issues
@updateURL		https://raw.githubusercontent.com/Soitora/SweClockers-Dark/gh-pages/`

const headerConfig = `\n\n` + fs.readFileSync("src/user.options", "utf8")
const headerEnd = `\n==/UserStyle== */\n`


write.sync("dist/version.info", version, {
	overwrite: true
})

prependFile("dist/sweclockers-dark.css", header + "sweclockers-dark.css" + headerEnd, (err) => { if (err) return handleError(err) })


fs.copyFile("src/sweclockers-dark.styl", "dist/sweclockers-dark.user.styl", (err) => {
	if (err) return handleError(err)

	fs.readFile("dist/sweclockers-dark.user.styl", 'utf8', function(err, data) {
		if (err) return handleError(err)

		let regex = data.replace(/^/gm, "	").replace(/^\t?$/gm, "")
		fs.writeFile("dist/sweclockers-dark.user.styl", regex, 'utf8', function(err) {
			if (err) return handleError(err)

			prependFile("dist/sweclockers-dark.user.styl", `${header}sweclockers-dark.user.styl\n@preprocessor\tstylus${headerConfig}${headerEnd}@-moz-document domain("www.sweclockers.com") {\n`, (err) => { if (err) return handleError(err) })
			fs.appendFile("dist/sweclockers-dark.user.styl", "}", (err) => { if (err) return handleError(err) })
		})
	})
})

function handleError(err) {
	console.log(err)
	process.exit(1)
}
