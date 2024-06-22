"use client";

import React from "react";
import { useMyContext } from "../utils/_ContextProvider";

const Posts: React.FC = () => {
  const { someData } = useMyContext();
  console.log(someData);
  return (
    <div className="flex flex-col space-y-3">
      {someData ? (
        someData.map((post) => (
          <div key={post.id} className="bg-sky-200 mx-10 px-4 py-4 rounded-lg">
            <h1>User Id : {post.userId}</h1>
            <h3>title : {post.title}</h3>
            <p>body : {post.body}</p>
            <p className=" text-red-500">item : {post.id}</p>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Posts;
