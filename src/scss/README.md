# scss/

## Usage
```scss
// src/components/my-component.scss
@use './path/to/scss' as *;

color: $color-foo;
```

## Info
All the internal SCSS that's available to the components.
Includes variables, functions and mixins etc.

Everything that doesn't output any styling itself.

## Dev
Be sure to `@forward` every new file in `scss/index.scss`, 
that you want to make available to the components.

Give it a relevant namespace.