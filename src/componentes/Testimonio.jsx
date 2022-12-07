import React from "react";
import '../App.css';

const Testimonio = (props) => {
  const {nombre, pais, cargo, empresa, testimonio, imagenSrc} = props;
  return (
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio" src={require(`../imagenes/${imagenSrc}`)} alt="emma" />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><b>{nombre}</b> en <b>{pais}</b></p>
        <p className="cargo-testimonio">{cargo} en <b>{empresa}</b></p>
        <p className="texto-testimonio">{testimonio}</p>
      </div>
    </div>
  );
};

export default Testimonio;