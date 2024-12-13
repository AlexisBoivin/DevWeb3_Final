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
          <p className="">Pouvoir: {props.nompouvoir}</p>
          <p className="">Cout du pouvoir: {props.cout}</p>
          <p className="">Description: {props.description}</p>
        </div>
      </div>
    );
};

export default Pouvoir;