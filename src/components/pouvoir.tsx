import './pouvoir.css'

export interface IPouvoirProps {
  nompouvoir: string;
  cout: string;
  description: string;
}

const Pouvoir = (props: IPouvoirProps) => {

    return (
      <div className="container">
        <div className="info">
          <p className="">{props.nompouvoir}</p>
          <p className="">{props.cout}</p>
          <p className="">{props.description}</p>
        </div>
      </div>
    );
};

export default Pouvoir;