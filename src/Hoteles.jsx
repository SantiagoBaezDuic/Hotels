import React from "react";
import Hotel from "./Hotel.jsx";

let Hoteles = (props) => {
  let { pais, precio, tamanio, desde, hasta, listaHoteles } = props;

  let desdeUNIX = new Date(desde).getTime();
  let hastaUNIX = new Date(hasta).getTime();

  const listaFiltradaPais = listaHoteles.filter((hotel) => {
    if (pais === "todos") {
      return true;
    } else {
      return hotel.country.toLowerCase() === pais.toLowerCase();
    }
  });

  const listaFiltradaPaisYPrecio = listaFiltradaPais.filter((hotel) => {
    if (precio === "todos") {
      return true;
    } else {
      let precioNumero = precio.length;
      return hotel.price === precioNumero;
    }
  });

  const listaFiltradaPaisPrecioYTamanio = listaFiltradaPaisYPrecio.filter(
    (hotel) => {
      if (tamanio === "todos") {
        return true;
      } else {
        if (tamanio === "pequeño") {
          return hotel.rooms <= 10;
        } else {
          if (tamanio === "mediano") {
            return hotel.rooms > 10 && hotel.rooms < 20;
          }
        }
      }
      return hotel.rooms >= 20;
    }
  );

  const listaFiltradaPaisPrecioTamanioYFecha = listaFiltradaPaisPrecioYTamanio.filter(
    (hotel) => {
      if (hasta === "") {
        return true;
      } else {
        return (
          desdeUNIX >= hotel.availabilityFrom &&
          hastaUNIX <= hotel.availabilityTo
        );
      }
    }
  );

  return (
    <div className="hoteles-container">
      {listaFiltradaPaisPrecioTamanioYFecha.map((object) => {
        return (
          <Hotel
            name={object.name}
            photo={object.photo}
            description={object.description}
            availabilityFrom={object.availabilityFrom}
            availabilityTo={object.availabilityTo}
            rooms={object.rooms}
            city={object.city}
            country={object.country}
            price={object.price}
            key={object.slug}
          />
        );
      })}
      {listaFiltradaPaisPrecioTamanioYFecha.length < 1 ? (
        <h1 className="alerta-ninguno">
          Ningún hotel cumple con los requisitos
        </h1>
      ) : null}
    </div>
  );
};

export default Hoteles;
