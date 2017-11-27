# webpack-scaffold -- electron with express-server

scaffold for maple / dev

### !!update

for react-fiber and more support so remove react-lite

### ~~`react` or `react-dom` for `react-lite`~~

~~vendor size much smaller: from **115kb** to **30kb**~~

### Done

- [x] `babel` compile `js` and `jsx`

- [x] `alias` for `react` and `react-dom` just use `reaxt-lite`, **if meet some bugs can just remove the alias** use real one

- [x] `postcss` and plugins, etc

- [x] `css modules` for add module to `css-loader`

- [x] `webpack-bundle-analyzer` for analyzing modules

- [x] `esLint` for `webpack`, use `recommended`

---

### Bugs

1. use HMR with react-lite will get `TypeError: Cannot read property 'tag' of undefined`

1. it is no es6 support for `webpack` uglifyjs, so install `uglifyjs-webpack-plugin` install

### MIT
