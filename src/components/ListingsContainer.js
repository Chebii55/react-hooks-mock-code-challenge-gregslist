import React from "react";
import { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ searchText }) {
  const url = "http://localhost:6001/listings";
  const [data, setData] = useState([]);
  const [deletedId, setDeleteId] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [deletedId]);

  const displayItems = searchText
    ? data.map((data) => {
        console.log(data);
        let inc = data.description.toLowerCase().includes(searchText);
        return (
          inc && (
            <ListingCard
              deletedId={deletedId}
              description={data.description}
              image={data.image}
              location={data.location}
              id={data.id}
              key={data.id}
              setDeleteId={setDeleteId}
            />
          )
        );
      })
    : data.map((data) => (
        <ListingCard
          description={data.description}
          image={data.image}
          location={data.location}
          id={data.id}
          key={data.id}
          setDeleteId={setDeleteId}
        />
      ));

  return (
    <main>
      <ul className="cards">{displayItems}</ul>
    </main>
  );
}

export default ListingsContainer;
