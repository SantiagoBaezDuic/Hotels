import React from "react";
import "./styles.css";

let Hotel = (props) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  let desdeDia = new Date(props.availabilityFrom).toLocaleDateString(
    "es-AR",
    options
  );
  let hastaDia = new Date(props.availabilityTo).toLocaleDateString(
    "es-AR",
    options
  );

  return (
    <div className="card">
      <img width="300px" src={props.photo} alt="{props.name}" />
      <h2 className="card-title">{props.name}</h2>
      <div className="espaciador"></div>
      <div className="tags">
        {props.city}, {props.country}
      </div>
      <div className="tags">
        {props.price === 1 ? "$" : null}
        {props.price === 2 ? "$$" : null}
        {props.price === 3 ? "$$$" : null}
        {props.price === 4 ? "$$$$" : null}
      </div>
      <div className="tags">Habitaciones: {props.rooms}</div>
      <div className="tags">{desdeDia}</div>
      <div className="tags">{hastaDia}</div>
      <div className="espaciador"></div>
      <div className="texto-descriptivo">{props.description}</div>
      <div className="espaciador"></div>
      <button href="" className="boton-reserva">
        RESERVAR
      </button>
    </div>
  );
};

export default Hotel;
