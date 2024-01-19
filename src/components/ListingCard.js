import React from "react";
import { useState } from "react";

function ListingCard({
  description,
  image,
  location,
  id,
  setDeleteId,
}) {
  const [isFavourite, setIsFavourite] = useState(false);
  function onClickFav() {
    setIsFavourite(!isFavourite);
  }
  const url = `http://localhost:6001/listings/${id}`;

  function onDeleteItem(id) {
    fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(() => {
        setDeleteId(id);
      });
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavourite ? (
          <button onClick={onClickFav} className="emoji-button favorite active">
            ★
          </button>
        ) : (
          <button onClick={onClickFav} className="emoji-button favorite">
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={onDeleteItem} className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
