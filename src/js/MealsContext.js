import React, {createContext, useState} from 'react'
export const MealsContext = createContext();

export const MealsProvider = (props) => {
  const [data, setData] = useState({
    meals:[],
    mode:'1',
    lunchGen:[],
    dinnerGen:[]
  });

  return (
    <MealsContext.Provider value={[data, setData]}>
      {props.children}
    </MealsContext.Provider>
  )
}
