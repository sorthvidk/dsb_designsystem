import { html } from "lit-html";

/**
 * Style
 */
// import "./headline-1/headline-1.scss";
// import "./headline-2/headline-2.scss";
// import "./headline-3/headline-3.scss";
// import "./headline-4/headline-4.scss";
// import "./headline-5/headline-5.scss";
// import "./hero-p/hero-p.scss";
// import "./component-p/component-p.scss";
// import "./standard-p/standard-p.scss";
// import "./trumpet/trumpet.scss";

/**
 * Markup
 */
import headline1 from "./headline-1/headline-1.html";
import headline2 from "./headline-2/headline-2.html";
import headline3 from "./headline-3/headline-3.html";
import headline4 from "./headline-4/headline-4.html";
import headline5 from "./headline-5/headline-5.html";
import heroP from "./hero-p/hero-p.html";
import componentP from "./component-p/component-p.html";
import standardP from "./standard-p/standard-p.html";
import trumpet from "./trumpet/trumpet.html";

export default {
  title: "Components/Typography"
};

/**
 * Show everyone in the same view
 */
export const Overview = () => html`
  <div>
    ${headline1({ text: "Headline 1" })}
    ${headline2({ text: "Headline 2" })}
    ${headline3({ text: "Headline 3" })}
    ${headline4({ text: "Headline 4" })}
    ${headline5({ text: "Headline 5" })}
    ${heroP({ text: "Hero Paragraph" })}
    ${componentP({ text: "Component Paragraph" })}
    ${standardP({ text: "Standard Paragraph" })}
    ${trumpet({ text: "Trumpet" })}
  </div>
`;

/**
 * Headlines
 */
export const Headline1 = () => headline1({ text: "Headline 1" });
export const Headline2 = () => headline2({ text: "Headline 2" });
export const Headline3 = () => headline3({ text: "Headline 3" });
export const Headline4 = () => headline4({ text: "Headline 4" });
export const Headline5 = () => headline5({ text: "Headline 5" });

/**
 * Paragraphs
 */
export const ParagraphHero = () => heroP({ text: "Paragraph Hero" });
export const ParagraphComponent = () => componentP({ text: "Paragraph Component" });
export const ParagraphStandard = () => standardP({ text: "Paragraph Standard" });

/**
 * Trumpet
 */
export const Trumpet = () => trumpet({ text: "Trumpet" });
