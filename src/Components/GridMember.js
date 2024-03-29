import React, { useState, useEffect } from "react";
import axios from "axios";

import Member from "./Member";
import { url } from "../api/api";

const GridMember = ({ user }) => {
  const [cards, setcards] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(
    () => {
      const fetchData = async () => {
        setLoading(true);
        const result = await axios(url("cards"));
        if (result.data.cards) setcards(result.data.cards);
        if (result.data.error) setError(result.data.error);
        setLoading(false);
      };
      fetchData();
    },
    // Reload if the user change
    [user]
  );

  if (error)
    return (
      <div>
        <p> {error} </p>
      </div>
    );

  return (
    <div className="columns w-full">
      {loading ? (
        <p className="ml-4 mt-4 text-gray-900 font-bold text-xl">
          Chargement des fiches ....
        </p>
      ) : (
        cards.map((card) => <Member key={card["Email"]} member={card} />)
      )}
    </div>
  );
};

export default GridMember;
