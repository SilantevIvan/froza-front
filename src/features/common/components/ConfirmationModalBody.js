import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { showNotification } from "../headerSlice";

function ConfirmationModalBody({ extraObject, closeModal }) {
  const dispatch = useDispatch();

  const { message, type, _id, index } = extraObject;

  return (
    <>
      <p className=" text-xl mt-8 text-center">{message}</p>

      <div className="modal-action mt-12">
        <button className="btn btn-outline   " onClick={() => closeModal()}>
          Cancel
        </button>

        <button className="btn btn-primary w-36">Yes</button>
      </div>
    </>
  );
}

export default ConfirmationModalBody;
