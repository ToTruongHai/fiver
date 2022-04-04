import { NavLink } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import Join from "../../pages/Join/Join";

import React from "react";

export default function HeaderHome() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className="btn btn-outline-success"
        data-toggle="modal"
        data-target="#modelId"
        onClick={() => {
          const action = {
            type: "OPEN_FORM",
            component: <Join />,
            titleModal: "Join",
            handleSubmit: () => {
              console.log("register sumbit");
            },
          };
          dispatch(action);
        }}
      >
        Join
      </button>
    </div>
  );
}
