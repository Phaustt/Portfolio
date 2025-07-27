import CARD_DATA from "../data/data.js";

const createCardTemplate = (card) => /*html*/`
    <div class="project-card">
        <div class="project-title">
            <div> ${card.Project_Title} </div>
            <div> ${card.Duration} </div>
        </div>

        <div class="video-wrapper">
            <video src="videos/${card.Media_Name}" class="project-video" controls></video>
        </div>

        <div class="project-links" hx-get="/cards/${card.Project_Title}" hx-trigger="load">
            
        </div>
        <div class="project-description"> ${card.Description} </div>
        <div class="project-text"> ${card.Text} </div>
    </div>
`;

export default createCardTemplate;