# Common Errors

## I. Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Consider adding an extension to the import path.

[(c) Matt Pocock](https://www.totaltypescript.com/relative-import-paths-need-explicit-file-extensions-in-ecmascript-imports)

```javascript
// Example: Trying to import the index file from the logger folder.
import logger from './logger'
```

You need to add the `.js` extension to the import path.

```javascript
import logger from './logger/index.js'
```

### Why do we need to use the JS file extension?

This error happens because you've specified `moduleResolution: NodeNext`. This tells TypeScript that you want your imports and exports to conform strictly to the Node spec.

The Node spec requires that you use `.js` file extensions for all imports and exports. This was decided so that a relative import path like `./foo.js` would work both in Node and in the browser.

This also simplifies Node's module resolution strategy - Node doesn't have to do any guesswork to figure out what file to import.

## What if I don't want to use JS file extension?

Make sure you're using an external file compiler like esbuild to compile your TypeScript code. Then, change your `tsconfig.json` to use `moduleResolution: Bundler` instead of `moduleResolution: NodeNext`.

## II. Types Not Included Upon Publishing

1. At `tsconfig.json`, make sure `declaration` is set to `true`.
2. At `package.json`, make sure you've set the `types` property so that TypeScript knows where to find type definitions.
3. At `package.json`, make sure you've correctly set the value for `files`.
   - Do note that if you've set it as `./dist/*`, it will only include files directly inside the direcory. Hence, Intelisense won't work for any object you've imported (e.g., `logger`).
   - Use `dist`, or `./dist/**`.
   - Do not use `./dist/` as this will only match directories.

## III. Cannot find name 'console'

You will have to install the `@types/node` to get node typings.

```bash
npm install @types/node --save-dev
```
