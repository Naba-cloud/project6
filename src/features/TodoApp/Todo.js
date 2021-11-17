import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { add, del, edit,statusFinder } from "./todoSlice.js";
import swal from 'sweetalert';

const Todo = () => {
  const [text, setText] = useState("");

// const todo=useSelector(state=>state.todo.value);

  let {value, temp,statusVal,color} = useSelector(
    (state) => ({
      value: state?.todo?.value,
      temp: state?.todo?.temp,
      statusVal:state?.todo?.statusVal,
      color:state?.todo?.color,
    }), shallowEqual
  )
  const todo = value;
  // console.log(todo);
  // console.log(mark);
  // console.log(statusVal);
  const dispatch = useDispatch();
  const addVal = () => {
    if (text !== "") {
      dispatch(add({
        id: Math.floor(Math.random() * 10000000),
        value: text,
        color: "yellow",
        statusVal: "IsPending"
      }));
      swal({
        title: "Data Added Successfully!",
        icon: "success",
      });
      setText("");
    } else {
      swal("Fields Can't be Empty");
    }
  }
const statusandColor=(e,key)=>{
    let a=e.target.value;
console.log(a);
console.log(key);
dispatch(statusFinder({a,key}));
  }

  function delData(key) {
    dispatch(del(key));
    swal({
      title: "Data Deleted Successfully!",
      icon: "success",
    });
  }

  const editData = (key) => {
    let a = prompt("Enter Value");
    if(a!=="") {
      // console.log(temp[key].value);
      dispatch(edit({a, key}));
    }else {
      swal("Kindly Fill The Value To Edit")
    }
  }

  const handleKeyPress = (e) => {
    if(e.key ==="Enter")
    {
      addVal();
    }
  }


  return (<div className="App">

   <h1>  <i className="fa fa-file"></i>  A Simple Todo Application</h1>

    <input onKeyPress={handleKeyPress} value={text} onChange={(e) => {
      setText(e.target.value)
    }} type="text"/>
    <button className="btn m-3 " onClick={addVal}>Add</button>

    {/*   <p>{todo}</p> */}
    {temp.map((vals, key) => {
      console.log(vals)
      return (<div className="container-fluid" key={key}>
        <span style={{color: vals?.color}}>{value?.id}{vals?.value}</span>
        <button className="btn m-3 " onClick={() => {
          delData(key)
        }}>Delete
        </button>
        <button className="btn m-3 " onClick={() => editData(key)}>Edit</button>
        <select  onChange={ (event)=>{statusandColor(event,key)}}>
          <option value="IsPending">IsPending</option>
          <option value="Done">Done</option>
          <option value="Cancelled">Cancelled</option>

        </select>

      </div>)
    })}
  </div>)

}
export default Todo;
