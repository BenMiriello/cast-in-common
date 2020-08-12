import React from "react";

const CastCard = ({ image, name, character }) => {
  return (
    <div className="movie-card">
      <img
        className="cast-member-image"
        src={`https://image.tmdb.org/t/p/w276_and_h350_face` + image}
        alt={name}
      />
      <p>{name}</p>
      <p>{character}</p>
    </div>
  );
};

export default CastCard;
