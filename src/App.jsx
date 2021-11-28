import React, { useState } from "react";
import Hoteles from "./Hoteles";
import Header from "./Header";
import Filtros from "./Filtros";
import { hotelsData } from "./data.js";

let App = () => {
  let [pais, setPais] = useState("todos");
  let [precio, setPrecio] = useState("todos");
  let [tamanio, setTamanio] = useState("todos");
  let [desde, setDesde] = useState("");
  let [hasta, setHasta] = useState("");

  return (
    <div>
      <Header pais={pais} desde={desde} hasta={hasta} />
      <Filtros
        pais={pais}
        setPais={setPais}
        precio={precio}
        setPrecio={setPrecio}
        tamanio={tamanio}
        setTamanio={setTamanio}
        desde={desde}
        setDesde={setDesde}
        hasta={hasta}
        setHasta={setHasta}
      />
      <Hoteles
        pais={pais}
        precio={precio}
        tamanio={tamanio}
        desde={desde}
        hasta={hasta}
        listaHoteles={hotelsData}
      />
    </div>
  );
};

export default App;
