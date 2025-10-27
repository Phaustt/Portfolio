const createCardTemplate = (card) => /*html*/`

        <div class="project-title">
            <div> ${card.Project_Title} </div>
            <div> ${card.Duration} </div>
        </div>

        <div class="video-wrapper">
            <video src="public/videos/${card.Media_Name}" class="project-video" controls></video>
        </div>

        <div class="project-links" id="${card.Project_Title}">
            
        </div>
        <div class="project-description"> ${card.Description} </div>
        <div class="project-text"> ${card.Text} </div>

`;

function makeLink(link, name, id)
{
    const linkbutton = document.createElement("button");
    document.getElementById(id).appendChild(linkbutton);
    linkbutton.outerHTML = `<button class="link" onclick="window.open('${link}')">${name}</button>`;
}

function addLinks(card)
{
    console.log("fuck")
    if(card.Button01_Name != null)
    {
        makeLink(card.Button01_Link, card.Button01_Name, card.Project_Title);
    }
    if(card.Button02_Name != null)
    {
        makeLink(card.Button02_Link, card.Button02_Name, card.Project_Title);
    }
    if(card.Button03_Name != null)
    {
        makeLink(card.Button03_Link, card.Button03_Name, card.Project_Title);
    }
    if(card.Button04_Name != null)
    {
        makeLink(card.Button04_Link, card.Button04_Name, card.Project_Title);
    }
}

function clearLibrary()
{
    //const node = document.createElement("div");
    //node.className = "library-container";
    //node.id = "library-container";
    document.getElementById("library-container").innerHTML = "";
}

function addCards(tag)
{
    clearLibrary();

    index = 0;

    CARD_DATA.forEach(card => {
        if(card.Number.includes(tag))
        {
            const node = document.createElement("div");
            node.className = "project-card";
            node.innerHTML = createCardTemplate(CARD_DATA[index]);
            document.getElementById("library-container").appendChild(node);

            addLinks(card);
        }
        index++;
    });
}

window.onload = function() {
  addCards("0");
};