<p align="center">
	<img alt="sweclockersdark-logo" src="https://soitora.com/SweClockers-Dark/images/banner.png" width="720">
</p>

## Contributions and Development

If you would like to contribute to this repository, please...

1. [![fork](https://user-images.githubusercontent.com/136959/42383736-c4cb0db8-80fd-11e8-91ca-12bae108bccc.png) Fork](https://github.com/Soitora/SweClockers-Dark/fork) the repository then clone it locally.
2. Make sure you have these installed:

- [`node`](https://nodejs.org): version 12 or greater

3. Run `npm install` to install the necessary node packages.

4. Make sure your IDE or text editor such as Visual Studio Code / Notepad++ supports reading `.editorconfig`.

5. Modify `src/sweclockers-dark.styl`, it's the file that GitHub Actions uses to generate the final ones.

### Live editing

This project uses [`browser-sync`](https://www.npmjs.com/package/browser-sync) to inject the generated `.css` file into your browser.

You can run `npm run compile`/`npm run compile-windows` for it to generate all the files once, this is primarily used by the GitHub Actions script.

Alternatively (**recommended**), you can run `npm run watch` and it will create the `.css` file specifically and always recreate it when you edit `src/sweclockers-dark.styl`

To start the `browser-sync` script, run `npm run local` and it will inject the now generated `dist/sweclockers-dark.css`. You _should_ now be able to see changes live at `https://localhost:3000`.

_**Note**: I'm looking at ways of combining the above into a single script but for now it'll require two terminals._
