import './pouvoir.css'

export interface INomProps {
  prenom: string;
  nomfamille: string;
}

const Nom = (props: INomProps) => {

    return (
      <div className="container">
        <div className="info">
          <p className="">{props.prenom} {props.nomfamille}</p>
        </div>
      </div>
    );
};

export default Nom;