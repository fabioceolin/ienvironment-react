import React from "react";

import { ModalOverlay, ModalWrapper, ModalC, ModalHeader } from "./styles";

interface ModalProps {
  isShowing: boolean;
  hide(): void;
}

const Modal: React.FC<ModalProps> = ({ isShowing, hide, children }) =>
  isShowing ? (
    <>
      <ModalOverlay />
      <ModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
        <ModalC>
          <ModalHeader>
            <button
              type="button"
              data-dismiss="modal"
              aria-label="Close"
              onClick={hide}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </ModalHeader>
          {children}
        </ModalC>
      </ModalWrapper>
    </>
  ) : null;

export default Modal;
