import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function ModalHOC(props) {
  const { component, handleSubmit, titleModal } = useSelector(
    (rootReducer) => rootReducer.modalReducer
  );
  return (
    <div
      className="modal fade"
      id="modelId"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header border-0">
            <h5 className="modal-title d-flex ml-auto mr-auto">{titleModal} Fiverr</h5>
          </div>
          <div className="modal-body">
            {/* gọi props thế này nếu attribute truyền vào là 1 component */}
            {/* <props.component /> */}

            {component}
          </div>
          {/* <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              onClick={handleSubmit}
              type="button"
              className="btn btn-primary"
            >
              Save
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
