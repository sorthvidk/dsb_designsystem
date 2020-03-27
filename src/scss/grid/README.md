# Grid

The grid is based on a simple flex-box grid.

It includes a few classes to put on the grid-elements in order to place them correctly.

## Flexibility

There are both SCSS functions and -mixins available.

Use the one that suits the situation best.

## Usage

```scss
// src/my-component.scss
@use 'path/to/scss' as *;

.parent {
    @include grid;

    .child {
        // 2 columns wide
        @include width($cols: 2);

        // push the element 1 column to the right
        @include offset($cols: 1)
    }

    .alternative {
        // 2 columns wide
        width: cols(2);
    }
}
```

```html
<!-- src/my-component.html -->
<div class="col-12 col-m-6 col-l-4">
    <!-- 12 columns on mobile -->
    <!-- 6 columns on tablet -->
    <!-- 4 columns on desktop -->
</div>
```