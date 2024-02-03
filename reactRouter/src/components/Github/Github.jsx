import React from "react";
// import { useState, useEffect } from 'react'
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  // const [data, setData] = useState([])
  // useEffect(()=>{
  //     fetch("https://api.github.com/users/mohd-sami29")
  //     .then((Response) => Response.json())
  //     .then((data) => setData(data))
  // }, [])

  return (
    <div className="text-center bg-purple-400 font-bold p-2">
      Github Followers : {data.followers}
      <img
        className="text-center ml-44"
        src={data.avatar_url}
        alt="Github Profile Pic"
        width={240}
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const Response = await fetch("https://api.github.com/users/mohd-sami29");
  return Response.json();
};
