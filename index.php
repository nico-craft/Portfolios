<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>PortFolio</title>
        <link rel="stylesheet" href="style.css">
        <script src="scripte.js"></script>
    </head>
    <body>
        <div class="start page">
            <div class="block">
                <h1>Bienvenue<br>au portfolio<br>de<br>DONG Nicolas</h1>
                <p>Utiliser les flèches (Gauche/Droite) pour déplacer les images.</p>
            </div>
        </div>
        <div class="navBar page">
            <h1>Sommaire</h1>
            <div class="box"><button class="navButton">Profil</button>
                <button class="navButton">Liste des projets fait</button>
                <button class="navButton">Mes expériences professionnel</button>
                <button class="navButton">Me contacter / CV</button>
                <div class="content">
                    <ul>
                        <li class="who">Qui je suis</li>
                        <li class="desc">Description</li>
                        <li class="skill">Mes compétences</li>
                        <li class="hobbie">Mes passions</li>
                    </ul>
                </div>
                <div class="content">
                    <ul>
                        <li class="loPro">Projet à long durée</li>
                        <li class="shPro">Projet à court durée</li>
                        <li class="otPro">Autre type de projet</li>
                    </ul>
                </div>
                <div class="content">
                    <ul>
                        <li class="wWeb">En tant que developper WEB</li>
                        <li class="wOther">Autre</li>
                    </ul>
                </div>
                <div class="content">
                    <ul>
                        <li class="mail">Mail</li>
                        <li class="phone">Téléphone</li>
                        <hr>
                        <li class="cv">CV</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="profil page">
            <div class="qui">
                <div class="img">
                    <img src="image/Photo_profil.jpg" alt="Photo profil" class="photo">
                </div>
                <div class="text">
                    <p>DONG Nicolas<br>
                    DEVELOPPER WEB</p>
                </div>
            </div>
            <div class="description">
                Description
            </div>
            <div class="competence">
                <h1>Mes compétences :</h1>
                <div class="box">
                    <div class="miniBox">
                        Web :
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScripte</li>
                            <li>PHP</li>
                        </ul>
                    </div>
                    <div class="miniBox">
                        Informatique :
                        <ul>
                            <li>Word</li>
                            <li>Excel</li>
                            <li>PowerPoint</li>
                        </ul>
                    </div>
                    <div class="miniBox">
                        Qualitées
                        <ul>
                            <li>Travail d'équipe</li>
                            <li>Adaptater au situation</li>
                        </ul>
                    </div>
                    <div class="miniBox">
                        Langues pratiquées :
                        <ul>
                            <li>Anglais</li>
                            <li>Chinois</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="passion">
                <h1>Centre d'intérêt :</h1>
                <div class="box">
                    <div class="miniBox">
                        Mes passions :
                        <ul>
                            <li>Déssin</li>
                            <li>Manga</li>
                            <li>Jeu vidéo</li>
                        </ul>
                    </div>
                    <div class="miniBox">
                        Voyages :
                        <ul>
                            <li>Chine</li>
                            <li>Italie</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class=page>
            <h1>Les projects</h1>
            Projet à long terme
            <ul>
                <li><a href="project/project_1" target="_blank">Project 1</a></li>
                <li><a href="project/project_2" target="_blank">Project 2</a></li>
            </ul>
            Projet à court terme
            <ul>
                <li><a href="" target="_blank"></a></li>
                <li><a href="" target="_blank"></a></li>
            </ul>
        </div>
        <div class=page>
            <h1>Les travaux professionnel</h1>
            <ul>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div class="contact page">
            <div class="block">
                <div class="miniblock">
                    Me contacter par :
                    <div class="email">
                        <span class="space title">Mail :</span> <br>
                        <span class="space">Mail à</span> <input type="text" class="mailTo" value="nicolas.dong.pro@gmail.com" disabled><br>
                        <span class="space">Objet</span> <input type="text" class="mailObject" placeholder="Objet"><br>
                        <span class="space">Contenue</span> <textarea class="mailContent" placeholder="Content"></textarea><br>
                        <br>
                        <a href="mailto:nicolas.dong.pro@gmail.com?subject=Contacter&body=XD" class="send">Envoyer</a>
                    </div>
                    <div class="call">
                        <span class="space title">Téléphone :</span> <br>
                        07 83 53 66 48
                    </div>
                </div>
                <div class="bottom">
                    <p class="secret">A-tu éssayer : ↑ ↑ ↓ ↓ ← → ← → B A</p>
                </div>
            </div>
        </div>
    </body>
</html>