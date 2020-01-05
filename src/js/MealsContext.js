import React, {createContext, useState} from 'react'
export const MealsContext = createContext();

export const MealsProvider = (props) => {
  const [meals, setMeals] = useState([]);

  return (
    <MealsContext.Provider value={[meals, setMeals]}>
      {props.children}
    </MealsContext.Provider>
  )
}
