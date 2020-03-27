import { html } from "lit-html";

import hero from "./../../components/hero/hero.html";
import deck from "./../../components/deck/deck.html";

import heroImage from "Images/dsb_hero.jpg";

export default {
  title: "Pages/Frontpage"
};

export const Default = () => html`
         <div>
           ${hero({ image: heroImage })}
           ${deck({
             // modifier: "-blue",
             width: "-two",
             content:
               html`<p class='headline-5'>When it’s summer in Copenhagen people jump head first into the harbor’s clean waters and enjoy the many outdoor delish eating and drinking options during those white Nordic nights. All year around you can go on a canal tour or rent a small boat to tour the harbor. Visit the many museums, the Queen's castles and enjoy the many green areas and parks and the amazing architecture. Copenhagen can also boast having the oldest and the 5th oldest amusement park in the world – Bakken and Tivoli. There are so many things to explore. You can take a city bike to explore, Copenhagen-style! – or easily use public transportation to get you to wherever you want to go.</p>`
           })}
         </div>
       `;
