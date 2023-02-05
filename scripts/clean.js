import fs from "fs"
const deleteDirectory = "dist"

fs.rm(deleteDirectory, { recursive: true }, (err) => {

	if (err) {
		console.error(err.message)
		return
	}

	console.log(`Deleted the ${deleteDirectory} directory.`)
})
