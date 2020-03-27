import { addons } from "@storybook/addons";
import { create } from "@storybook/theming/create";

addons.setConfig({
  /**
   * Theme
   *
   * Add custom styling of Storybook
   */
  theme: create({
    /**
     * Base
     *
     * What theme to extend from
     */
    base: "light",
    /**
     * Color secondary
     * 
     * Used for highlighting text etc.
     */
    colorSecondary: "#B41730",
    /**
     * Brand title
     */
    brandTitle: "DSB Designsystem - Storybook",
    /**
     * Brand image
     * 
     * The image to show in the top of the sidebar
     */
    brandImage:
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/DSB_company_logo.svg/1200px-DSB_company_logo.svg.png",
    /**
     * Font
     * 
     * What typeface to use in Storybook
     */
    fontBase: '"Helvetica Neue", sans-serif'
  })
});
