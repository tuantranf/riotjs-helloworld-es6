# riotjs-helloworld-es6
Simple hello world with Riot.js/ ES6

# Run
```
$ npm install
$ npm run serve
```

# Babel setting
```
# vim .babelrc
{
  "presets": ["es2015-riot"],
  "plugins": ["external-helpers-2"]
}
```

# Run sript
```
# vim package.json
  "scripts": {
    "compile": "riot --type babel app dist",
    "watch": "riot -w --type babel app dist",
    "browsersync": "browser-sync start --server --files 'dist/*.js, app/*.html' --startPath app",
    "serve": "parallelshell 'npm run watch' 'npm run browsersync'"
  },
```

