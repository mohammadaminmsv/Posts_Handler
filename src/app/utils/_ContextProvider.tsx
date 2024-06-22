"use client"

import React, { createContext, useState, ReactNode, useContext } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface MyContextType {
  someData: Post[] | null;
  setSomeData: React.Dispatch<React.SetStateAction<Post[] | null>>;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export const useMyContext = (): MyContextType => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};

export const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [someData, setSomeData] = useState<Post[] | null>(null);

  return (
    <MyContext.Provider value={{ someData, setSomeData }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
