# seed-gulp-es6-babel
`seed-gulp-es6-babel` Provides a `es6` `gulp` file using `gulp-babel`.


## Install `gulp`

```bash
yarn -v
yarn global add gulp
gulp -v
```

## Clone and Run `seed-gulp-es6-babel`
```bash
git clone https://github.com/code-seed/seed-gulp-es6-babel.git proj-dir
cd proj-dir
rm -rf .git
yarn install
gulp
```

### Console Screen

```
Hello World!
Hello es6!
```

## Source code

### `gulpfile.babel.js`

```js
const babel = require('gulp-babel');
const gulp = require('gulp');
const gulp_sequence = require('gulp-sequence')

gulp.task('world', () => {
    console.log('Hello world!')
});

gulp.task('es6', () => {
    console.log('Hello es6!')
});

gulp.task('default', gulp_sequence(['world', 'es6']));
```

### `.babelrc`

```json
{
  "presets": ["env"]
}
```

## Resources
- [Babel](https://babeljs.io/)
- [gulp](https://gulpjs.com/)
- [gulp-babel](https://www.npmjs.com/package/gulp-babel)
- [gulp-sequence](https://www.npmjs.com/package/gulp-sequence)
- [yarn](https://yarnpkg.com)
