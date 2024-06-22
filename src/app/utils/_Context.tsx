import React, { createContext, useState } from 'react';



interface MyContextValue {
    someData: string;
    setSomeData: React.Dispatch<React.SetStateAction<string>>;
  }

const MyContext = createContext<MyContextValue>({ someData:"" , setSomeData:()=>{}  } );

export default MyContext;