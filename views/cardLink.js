const createLinkTemplate = (links) => /*html*/`
    <button class="link" onclick="window.open('${links[1]}')">${links[0]}</button>
`;

export default createLinkTemplate;