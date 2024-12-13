import { useEffect, useState } from 'react';
import './personnage.css'
import axios from 'axios';
import Personnage from './personnage';
import { FormattedMessage } from 'react-intl';


interface IFormulaireProps {
    formulaireDeModification:boolean;
    identifiant:string;
}

interface FormulairePouvoir {
    nom: string;
    cout: string;
    description: string;
}

/**
 *
 */

const Formulaire = (props: IFormulaireProps) => { 

    const [formulairePrenom, setFormulairePrenom] = useState("");
    const [formulaireNom, setFormulaireNom] = useState("");
    const [dateDuJour] = useState(new Date());
    const [formulaireNiveauDefi, setFormulaireNiveauDefi] = useState(0);
    const [formulaireVivant, setFormulaireVivant] = useState(true);
    const [formulairePointVie, setFormulairePointVie] = useState(0);
    const [tableauPouvoir, setTableauPouvoir] = useState<FormulairePouvoir[]>([])
    const [formulaireResume, setFormulaireResume] = useState("");
    
    /**
     * Fonction qui est fait une requête post à l'API. 
     * Elle envoit les informations contenue dans le formulaire d'Ajout de personnage dans le body de la requête.
     */
    function ajouterPersonnage(){
        axios.post("http://localhost:3000/pnj/",{
            "pnj" : {
                "nom": {
                    "prenom": formulairePrenom,
                    "nomfamille": formulaireNom
                },
                "dateAjout": dateDuJour,
                "niveauDefi": formulaireNiveauDefi,
                "vivant": formulaireVivant,
                "pointVie": formulairePointVie,
                "pouvoirs":tableauPouvoir,
                "resume": formulaireResume
            }
        } )
    }

    function modifierPersonnage(){
        axios.put("http://localhost:3000/pnj/" + props.identifiant,{
            "pnj" : {
                "nom": {
                    "prenom": formulairePrenom,
                    "nomfamille": formulaireNom
                },
                "dateAjout": dateDuJour,
                "niveauDefi": formulaireNiveauDefi,
                "vivant": formulaireVivant,
                "pointVie": formulairePointVie,
                "pouvoirs":tableauPouvoir,
                "resume": formulaireResume
            }
        } )
    }

  

  /**
   * Cette fonction ajoute une entrée vide dans le tableau de pouvoir.
   */
  function ajouterPouvoir(){
    const nouveauTableau = [...tableauPouvoir];
    const nouveauPouvoir: FormulairePouvoir = { nom: "", cout: "", description: "" };
    nouveauTableau.push(nouveauPouvoir);
    setTableauPouvoir(nouveauTableau);
  };


  /**
   * Cette fonction retire une entrée vide dans le tableau de pouvoir.
   */
  function retirerPouvoir(){ 
      const nouvelEtatTableau = tableauPouvoir.slice(0, tableauPouvoir.length - 1);
      setTableauPouvoir(nouvelEtatTableau);
  };


    return (
      <div className="container">
        <div className="info">
            <form>

                <label><FormattedMessage id="formulaire.label.prenom" defaultMessage="Prénom"></FormattedMessage></label>
                <input name="prenom" onChange={(e) => {
                    setFormulairePrenom(e.target.value);
                }}></input><br></br>

                <label><FormattedMessage id="formulaire.label.nom" defaultMessage="Nom"></FormattedMessage></label>
                <input name="nom" onChange={(e) => {
                    setFormulaireNom(e.target.value);
                }}></input><br></br>

                <label><FormattedMessage id="formulaire.label.defi" defaultMessage="Le niveau de défi"></FormattedMessage></label>
                <input name="niveauDefi" type="number" onChange={(e) => {
                    setFormulaireNiveauDefi(e.target.valueAsNumber);
                }}></input><br></br>

                <label><FormattedMessage id="formulaire.label.vivant" defaultMessage="Le personnage est en vie."></FormattedMessage></label>
                <input name="vivant" type='checkbox' onChange={(e) => {
                    setFormulaireVivant(e.target.checked)
                }}></input><br></br>

                <label><FormattedMessage id="formulaire.label.pv" defaultMessage="Le nombre de point de vie du personnage"></FormattedMessage></label>
                <input name="pointVie" type='number' onChange={(e) => {
                    setFormulairePointVie(e.target.valueAsNumber)
                }}></input><br></br>

                    
                <div id="pouvoir">
                <label><FormattedMessage id="formulaire.label.pouvoir" defaultMessage="Les pouvoirs"></FormattedMessage></label>
                {tableauPouvoir.map((element, index) => (              
                    <div key={index}>
                        <label><FormattedMessage id="formulaire.label.pouvoir.numeroPouvoir" defaultMessage="Pouvoir" values={{numero: index+1}}></FormattedMessage></label><br />
                        <label><FormattedMessage id="formulaire.label.pouvoir.nom" defaultMessage="Nom du pouvoir"></FormattedMessage></label>
                        <input name={"nompouvoir" + index} value={element.nom}
                            onChange={(e) => {
                                const nouvelEtatTableau = [...tableauPouvoir];
                                nouvelEtatTableau[index].nom = e.target.value;
                                setTableauPouvoir(nouvelEtatTableau);
                            }}
                        /><br />
                        <label><FormattedMessage id="formulaire.label.pouvoir.cout" defaultMessage="Coût"></FormattedMessage></label>
                        <input name={"cout" + index} value={element.cout}
                            onChange={(e) => {
                                const nouvelEtatTableau = [...tableauPouvoir];
                                nouvelEtatTableau[index].cout = e.target.value;
                                setTableauPouvoir(nouvelEtatTableau);
                            }}
                        /><br />
                        <label><FormattedMessage id="formulaire.label.pouvoir.description" defaultMessage="Description du pouvoir"></FormattedMessage></label>
                        <input name={"description" + index} value={element.description}
                            onChange={(e) => {
                                const nouvelEtatTableau = [...tableauPouvoir];
                                nouvelEtatTableau[index].description = e.target.value;
                                setTableauPouvoir(nouvelEtatTableau);
                            }} 
                        /><br />
                </div>

                    ))}
            </div>
                    <button onClick={(e) => { e.preventDefault(); 
                        ajouterPouvoir();
                         }}>
                            <FormattedMessage id="formulaire.bouton.pouvoir.ajouter" defaultMessage="Ajouter un pouvoir"></FormattedMessage>
                    </button>
                    <button onClick={(e) => {e.preventDefault(); 
                        if(tableauPouvoir.length > 0){
                            retirerPouvoir();
                        }
                       
                        }}>
                        <FormattedMessage id="formulaire.bouton.pouvoir.retirer" defaultMessage=" Retirer le dernier pouvoir"></FormattedMessage>
                    </button><br></br>
                    <label><FormattedMessage id="formulaire.label.resume" defaultMessage="Résumé du personnage"></FormattedMessage></label>
                <input name="resume" onChange={
                    (e) => setFormulaireResume(e.target.value)
                }></input><br></br>
            </form>

        

    {
    
    }     
    {!props.formulaireDeModification && (
        <button onClick={(e) => {e.preventDefault(); ajouterPersonnage();}}>
            <FormattedMessage id="formulaire.bouton.personnage.ajouter" defaultMessage="Ajouter le personnage"></FormattedMessage>  
        </button> )}
    {props.formulaireDeModification &&(
        <button onClick={(e) => {e.preventDefault(); modifierPersonnage();}}>
             <FormattedMessage id="formulaire.bouton.personnage.modifier" defaultMessage="Modifier le personnage"></FormattedMessage>
        </button> )}

        
        </div>
      </div>
    );
};

export default Formulaire;






