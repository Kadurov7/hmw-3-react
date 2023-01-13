 import { ExpenseItem } from "../expense-item/ExpenseItem"
 import "./Expensis.css";
//  import { ExoticComponent } from "react";
 import { ExpenseFilter } from "../ExpenseFilter/ExpenseFilter";
import { useState } from "react";


 export const Expenses=({expenses})=>{

  const [selectedYear, setSelectedYear] = useState("2023")

  const yearChangeHandler = (event) =>{
    setSelectedYear(event.target.value)
  };

    const filteredItems = expenses.filter((element)=>{
      const stringifiedYear = element.date.getFullYear().toString()
      return stringifiedYear === selectedYear
    })
  
  console.log(filteredItems);
  return(
   
    
    <ul className="ul">
      <ExpenseFilter value={selectedYear} onChange={yearChangeHandler}/>
      {filteredItems.map((elem)=>{
        return (
         
        <ExpenseItem title={elem.title} 
        price={elem.price} 
        date={elem.date}/>
        
        )
      })}
    </ul>
    
  );
 }