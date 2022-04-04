import { NavLink } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

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
         
        }}
      >
        Join
      </button>
    </div>
  );
}
