# filetree.js

Recursively list files in directory hierarchy as a readable tree upto specified depth while excluding unwanted folder names

## Install

### Global

```bash
npm install -g filetree.js
```

### Local

```bash
npm install --save filetree.js
```

## CLI Example

Recursively lists files in myFolder and subdirectories upto two levels down, excluding any file or folder with the name 'node_modules' and 'bower_components'. Includes normally hidden files and folders and does not indent file/folder paths based on their depth level.

```bash
./filetree --path ./myFolder \
           --max-depth 2 \
           --exclude node_modules bower_components \
           --all \
           --no-indent
```

## JavaScript Example

Same as the CLI Example.

```js
var filetree = require('filetree.js');
filetree({
    path: './myFolder',
    maxDepth: 2,
    exclude: ['node_modules', 'bower_components'],
    all: true,
    indent: false
});
```

## JavaScript API

All arguments are optional

### filetree(options)
- options.path
  - String
  - Default = Current working directory
  - Print contents of directory at this path (relative or absolute)
- options.maxDepth
  - Integer
  - Default = Unlimited
  - Maximum directory recursion depth
- options.exclude
  - Array:String
  - Default = []
  - Exclude file and folder names
- options.all
  - Boolean
  - Default = false
  - Include files and folders beginning with a period
- options.indent
  - Boolean
  - Default = true
  - Indent paths based on their depth level

## CLI API

All arguments are optional

```bash
filetree [-p <target path>]
         [-m <max recursion depth>]
         [-x <excluded names>]
         [-a]
         [-i]

Options:
  --path, -p       Print contents of directory at this path (relative or
                   absolute)
                    [string] [default: /Users/aihamhammami/Projects/filetree.js]
  --max-depth, -m  Maximum directory recursion depth        [default: Unlimited]
  --exclude, -x    Exclude file and folder names           [array] [default: []]
  --all, -a        Include files and folders beginning with a period
                                                      [boolean] [default: false]
  --indent, -i     Indent paths based on their depth level
                                                       [boolean] [default: true]
  --version, -V    Show version number                                 [boolean]
  --help, -h       Show help                                           [boolean]

Examples:
  filetree -m 0                Only print root directory
  filetree -m 2                Print root and the two lower levels of
                               directories
  filetree -x build tmp test   Exclude multiple folder names
  filetree -p myGitProject -a  Includes .git which is normally ignored
  filetree --no-indent         Prevent the default indentation

Report bugs at https://github.com/aiham/filetree.js/issues
```

## Tests

Run the tests. Uses: mocha, chai, sinon

```bash
npm test
```

## To Do

- Return paths in JS and print in CLI
- Async with promises rather than synchronous

## Change Log

2015-10-18 - Published v0.0.1
