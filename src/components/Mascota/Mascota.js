import React from "react";

export function Mascota({ mascotaObj }) {
  return (
    <li>
      <div>
        <img src="props.mascotObj.foto" alt="props.mascotObj.nombre" />
        <span>{mascotaObj.especie}</span>
        <h3>{mascotaObj.nombre}</h3>
        <span>Fecha de Ingreso: {mascotaObj.fechaIngreso}</span>
        <span>Edad: {mascotaObj.edad}</span>
        <span>Tamaño: {mascotaObj.tamaño}</span>
        <p>Descripcion: {mascotaObj.descripcion}</p>
      </div>
    </li>
  );
}
