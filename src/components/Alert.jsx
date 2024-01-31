import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetAlert } from "../Features/TaskSlice";

const Alert = ({ showAlert }) => {
  const dispatch = useDispatch();
  const { msg, show, type } = useSelector((state) => state.tasks.Alert);
  useEffect(() => {
    const disAppearMessage = setTimeout(() => {
      showAlert();
    }, 3000);

    return () => clearTimeout(disAppearMessage);
  }, []);
  return (
    <div className={`alert alert-${type}`}>
      <p>{msg}</p>
    </div>
  );
};

export default Alert;
