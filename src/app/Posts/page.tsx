"use client";

import React from "react";
import { useMyContext } from "../utils/_ContextProvider";

const Posts: React.FC = () => {
  const { someData } = useMyContext();
  const addpost = () =>{
    
  }
  console.log(someData);
  return (
    <div className="flex flex-col space-y-3 items-center">
      <div className="flex bg-slate-100 flex-col space-y-5 w-3/5 items-center py-7">
        <label>title : </label>
        <input
          className="w-3/5 border-2 px-4 border-black rounded-lg"
          type="text"
        />
        <label>body:</label>
        <textarea className="w-3/5" />
        <button className="bg-sky-200 px-16 rounded-lg"  onClick={addpost}>Add your post</button>
      </div>
      <div className="flex flex-col space-y-3 ">
        {someData ? (
          someData.map((post) => (
            <div
              key={post.id}
              className="bg-sky-200 mx-10 px-4 py-4 rounded-lg"
            >
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
    </div>
  );
};

export default Posts;
