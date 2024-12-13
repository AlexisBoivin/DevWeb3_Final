URL de l'application en ligne
https://encyclo-pnj.netlify.app/

Procédure d’installation de l’application sur un poste local

git clone https://github.com/AlexisBoivin/DevWeb3_Final.git

npm install


Description sommaire de l’application publiée

    La clientèle visé pour cette application est les maitres de jeu des différents jeux de rôle de table.
    Elle pourra leur servir de bibliothèque pour gérer l'ensemble de leurs personnages non-joueurs, plutôt que d'avoir une montagne de note pappier.
    Ils peuvent retrouver un de leurs personnage en particulier ou bien l'ensemble de ceux-ci. Ils peuvent trié leurs personnages pour savoir lesquels sont toujours vivant et lesquels sont mort de leur univers de jeu.
    Ils peuvent aussi trié les personnages pour savoir lesquels représenteront un défi suffisament élevé pour leurs joueurs lors d'un combat par example grâce au champ "niveau de défi" des personnages.
    L'applcation permet aussi d'ajouter de nouveau personnage, d'en supprimer ou encore d'en modifiant des déjà existant.

    
Informations d’authentification

  Un user qui est présent dans mon jeu de donnée. (En format Json pour être mis dans une requête post)
    {
      "userlogin":{
          "email": "smaxwell@example.com",
          "motdepasse": "trogrlodyte",
          "username": "Sean Maxwell"
      }
  }


  token d'authentification que dont je me servais en développement: 
  eyJhbGciOiJIUzI1NiJ9.c21heHdlbGxAZXhhbXBsZS5jb20.wPOG0anqEuMTZTb0IcJBIul93UBWlnNg9JRXH_xXHcw
