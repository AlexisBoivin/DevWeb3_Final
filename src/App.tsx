import { useState} from 'react'
import d20 from './assets/D20.png'
import './App.css'
import axios from 'axios'
import Personnage from './components/personnage'
import Formulaire from './components/formulaire'
import { Card, Grid } from '@mui/material'
import { FormattedMessage } from 'react-intl'
// import { IPouvoirProps } from './components/pouvoir'
// import { HomeRoute } from './routes/home.route';
// import Login from './routes/login.route';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [lesPersonnages, setLesPersonnages] = useState<any[]>([])
  const [getid, setgetid] = useState("67409c3156f62ea8f37a08f3");
  const [niveauDefi, setNiveauDefi] = useState(0);
  const [getVivant, setGetVivant] = useState(true);

  const [indexAModifier, setIndexAModifier] = useState(0);
  const [entrainModifier, setEntrainModifier] = useState(false);

  const [ajoutreussi, setAjoutreussi] = useState(false);

 // axios.defaults.headers.common['Authorization'] = "Bearer eyJhbGciOiJIUzI1NiJ9.c21heHdlbGxAZXhhbXBsZS5jb20.wPOG0anqEuMTZTb0IcJBIul93UBWlnNg9JRXH_xXHcw";

  function trouverId(){
    axios.get('https://devweb3-api.onrender.com/pnj/'+ getid, {headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.c21heHdlbGxAZXhhbXBsZS5jb20.wPOG0anqEuMTZTb0IcJBIul93UBWlnNg9JRXH_xXHcw"
   }})
    .then((response) =>{ setLesPersonnages([response.data.pnj])})
    .catch((error) => console.error('Error:', error));
  }

  function trouverTout(){
    axios.get('https://devweb3-api.onrender.com/pnj/',   {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.c21heHdlbGxAZXhhbXBsZS5jb20.wPOG0anqEuMTZTb0IcJBIul93UBWlnNg9JRXH_xXHcw`
      }
    })
    .then((response) => {setLesPersonnages(response.data.pnjs)})
    .catch((error) => console.error('Error:', error));
  }

  function trouverSelonDefi(){
    axios.get('https://devweb3-api.onrender.com/pnj/defi/' + niveauDefi,  {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.c21heHdlbGxAZXhhbXBsZS5jb20.wPOG0anqEuMTZTb0IcJBIul93UBWlnNg9JRXH_xXHcw`
      }
    })
    .then((response) => {setLesPersonnages(response.data.pnjs)})
    .catch((error) => console.error('Error:', error))
  }

  function trouverSiVivant(){
    var parametre;
    if(getVivant == true){
      parametre = "oui";
    }
    else{
      parametre = "non";
    }
    axios.get('https://devweb3-api.onrender.com/pnj/vivant/' + parametre,   {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.c21heHdlbGxAZXhhbXBsZS5jb20.wPOG0anqEuMTZTb0IcJBIul93UBWlnNg9JRXH_xXHcw`
      }
    })
    .then((response) => {setLesPersonnages(response.data.pnjs)})
    .catch((error) => console.error('Error:', error))
  }


  function supprimerPersonnage(identifiant:number){
    axios.delete('https://devweb3-api.onrender.com/pnj/' + identifiant,   {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.c21heHdlbGxAZXhhbXBsZS5jb20.wPOG0anqEuMTZTb0IcJBIul93UBWlnNg9JRXH_xXHcw`
      }
    })
    .then((response) => console.log(response))
    .catch((error) => console.error('Error:', error))
  }

  return (
    <>
      <div>
        <a href="" target="_blank">
          <img src={d20} className="logo react" alt="D20 logo" />
        </a>
      </div>
      <h1><FormattedMessage id="app.titre" defaultMessage="Encyclo-PNJ" /></h1>
      <h4><FormattedMessage id="app.soustitre" defaultMessage="L'outil de gestion de personnage non-joueurs pour les Maitres de jeu."></FormattedMessage></h4>
      
      <div>
        <button onClick={() => trouverId()}>
          <FormattedMessage id="app.bouton.getId" defaultMessage="Trouver à partir de l'identifiant:"></FormattedMessage>
        </button>
        <input type="text" value={getid} onChange={(e) => { setgetid(e.target.value)}}></input>
      </div>
    
      <div>
        <button onClick={() => trouverTout()}>
        <FormattedMessage id="app.bouton.getAll" defaultMessage="Trouver tout les personnages."></FormattedMessage>
        </button>
      </div>
     
      <div>      
        <button onClick={() => trouverSelonDefi()}>
        <FormattedMessage id="app.bouton.getDefi" defaultMessage="Trouver tout les personnages ayant un niveau de défi d'au moins:"></FormattedMessage>
        </button>
        <input type="number" value={niveauDefi} onChange={(e) => { setNiveauDefi(e.target.valueAsNumber)}}></input>
      </div>
     
      <div>
        <button onClick={() => trouverSiVivant()}>
        <FormattedMessage id="app.bouton.getVivant" defaultMessage="Trouver les personnages s'ils sont vivant ou mort.:"></FormattedMessage>
        </button>
        <input type="checkbox" value="Vivant" checked={getVivant} onChange={(e) =>  setGetVivant(e.target.checked)}></input>
      </div>
      <fieldset>
  <legend><FormattedMessage id="formulaire.legende" defaultMessage="Ajouter un personnage."></FormattedMessage></legend>
  <Formulaire 
    formulaireDeModification={false}
    identifiant=''
  ></Formulaire>

</fieldset>

      <div>

        {lesPersonnages.length > 0 ? (
          <Grid container spacing={10}>
          
          {lesPersonnages.map((element, index) => (
            <Grid item xs={12} key={index}>
            <Card sx={{ width: '100%'  }}>
            
            <Personnage
              key={index}
              nom={element.nom}
              dateAjout={element.dateAjout}
              niveauDefi={element.niveauDefi}
              vivant={element.vivant}
              pointVie={element.pointVie}
              pouvoir={element.pouvoirs}
              resume={element.resume}
            />
            {(entrainModifier && indexAModifier == index &&(
              <Formulaire
              formulaireDeModification={true}
              identifiant={element._id}>        
              </Formulaire>
            ))}
            <button onClick={ () =>{
              setEntrainModifier(true);
              setIndexAModifier(index);
            }
            }><FormattedMessage id="personnage.bouton.modifier" defaultMessage="Modifier"></FormattedMessage></button>
            <button onClick={ () =>{
              supprimerPersonnage(element._id);
            }}
            ><FormattedMessage id="personnage.bouton.supprimer" defaultMessage="Supprimer"></FormattedMessage></button>
            </Card>
            </Grid>
          ))}
          </Grid>
        ) : (
          <p><FormattedMessage id="personnage.message.aucun" defaultMessage="Aucun personnage trouvé."></FormattedMessage></p>
        )}
     
      </div>
    </>
  )
}

export default App
