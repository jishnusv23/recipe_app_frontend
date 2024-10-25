import axios from "axios";
import  { useEffect, useState } from "react";

const RandomUsers = () => {
  const [randomUsers, setRandomUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=10"
        );
        setRandomUsers(response.data.results);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5  gap-5">
      {randomUsers.map((user, index) => (
        <div key={index} className="text-center">
          <img
            src={user.picture.thumbnail}
            alt={`${user.name.first} ${user.name.last}`}
            className="w-16 h-16 rounded-full mx-auto mb-2"
          />
          <p className="font-bold hover:text-blue-400">{`${user.name.first} ${user.name.last} `}</p>
        </div>
      ))}
    </div>
  );
};

export default RandomUsers;
