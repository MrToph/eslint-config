# eslint-config-cmichel

Forked from [eslint-config-okonet](https://www.npmjs.com/package/eslint-config-okonet).

## Installation

1. `npm install --save-dev eslint eslint-config-cmichel`
2. Add following block to `package.json`

```json
"eslintConfig": {
    "extends": [
      "cmichel"
    ]
  }
```

This will add generic config.

For React.js projects, extend from `cmichel/react`

For React.js projects, extend from `cmichel/vue`

For Node.js projects, extend from `cmichel/node`

> If you're working with node make sure to add the "engines" field to your package.json
> "engines": {
>   "node": ">=8.0.0"
> },