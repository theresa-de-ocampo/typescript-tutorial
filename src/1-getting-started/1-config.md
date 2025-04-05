# I. Getting Started with TypeScript

## I.a. Configuring the TypeScript Compiler

```bash
tsc --init
```

Some of the most useful compiler options are listed below. Press `Ctrl + Space` to see the available values per options.

<table>
  <thead>
    <tr>
      <th>Directory</th>
      <th>Configuration</th>
      <th>Sample Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Language & Environment</td>
      <td><code>target</code></td>
      <td><code>ES2022</code></td>
      <td>Sets the JavaScript language version</td>
    </tr>
    <tr>
      <td>Modules</td>
      <td><code>module</code></td>
      <td>
        <p><code>CommonJS</code> - <code>module.exports</code>, <code>require</code></p>
        <p><code>ES2022</code> (ESmodules) - <code>export</code>, <code>import</code></p>
      </td>
      <td>
        <p>Specify what module code is generated.</p>
        <p>Determines the type of import or export used.</p>
        <p>
          If you encountered <code>ReferenceError: exports is not defined</code>`, while trying to run <code>node ./dist/index</code>, you need to configure <code>module</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td>Modules</td>
      <td><code>rootDir</code></td>
      <td>
        <code>./</code> or <code>./src</code>
      </td>
      <td>
        Specify the root folder within your source files.
      </td>
    </tr>
    <tr>
      <td>Modules</td>
      <td><code>moduleResolution</code></td>
      <td>
        <code>node16</code> or <code>nodeNext</code>
      </td>
      <td>
        <p>Specify how TypeScript looks up a file from a given module specifier.</p>
        <p>
          It determines the algorithm used for findind or resolving modules, e.g., looking in <code>node_modules</code> or searching relative paths.
        </p>
      </td>
    </tr>
    <tr>
      <td>Emit</td>
      <td><code>outDir</code></td>
      <td><code>./dist</code></td>
      <td>Specify an output folder for all emitted files.</td>
    </tr>
    <tr>
      <td>Emit</td>
      <td><code>removeComments</code></td>
      <td><code>true</code></td>
      <td>Disable emitting comments.</td>
    </tr>
    <tr>
      <td>Emit</td>
      <td><code>noEmitOnError</code></td>
      <td><code>true</code></td>
      <td>Disable emitting files if any type checking errors are reported.</td>
    </tr>
    <tr>
      <td>Emit</td>
      <td><code>sourceMap</code></td>
      <td><code>true</code></td>
      <td>Create source map files for emitted JavaScript files.</td>
    </tr>
    <tr>
      <td>Emit</td>
      <td><code>esModuleInterop</code></td>
      <td><code>true</code></td>
      <td>
        Emit additional JavaScript to ease support for importing CommonJS modules.
        This enables <code>allowSyntheticDefaultImports</code> for type compatibility.
      </td>
    </tr>
    <tr>
      <td>Type Checking</td>
      <td><code>strict</code></td>
      <td><code>true</code></td>
      <td>Enable all strict type-cheking options</td>
    </tr>
    <tr>
      <td>Type Checking</td>
      <td><code>noImplicitAny</code></td>
      <td><code>true</code></td>
      <td>
        <p>Enable error reporting for expressions, and declarations with an implied <code>any</code> type.</p>
        <p>Setting it to <code>false</code> is useful when migrating a JS app, but is not recommended.</p>
      </td>
    </tr>
    <tr>
      <td>Type Checking</td>
      <td><code>noUnusedLocals</code></td>
      <td><code>true</code></td>
      <td>
        Enable error reporting when local variables aren't read.
      </td>
    </tr>
    <tr>
      <td>Type Checking</td>
      <td><code>noUnusedParameters</code></td>
      <td><code>true</code></td>
      <td>
        Useful to set it to true since it is not part of the <code>strict</code> specification.
      </td>
    </tr>
    <tr>
      <td>Type Checking</td>
      <td><code>noImplicitReturns</code></td>
      <td><code>true</code></td>
      <td>Enable error reporting for codepaths that do not explicitly return in a function.</td>
    </tr>
    <tr>
      <td>Type Checking</td>
      <td><code>strictNullChecks</code></td>
      <td><code>true</code></td>
      <td>
        <p>
          If <code>strict</code> is set to true, <code>strictNullChecks</code> is also automatically set to true.
        </p>
        <p>When type checking, take into account <code>null</code>, and <code>undefined</code>. Hence, if you pass <code>null</code> as a parameter to a function that expects a string, it will immediately throw an error.</p>
      </td>
    </tr>
    <tr>
      <td>Type Checking</td>
      <td><code>allowUnreachableCode</code></td>
      <td><code>true</code></td>
      <td>
        <p>Disable error reporting for unreachable code.</p>
        <p>Setting it to <code>false</code> might not be helpful if you throw errors.</p>
      </td>
    </tr>
  </tbody>
</table>

In order to then compile all of your files in this project:

```bash
tsc
```

Then run it with:

```bash
node dist/index.js
```

## I.b. Debugging TypeScript Applications

At `tsconfig.json`, make sure `sourceMap` is enabled. Source Map is a file that specifies how each line of our TypeScript code, maps to the generated JavaScript code.

At the _Debug Panel_, create a `launch.json` file and then select `Node.js` as the environment.

`launch.json` will tell VS Code how to debug this program. We're going to use Node (`"type": "node"`) to launch this program. And our program starts at `index.ts` (`"program": "${workspaceFolder}\\src\\index.ts"`).

We need to add one more setting. We're telling VS Code to use the TypeScript compiler to build our application, using this configuration file.

```json
"preLaunchTask": "tsc: build - tsconfig.json"
```

https://theodorusclarence.com/shorts/react/namespace-vs-named

https://medium.com/unsplash/named-namespace-imports-7345212bbffb

# II. Understanding `esModuleInterop`

[(c) StackOverflow](https://stackoverflow.com/questions/56238356/understanding-esmoduleinterop-in-tsconfig-file)

## II.a. Pre-requisite: Namespace vs. Named Imports

[(c) Theodorus Clarence](https://theodorusclarence.com/shorts/react/namespace-vs-named)

What's the difference between these two imports?

```javascript
import * as React from 'react`;
import { useState, useEffect }  from 'react';
```

Does it mean by using `import *`, it will import all of them, even the unused one to the production?

Turns out, it won't.

### Exported

We have these components exported from `components.js`.

```javascript
export const A = () => 'A Component'
export const B = () => 'B Component'
export const C = () => 'C Component'
```

### Namespace Import

Imports all of the exported variables from a file under one name.

```javascript
import * as Components from './components'

<Components.A />
<Components.B />
```

### Named Import

Import specific variables from a file while using the original variable name.

```javascript
import { A, B } from './components'

<A />
<B />
```

### Tree-Shaking

Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code. It relies on the import and export statements to detect if code modules are exported and imported for use between JavaScript files.

Both imports can be tree-shaken. If we look at the production build, only _"A Component"_ and _"B Component"_ will be there and _"C Component"_ will not be shipped to production. You can check this by searching through the build (`Ctrl + F`).

There is also a new technique called named namespace imports that can also be tree-shaken. The downside is that you have to define an intermediary module to import and then re-export the namespace. You can read more at [medium.com](https://medium.com/unsplash/named-namespace-imports-7345212bbffb)

```javascript
export * as Components from './components'
```

## II.b. Problem Statement

Problem occurs when we want to import CommonJS module into ES6 module codebase.
Before these flags we had to import CommonJS modules with star (`* as something`) import:

```javascript
// node_modules/moment/index.js
exports = moment
```

```javascript
// index.ts file in our app
import * as moment from 'moment'
moment() // not compliant with ES6 module spec

// transpiled js (simplified)
const moment = require('moment')
moment()
```

We can see that `*` was somehow equivalent to `exports` variable.
It worked fine, but it wasn't compliant with ES6 module spec.
In the spec, the namespace record in star import (`moment` in our case) can only be a plain object,
not callable (`moment()` was not allowed).

## II.c. Solution

With the flag `esModuleInterop` we can import CommonJS modules in compliance with ES6 modules spec.
Now our import code looks like this:

```javascript
import moment from 'moment'
moment() // compliant with ES6 module scpec

// transpiled js with esModuleInterop (simplified)
const moment = __importDefault(require('moment'))
moment.default()
```

It works and it's perfectly valid with ES6 modules spec, because `moment` is not a namespace from
star import, it's default import.

## III. Do we need `allowSyntheticDefaultImports` if `esModuleInterop` is `true`?

[(c) StackOverflow](https://stackoverflow.com/questions/52576203/do-i-ever-need-explicit-allowsyntheticdefaultimports-if-esmoduleinterop-is-true)

No. You can leave `allowSyntheticDefaultImports` undefined and define only `esModuleInterop`. As to why both exists, they were both part of addressing compatibility issues with imports of Babel-transpiled modules. The original PR added the `allowSyntheticDefaultImports` option to certain compile-time messages. In practice, it didn't address the runtime behavior of the imports so `esModuleInterop` was added later.
