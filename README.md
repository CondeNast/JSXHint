[![build status](https://secure.travis-ci.org/CondeNast/JSXHint.png)](http://travis-ci.org/CondeNast/JSXHint)

# THIS PROJECT IS NO LONGER MAINTAINED

JSHint 2.2.0 supports an "ignore" statement which can be used to wrap blocks of code which should be passed over by the linter.

```javascript
/* jshint ignore:start */
<div><span></span></div>
/* jshint ignore:end */
```

I feel this is a much better solution than transforming and wrapping JSHint with a series of transforms since the code produced by JSX's transpiler might produce code which does not comply to your internal lint/hint guidelines.

If you feel you need to use a wrapper around JSHint and want to have JSHint run on your transformed JSX code, please see [STRML/JSXHint](STRML/JSXHint)
