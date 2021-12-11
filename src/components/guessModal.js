import React from "react";
const Modal = ({ setOpenModal }) => {
  return (
    <div class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Vermont Counties</h4>
        </div>
        <div class="modal-body">
          {/* buttons for choices for counties in vermont */}
          <button>Addison</button>
          <button>Bennington</button>
          <button>Caledonia</button>
          <button>Chittenden</button>
          <button>Essex</button>
          <button>Franklin</button>
          <button>Grand Isle</button>
          <button>Lamoille</button>
          <button>Orange</button>
          <button>Orleans</button>
          <button>Rutland</button>
          <button>Washington</button>
          <button>Windham</button>
          <button>Windsor</button>
        </div>

        <div class="modal-footer">
          {/* button the closes the modal */}
          <button class="button" onClick={() => setOpenModal(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
