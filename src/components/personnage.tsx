import './personnage.css'
import Pouvoir, { IPouvoirProps } from './pouvoir'
import Nom, {INomProps} from './nom.tsx'
import {Card, CardMedia, CardActionArea} from '@mui/material';
import { FormattedDate } from 'react-intl';


interface IPersonnageProps {
  nom:INomProps;
  dateAjout: string;
  niveauDefi: number;
  vivant: boolean;
  pointVie: number;
  pouvoir: IPouvoirProps[];
  resume: string;
}


const Personnage = (props: IPersonnageProps) => {

var estVivant;
    if(props.vivant){
        estVivant = "Vivant"
    }
    else{
        estVivant = "Mort"
    }
    return (
      <div className="container">
      
        <div className="info">
          <Nom prenom={props.nom.prenom} nomfamille={props.nom.nomfamille}></Nom>
          <p className=""><FormattedDate value={props.dateAjout} year="numeric" month="long" day="2-digit"/></p>
          <p className="">{props.niveauDefi}</p>
          <p className="">{estVivant}</p>
          <p className="">{props.pointVie}</p>
          <p className="">{props.resume}</p>
          {(props.pouvoir ?? []).map((element, index) => {return(
            <Pouvoir 
              key={index}
              nompouvoir={element.nompouvoir}
              cout={element.cout} 
              description={element.description}>
            </Pouvoir>
            )})}
          
        </div>
   </div>
    );
};

export default Personnage;