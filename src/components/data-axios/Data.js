import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Data() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        const url = "https://randomuser.me/api/";
        axios
        .get(url)
        .then((response) => {
            setData(response.data);
        })
        .catch(error => console.error(`Error: ${error}`))
    }

    const handleClick = () => {
        fetchData();
    }

    return (
        <div className="App">
            {data && 
                <Card user={data.results[0]} />
            }
            <button onClick={handleClick}>Click for a new FACE</button>
        </div>
    )
}

function Card({ user }) {
    const fullName = `${user.name.first} ${user.name.last}`;
    const profilePicture = user.picture.large;
    const email = user.email;
    const location = `${user.location.city}, ${user.location.state}, ${user.location.country}`;
  
    return (
      <div className="card">
        <img src={profilePicture} alt={fullName} />
        <h2>{fullName}</h2>
        <p>{email}</p>
        <p>{location}</p>
      </div>
    );
  }
  