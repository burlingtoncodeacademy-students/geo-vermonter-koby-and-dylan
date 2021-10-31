import react from "react";
// This is from an example code for testing...
function Modal(props) {
  return (
    <div class="modalBackground">
      <div class="modalContainer">
        <div class="titleCloseBtn">
          <button
            onClick={() => {
              props.setOpenModal(false);
            }}
          >
            {" "}
            Close{" "}
          </button>
        </div>
        <div class="title">
          <h1>Are you sure?</h1>
        </div>
        <div class="body">
          <p> Blah Blah</p>
        </div>
        <div class="footer">
          <button
            onClick={() => {
                props.setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue (does nothing)</button>
        </div>
      </div>
    </div>
  );
}

export default Modal