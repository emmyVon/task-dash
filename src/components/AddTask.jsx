import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleChange,
  SetAlert,
  editList,
  newitem,
} from "../Features/TaskSlice";

const AddTask = () => {
  const dispatch = useDispatch();
  const { message, show, type } = useSelector((state) => state.tasks.Alert);
  const { Title, descrip, due } = useSelector((state) => state.tasks.task);
  const List = useSelector((state) => state.tasks.List);
  const edit = useSelector((state) => state.tasks.edit);
  const showAlert = (show, msg, type) => {
    dispatch(SetAlert({ show, msg, type }));
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    dispatch(handleChange({ field: name, value }));
  };
  const DaysRemain = () => {
    const dueday = due.getTime();
    const today = new Date().getTime();
    const Remain = dueday - today;
    console.log(Remain);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Title || !descrip || !due) {
      showAlert(true, "please fill all input fields", "danger");
    } else if (Title && descrip && due && edit) {
      dispatch(editList({ Title, descrip, due }));
      showAlert(true, "Task edited successful", "sucess");
    } else {
      dispatch(newitem({ Title, descrip, due }));
      showAlert(true, "Task Added successful", "sucess");
      console.log(due);
    }
  };
  return (
    <form className="form-input">
      <div className="input-control">
        <label>Title: </label>
        <input
          placeholder="enter your name"
          name="Title"
          value={Title}
          onChange={handleInput}
        />
      </div>
      <div className="input-control">
        <label>Date: </label>
        <input
          type="date"
          placeholder="due date"
          name="due"
          value={due}
          onChange={handleInput}
        />
      </div>
      <div className="input-control">
        <label>Description: </label>
        <textarea
          placeholder="descriptiion"
          name="descrip"
          value={descrip}
          onChange={handleInput}
        />
      </div>
      <button type="submit" className="add-btn btn" onClick={handleSubmit}>
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
