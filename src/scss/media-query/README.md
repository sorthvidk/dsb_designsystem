# media query

The projects `@media` rule design is based on:  
https://github.com/sass-mq/sass-mq

## Usage
By importing `scss/index.scss`, you will have access to the mixin.  
The available breakpoints are defined in `/breakponts.scss`,  
and can be used with `$from`, `$until` and `$and`.
```scss
// src/my-component.scss
@use 'path/to/scss' as *;

@include mq($from: m) {
    width: 100%;
}
```
For more documentation on usage, we refer to the official [documentation](https://github.com/sass-mq/sass-mq)