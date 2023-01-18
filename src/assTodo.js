import React, { useState } from "react";
// import todoList from "./todoList";

const Apps = () => {

  const [inputList, setInputList] = useState("")
  const [Items, setItems] = useState([])

  const itemEvent = (event) => {
    setInputList(event.target.value)
  }
  const listOfItem = () => {
    setItems((oldItems) =>{
      return [...oldItems,inputList]
    });
    setInputList("")
   }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>ToDo List</h1>
          <input type="text" placeholder='Add a item' value={inputList} onChange={itemEvent} />

          <button onClick={listOfItem}>ADD</button>
          <ol>
            {/* <li> {inputList}</li> */}

            {Items.map((intemval) => {
             return <todoList text={intemval} />
            })}
          </ol>
        </div>

      </div>
    </>
  )
}
export default Apps;