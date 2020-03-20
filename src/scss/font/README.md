# Font

In order to keep the system, with a strict component based architecture,
the font typeset definitions are primarly not ment to use directly on a new component,
but by including the different existing typographies.

However, all the styles are still available, though a mixin.

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

## @font-face
In order to keep the project only including the `@font-face` once,  
that file is imported by the `src/index.scss`, directly.