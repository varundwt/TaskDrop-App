import "../App.css";
import React from "react";
import { useState } from "react";
import delete_icon from "../assets/delete.svg";

function Body() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [itemLength, setItemLength] = useState(0);

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleTask = () => {
    do {
      if (value === "") {
        alert("Please Enter a Valid Entry!")
        setList([...list]);
        setItemLength(list.length + 0);
      } else {
        setList([...list, value]);
        setValue("");
        setItemLength(list.length + 1);
      }
    } while (list.length >= 8);
  };

  const handleDelete = (i) => {
    const fileteredList = list.filter((deleted) => deleted !== list[i]);

    setList(fileteredList);
    setItemLength(list.length - 1);
  };

  console.log(list);
  console.log(value);

  return (
    <div className="App">
      <div className="container">
        <div className="input">
          <input
            type="text"
            placeholder="Enter your task"
            value={value}
            onChange={handleInput}
            maxLength='20'
          />{" "}
          <button onClick={handleTask}>Add Task</button>
        </div>
        <h3 style={{ color: "#302F2F" }}>Pending Task Items: {itemLength}</h3>
        <ul>
          {list.map((item, i) => (
            <li key={i}>
              {item}{" "}
              <div onClick={() => handleDelete(i)}>
                <img
                  className="delete-icon"
                  src={delete_icon}
                  alt="delete_icon"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Body;
