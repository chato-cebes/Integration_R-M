import React, { useEffect } from "react";
import Card from "./Card";

export default function Cards({ characters, onClose }) {
  return (
    <div>
      {characters.map(({ id, name, species, gender, image }) => {
        return (
          <Card
            key={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={() => onClose(id)}
          />
        );
      })}
    </div>
  );
}
