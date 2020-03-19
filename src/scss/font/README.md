# Font

The font family definitions are not ment to use directly,
but through the corresponding typography component.

However, all the styles are available by including a mixin.

## Usage
```scss
// src/my-component.scss
@include font-family(display);
@include font-typeset(headline-1);
```

## Options
### font-family
- `display` -> Via Office
- `sans-serif` -> Helvetica Neue