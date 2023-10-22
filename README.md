<p align="center">
	<img alt="sweclockersdark-logo" src="https://soitora.com/SweClockers-Dark/images/banner.png" width="720">
</p>

## Contributions and Development

If you'd like to contribute to this repository, please follow these steps:

1. ![Fork](https://user-images.githubusercontent.com/136959/42383736-c4cb0db8-80fd-11e8-91ca-12bae108bccc.png) [Fork](https://github.com/Soitora/SweClockers-Dark/fork) the repository.
1. Make sure you have the following installed:
   - [Node.js](http://nodejs.org) **version 16+**, and [pnpm](https://pnpm.io/installation) **version 8+**.
2. Run `pnpm i` to install the necessary Node packages.
3. Make sure your IDE or text editor, such as **Visual Studio Code** or **Notepad++**, supports reading `.editorconfig`.
4. Modify `src/sweclockers-dark.styl`; it's the file that GitHub Actions uses to generate the final ones.

### Live editing methods

This project uses [`browser-sync`](https://www.npmjs.com/package/browser-sync) to inject the generated `.css` file into your browser.

#### Editing using a single script (Recommended)

You can get up and running by simply executing the command `pnpm local`.

This uses `gulp` to start the browser sync and, in the same script, also watches and generates changes done to `src/sweclockers-dark.styl`.

#### Generate and run server separately

To generate `dist/sweclockers-dark.css` file once, run `pnpm stylus`.

If you want it to generate the file every time changes occur to `src/sweclockers-dark.styl`, run `pnpm stylus-watch`.

You can run the `browser-sync` script with `pnpm browser-sync`, and it will inject the `dist/sweclockers-dark.css` file onto a proxied version of [https://www.sweclockers.com/](https://www.sweclockers.com/).
