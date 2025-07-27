import CARD_DATA from "../data/data.js";
import createCardTemplate from "./cards.js";

const createListTemplate = (cards) => /*html*/`
    
    ${cards.map((card) => createCardTemplate(card)).join('')}
    
`;

export default createListTemplate;