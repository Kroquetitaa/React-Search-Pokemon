import React, { memo } from "react";
import './DeletedPokemon.css'

export const DeletedPokemon = memo(({ pokemon }) => {
    console.log( pokemon )
  return (
    <div className="deletedPokemon">
      <h2>Escribe un pokemon</h2>
      <p className="deletedPokemon-load"> . . . </p>
    </div>
  );
});
