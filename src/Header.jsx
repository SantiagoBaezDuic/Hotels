import React from "react";
import "./styles.css";

let Header = (props) => {
  let { pais, desde, hasta } = props;

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  let paisSelec = pais.charAt(0).toUpperCase() + pais.slice(1);

  let fechaDesde = new Date(desde + "T00:00:00").toLocaleDateString(
    "es-AR",
    options
  );

  let desdeSelec = fechaDesde.charAt(0) + fechaDesde.slice(1);

  let fechaHasta = new Date(hasta + "T00:00:00").toLocaleDateString(
    "es-AR",
    options
  );

  let hastaSelec = fechaHasta.charAt(0) + fechaHasta.slice(1);
  return (
    <div className="header-container">
      <h1>Reserva de hoteles</h1>
      <h3>
        Usted está buscando un hotel en{" "}
        {paisSelec === "Todos" ? "cualquier país" : paisSelec}
      </h3>
      {desde === "" ? (
        <h3>Seleccione una fecha de llegada</h3>
      ) : (
        <h3>Con disponibilidad entre el {desdeSelec}</h3>
      )}
      {desde === "" ? null : (
        <span>
          {hasta === "" ? (
            <h3>Seleccione una fecha de salida</h3>
          ) : (
            <h3>y el {hastaSelec}</h3>
          )}
        </span>
      )}
      {hasta !== "" && desde > hasta ? (
        <h2 className="alerta-malselec">Por favor, revise las fechas</h2>
      ) : null}
    </div>
  );
};

export default Header;
