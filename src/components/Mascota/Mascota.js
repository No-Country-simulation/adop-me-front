import React from "react";

export function Mascota(props) {
  return (
    <li>
      <div>
        <img src="props.mascotObj.foto" alt="props.mascotObj.nombre" />
        <span>{props.mascotaObj.especie}</span>
        <h3>{props.mascotaObj.nombre}</h3>
        <span>Fecha de Ingreso: {props.mascotaObj.fechaIngreso}</span>
        <span>Edad: {props.mascotaObj.edad}</span>
        <span>Tamaño: {props.mascotaObj.tamaño}</span>
        <p>Descripcion: {props.mascotaObj.descripcion}</p>
      </div>
    </li>
  );
}
