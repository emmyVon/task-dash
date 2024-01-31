import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItem,
  Markdone,
  Startedit,
  setActive,
  SetAlert,
} from "../Features/TaskSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
import Alert from "./Alert";
import { HiPencilAlt } from "react-icons/hi";
import { BsCheckCircle } from "react-icons/bs";
import AddTask from "./AddTask";

function TaskDisplay() {
  const dispatch = useDispatch();
  const { message, show, type } = useSelector((state) => state.tasks.Alert);
  const List = useSelector((state) => state.tasks.List);
  const [Newlist, setNewList] = useState([...List]);
  const [Add, setAdd] = useState(false);
  const Active = useSelector((state) => state.tasks.Active);
  useEffect(() => {
    setNewList(List);
  }, [List]);
  const showAlert = (show = false, msg = "", type = "") => {
    dispatch(SetAlert(show, msg, type));
  };

  const completedTask = (e) => {
    const id = e.target.getAttribute("id");
    console.log(id);
    const completed = List.filter((task) => task.done === true);
    setNewList(completed);
    dispatch(setActive(id));
  };
  const StillActive = (e) => {
    const id = e.target.getAttribute("id");
    const active = List.filter((task) => task.done === false);
    setNewList(active);
    dispatch(setActive(id));
  };
  const All = (e) => {
    const id = e.target.getAttribute("id");
    dispatch(setActive(id));
    setNewList(List);
  };

  return (
    <div className="App">
      <div className="container task-container">
        <div className="task-items">
          <div className="task-header">
            <h1>Task Manager</h1>
            {show && <Alert {...alert} showAlert={showAlert} list={List} />}
            <div className="options">
              <h4
                id="All"
                className={`${Active === "All" && "active"}`}
                onClick={All}
              >
                All
              </h4>
              <h4
                id="active"
                className={`${Active === "active" && "active"}`}
                onClick={(e) => StillActive(e)}
              >
                Active
              </h4>
              <h4
                id="completed"
                className={`${Active === "completed" && "active"}`}
                onClick={completedTask}
              >
                Completed
              </h4>
            </div>
          </div>
          <div className="divider" />
          <div className="list-items">
            <button
              className={Add ? "done btn" : "add btn"}
              type="button"
              onClick={() => setAdd((prev) => !prev)}
            >
              {Add ? "done" : "new Task"}
            </button>
            <div className="item-group">
              {Newlist.length ? (
                Newlist.map((todo) => {
                  const { id, Title, due, descrip } = todo;
                  return (
                    <div key={id} className="list-item">
                      <div className="task-des">
                        <div>
                          <p>{Title}</p>
                          <p>{due}</p>
                        </div>
                        <p>{descrip}</p>
                      </div>

                      <div className="todo-icons">
                        <p>
                          <RiDeleteBin6Line
                            onClick={() => dispatch(deleteItem(id))}
                          />
                        </p>
                        <p>
                          <HiPencilAlt
                            onClick={() => dispatch(Startedit(id))}
                          />
                        </p>
                        <p>
                          <BsCheckCircle
                            className="complete-icon"
                            onClick={() => dispatch(Markdone(id))}
                          />
                        </p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="empty">
                  You Currently don't have available Tasks
                </p>
              )}
            </div>
          </div>
        </div>
        {Add && <AddTask />}
      </div>
    </div>
  );
}

export default TaskDisplay;
