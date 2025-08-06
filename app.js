const express = require('express');
const { title } = require('process');
const { default: createHomepageTemplate } = require('./views/index.js');
const { default: createListTemplate } = require('./views/list.js');
const { default: CARD_DATA } = require('./data/data.js');

//express app
const app = express();

//listen request
//app.listen(3000);
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{console.log(`Server is running on port ${PORT}`);});

//midleware & static files
app.use(express.static('public'));

//routes
app.get('/', (req, res) => {
    /*res.send(createHomepageTemplate());*/
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.get('/cards', (req, res) => {
    var info = req.url.slice(7,req.url.length-1);
    console.log(info);
    switch (info) {
        case "all":
            info = "0";
            break;
        case "school":
            info = 1;
            break;
        case "game":
            info = 2;
            break;
        case "prototype":
            info = 3;
            break;
        case "gamejam":
            info = 4;
            break;
        case "tool":
            info = 5;
            break;
        default:
            info = "0";
            break;
    }

    const cards = CARD_DATA.filter((b) => b.Number.includes(info));
    res.send(createListTemplate(cards));
});

app.get('/cards/:title', (req, res) => {
    const card = CARD_DATA.find((b) => b.Project_Title === req.params.title);
    var html = /*html*/``;

    if(card.Button01_Link)
    {
        html += /*html*/`<button class="link" onclick="window.open('${card.Button01_Link}')">${card.Button01_Name}</button>`;
    }
    if(card.Button02_Link)
    {
        html += /*html*/`<button class="link" onclick="window.open('${card.Button02_Link}')">${card.Button02_Name}</button>`;
    }
    if(card.Button03_Link)
    {
        html += /*html*/`<button class="link" onclick="window.open('${card.Button03_Link}')">${card.Button03_Name}</button>`;
    }
    if(card.Button04_Link)
    {
        html += /*html*/`<button class="link" onclick="window.open('${card.Button04_Link}')">${card.Button04_Name}</button>`;
    }
    
    res.send(html);
});

//404 page
app.use((req,res)=>{
    res.status(404).send(createHomepageTemplate());
});