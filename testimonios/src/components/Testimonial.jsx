import React from "react";

export default function Testimonio({ item }) {
  const { nombre, cargo, texto, foto } = item;
  return (
    <article className = "testimonio-card">
      <img src = {foto} alt = {nombre} className = "testimonio-foto" />
      <h3 className = "testimonio-nombre"> {nombre} </h3>
      <p className = "testimonio-cargo"> {cargo} </p>
      <p className = "testimonio-texto"> {texto} </p>
    </article>
  )
}