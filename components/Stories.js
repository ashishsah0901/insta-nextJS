import { useEffect, useState } from "react";
import Story from "./Story";
import { useSession } from "next-auth/react";

const Stories = () => {
  const [stories, setStories] = useState([]);
  const { data: session } = useSession();
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
      .then((result) => result.json())
      .then((data) => {
        setStories(
          data.results.map((person) => ({
            id: person.email,
            img: person.picture.medium,
            username: `${person.name.first} ${person.name.last}`,
          }))
        );
      });
  }, []);
  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}
      {stories.map((profile) => (
        <Story username={profile.username} img={profile.img} key={profile.id} />
      ))}
    </div>
  );
};

export default Stories;
