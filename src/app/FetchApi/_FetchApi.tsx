"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";
import { useMyContext } from "../utils/_ContextProvider";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const fetchApi = async (): Promise<Post[]> => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
};


const ApiFetch = () => {
  const { setSomeData } = useMyContext();

  const { data: PostsApi, error, isLoading } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: fetchApi,
    staleTime: 1000,
  });
console.log(PostsApi)
  useEffect(() => {
    if (PostsApi) {
      setSomeData(PostsApi);
    }
  }, [PostsApi, setSomeData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  

  return null
};

export default ApiFetch;
