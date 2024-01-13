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
        Specify what module code is generated.
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

At the _Debug Panel_, click on [create a launch.json file](), and then select `Node.js` as the environment.

`launch.json` will tell VS Code how to debug this program. We're going to use Node (`"type": "node"`) to launch this program. And our program starts at index.ts (`"program": "${workspaceFolder}\\src\\index.ts"`).

We need to add one more setting. We're telling VS Code to use the TypeScript compiler to build our application, using this configuration file.

```json
"preLaunchTask": "tsc: build - tsconfig.json"
```
