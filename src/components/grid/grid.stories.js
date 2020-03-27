import { allWidths, allOffsets, allClasses } from "./grid.html";

export default {
  title: "Layout/Grid"
};

export const Columns = () => allWidths();

export const Offset = () => allOffsets();

export const Responsive = () => allClasses();
