import { useEffect, useState } from "react";
import SuggestionsProfile from "./SuggestionsProfile";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=6")
      .then((result) => result.json())
      .then((data) => {
        setSuggestions(
          data.results.map((person) => ({
            id: person.email,
            img: person.picture.medium,
            username: `${person.name.first} ${person.name.last}`,
            place: `${person.location.city} ${person.location.state} ${person.location.country}`,
          }))
        );
      });
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      {suggestions.map((person) => (
        <SuggestionsProfile
          key={person.id}
          img={person.img}
          username={person.username}
          place={person.place}
        />
      ))}
    </div>
  );
};

export default Suggestions;
