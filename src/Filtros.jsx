import React from "react";
import "./styles.css";

let Filtros = (props) => {
  let {
    pais,
    setPais,
    precio,
    setPrecio,
    tamanio,
    setTamanio,
    desde,
    setDesde,
    hasta,
    setHasta
  } = props;

  const resetearFiltros = () => {
    setPais("todos");
    setPrecio("todos");
    setTamanio("todos");
    setDesde("");
    setHasta("");
  };

  let manejarCambioPais = (event) => {
    setPais(event.target.value);
  };

  let manejarCambioPrecio = (event) => {
    setPrecio(event.target.value);
  };

  let manejarCambioTamanio = (event) => {
    setTamanio(event.target.value);
  };

  let manejarCambioDesde = (event) => {
    setDesde(event.target.value);
  };

  let manejarCambioHasta = (event) => {
    setHasta(event.target.value);
  };

  return (
    <div className="filtros-container">
      <div className="flex">
        <span className="filter-text">Desde</span>
        <input onChange={manejarCambioDesde} value={desde} type="date" />
      </div>
      <div className="flex">
        <span className="filter-text">Hasta</span>
        <input onChange={manejarCambioHasta} value={hasta} type="date" />
      </div>
      <div className="flex">
        <span className="filter-text">Pais</span>
        <select onChange={manejarCambioPais} value={pais} name="paises" id="">
          <option value="todos">Todos</option>
          <option value="argentina">Argentina</option>
          <option value="brasil">Brasil</option>
          <option value="chile">Chile</option>
          <option value="uruguay">Uruguay</option>
        </select>
      </div>
      <div className="flex">
        <span className="filter-text">Precio</span>
        <select
          onChange={manejarCambioPrecio}
          value={precio}
          name="precio"
          id=""
        >
          <option value="todos">Todos</option>
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
          <option value="$$$$">$$$$</option>
        </select>
      </div>
      <div className="flex">
        <span className="filter-text">Tamaño</span>
        <select
          onChange={manejarCambioTamanio}
          value={tamanio}
          name="tamaño"
          id=""
        >
          <option value="todos">Todos</option>
          <option value="pequeño">Pequeño</option>
          <option value="mediano">Mediano</option>
          <option value="grande">Grande</option>
        </select>
      </div>
      <button onClick={resetearFiltros} className="boton-limpiar">
        Limpiar
      </button>
    </div>
  );
};

export default Filtros;
