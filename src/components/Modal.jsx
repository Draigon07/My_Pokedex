import React, { useRef } from "react";
import { createPortal } from "react-dom";
const modalRoot = document.getElementById("modal_details");

export default function Modal() {
  return createPortal(
    <div className="modal_container">
      <h2>Details</h2>
    </div>,
    modalRoot
  );
}
