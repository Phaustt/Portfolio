const createHomepageTemplate = () => /*html*/`
    <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Caleb's Portfolio</title>
            <script src="https://unpkg.com/htmx.org@2.0.4" integrity="sha384-HGfztofotfshcF7+8n44JQL2oJmowVChPTg48S+jvZoztPfvwD79OC/LTtG6dMp+" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="style.css">
        </head>

<body>
    <div class="wrapper">

        <div class="top-banner">
            <div class="top-banner-item"> Caleb Aïdam </div>
            <div class="top-banner-item"> Game developpeur </div>
            <div class="top-banner-item">  </div>
        </div>

        <div class="container">

            <div class="main"> 
                <div class="window">
                    <div class="library">
                        <div class="library-title">
                            LIBRARY
                        </div>

                        <div class="library-navigation">
                            <button hx-get="/cards" hx-target=".library-container" hx-trigger="click" name="name" class="nav-button">Tout</button>
                            <button hx-get="/cards" hx-target=".library-container" hx-trigger="click" name="school" class="nav-button">Scolarité</button>
                            <button hx-get="/cards" hx-target=".library-container" hx-trigger="click" name="game" class="nav-button">Jeu</button>
                            <button hx-get="/cards" hx-target=".library-container" hx-trigger="click" name="prototype" class="nav-button">Prototype</button>
                            <button hx-get="/cards" hx-target=".library-container" hx-trigger="click" name="gamejam" class="nav-button">Game Jam</button>
                            <button hx-get="/cards" hx-target=".library-container" hx-trigger="click" name="tool" class="nav-button">Outils</button>
                        </div>

                        <div class="library-container"  hx-get="/cards" hx-trigger="load">
                            <!-- card spanw point-->
                        </div>
                    </div>

                    <!--<div class="articles">
                        Articles
                    </div>-->
                </div>

                <div class="bottom-banner">
                    Latest update 27/07/2025
                </div>
            </div>

            <div class="side"> 
                <div class="side-left"></div>

                <div class="side-right">
                    <div class="button-banner">
                        <button type="button" class="social-button" onclick="window.open('https://www.linkedin.com/in/caleb-aïdam/','_blank')"><img src="images/linkedin.png" alt="" class="social-button-image"></button>
                        <button type="button" class="social-button" onclick="window.open('https://www.youtube.com/watch?v=HptHiJJJwBM','_blank')"><img src="images/github.png" alt="" class="social-button-image"></button>
                        <button type="button" class="social-button" onclick="window.open('https://oopsi.itch.io','_blank')"><img src="images/itchio-logo-textless-black.png" alt="" class="social-button-image"></button>

                    </div>

                    <div class="about"> 

                        <button type="button" class="about-button" onclick="window.open('docs/CV_CalebAIDAM.pdf','_blank')"></button>
                        <div class="about-text"> ABOUT </div>
                    
                    </div>
                </div>


            </div>
            
        </div>

    </div>
</body>
    </html>  
`

export default createHomepageTemplate;